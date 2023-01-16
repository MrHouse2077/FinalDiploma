<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;

use App\Http\Validators\FeedbackValidator;
use App\Http\Validators\LoginValidator;
use App\Http\Validators\SearchValidator;
use Illuminate\Validation\ValidationException;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

use App\Jobs\FeedbackJob;
use App\Models\Category;
use App\Models\Product;
use App\Models\Question;


class IndexController extends Controller
{
    function indexAction(Request $request){

        $validator = LoginValidator::loginCheck($request);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return RequestHelper::write(402, 'В доступе отказано');
        }

        $data = [
            "token" => $user->createToken("token_name")->plainTextToken,
            "name" => $user->name,
            "email" => $user->email,
        ];

        

        return RequestHelper::write(200, 'sucess', $data);
    }

    function checkToken(Request $request){
        $token = \Laravel\Sanctum\PersonalAccessToken::findToken($request->token);
        if(!$token){
            return RequestHelper::write(402, 'It isn\'t token');
        }
        $user = $token->tokenable;

        if(!$user){
            return RequestHelper::write(402, 'В доступе отказано');
        }
        $data = [
            "token" => $request->token,
            "email" => $user->email,
        ];
        return RequestHelper::write(200, 'sucess', $data);
    }

    function feedbackAction(Request $request){
        
        $validator = FeedbackValidator::feedbackCheck($request);
        if ($validator->fails()) {
            return ['flag' => 0, 'msg' => 'Ошибка!'];
        }
        
        FeedbackJob::dispatch($request->name, $request->email, $request->msg);

        return ['flag' => 1, 'msg' => 'Все отлично!'];
        

        
      
    }
    function ipAction(){
        $client  = @$_SERVER['HTTP_CLIENT_IP'];
        $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
        $remote  = @$_SERVER['REMOTE_ADDR'];
        $result  = array('countryName'=>'', 'countryCode'=>'');
        
        if(filter_var($client, FILTER_VALIDATE_IP)) 
            $ip = $client;
        elseif(filter_var($forward, FILTER_VALIDATE_IP)) 
            $ip = $forward;
        else 
            $ip = $remote;

        $ip = '31.134.188.52';//на данный момент айпи статический, чтобы проверять работоспособность

        $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));    
        if($ip_data && $ip_data->geoplugin_countryName != null)
        {
            $result = [ 
                        'name' => $ip_data->geoplugin_countryName,
                        'code' => $ip_data->geoplugin_countryCode,
                      ];
        }
        
        return $result;
    }
    function searchAction(Request $request){
        $validator = SearchValidator::searchCheck($request);
        if ($validator->fails()) {
            return RequestHelper::write(402, 'Not data for search');
        }
        if($request["mode"] == "products"){
            $products = Product::where('name', 'like', '%' . $request["msg"] . '%')->get();
            if(count($products) != 0){
                $data = [["products", $products]];
                return RequestHelper::write(200, 'sucess', $data);
            }
            else{
                $data = null;
                return RequestHelper::write(200, 'sucess', $data);
            }
        }
        if($request["mode"] == "all"){
            $products = Product::where('name', 'like', '%' . $request["msg"] . '%')->get();
            $category = Category::where('name', 'like', '%' . $request["msg"] . '%')->get();
            $data = [];
            $arrMainTable = ['products' => $products, 'categories' => $category];
            foreach($arrMainTable as $index => $element){
                if(count($element) > 0){
                    array_push($data, [$index, $element]);
                }
            }
            return RequestHelper::write(200, 'sucess', $data);
            if(count($products) == null && count($category) == null){
                $data = null;
                return RequestHelper::write(200, 'sucess', $data);
            }
        }
    }

    function quesAnsAction(){
        $qaf = Question::get();
        return RequestHelper::write(200, 'success', $qaf);
    }
    
}
 
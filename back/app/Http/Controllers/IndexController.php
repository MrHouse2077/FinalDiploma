<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;

use App\Http\Validators\FeedbackValidator;
use App\Http\Validators\LoginValidator;
use Illuminate\Validation\ValidationException;

use App\Models\User;

use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

use App\Jobs\FeedbackJob;



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

    
}
 
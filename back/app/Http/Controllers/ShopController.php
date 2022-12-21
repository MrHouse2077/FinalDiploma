<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CategoryResource;

use Illuminate\Support\Facades\Validator;
use App\Models\Category;

class ShopController extends Controller
{
    public function listProductsAction(Request $request){

        //return $request;

        if(isset($request['filter']['secelctMinPriceProduct']) 
            && isset($request['filter']['secelctMaxPriceProduct']) 
            && !empty($request['filter']['secelctMaxPriceProduct'])){
             
             $products = ProductResource::collection(Product::where([["price", "<", $request['filter']['secelctMaxPriceProduct']], 
                                                                     ["price", ">", $request['filter']['secelctMinPriceProduct']]])->get());
            
        }
        else{
            $products = ProductResource::collection(Product::all());
        }

        

        return RequestHelper::write(200, 'sucess', $products);

    }
    public function categoriesAction(){

        // $categories = Category::get();
        $categories = CategoryResource::collection(Category::all());


        return RequestHelper::write(200, 'sucess', $categories);
        
    }

    public function addNewCategoryAction(Request $request){
  

        $validated = Validator::make($request->all(),[
            'name' => 'required|min:2|max:200',
            'description' => 'max:1000',
        ],
        [
            'name.required' => 'Название категории обязательно для заполнения',
            'name.min:2' => 'Название категории минимум 2 символа',
            'name.max:200' => 'Название категории максимум 200 символов',
            'description.max:1000' => 'Превышена максимальная длина описани. Максимум 1000 символов'
        ]
        );

        // if ($validated->fails()) {
        //     return redirect()->route('admin_categories')->withErrors($validated)->with('error', 'Ошибка! Категория не добавлена')->withInput();
        // }

        $category = new Category;

        $category->name = $request->fieldName;
        $category->description = $request->fieldDescription;
    
        $category->save();

        return $category;
        //redirect()->route('admin_categories')->with('success', 'Ок! Категория успешно добавлена');
    }
    public function showCartAction(Request $request){
        //return RequestHelper::write(200, 'sucess', $request[1]);
        $data = [];
        if(count($request[1]) > 0){
            foreach($request[1] as $element){
                if(Product::where('id', $element["id"])->first()){
                        $product = Product::where('id', $element["id"])->first();
                        if($element["count"] <= $product->count){
                            $arr = ["product" => $product, "count" => $element["count"], "maxCount" => $product->count, "code" => 200];
                            array_push($data, $arr);
                        }
                        else{
                            $arr = ["product" => $product, "count" => $element["count"], "maxCount" => $product->count, "code" => 400];
                            array_push($data, $arr);
                        } 
                }
            }
            if(count($data) > 0){
                return RequestHelper::write(201, 'sucess', $data);
            }
        } 
        if(count($request[1]) == 0){
            return RequestHelper::write(200, 'sucess');
        }

    }
}

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

    
}

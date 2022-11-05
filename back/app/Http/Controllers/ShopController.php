<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;

class ShopController extends Controller
{
    public function listProductsAction(){

        //$products = Product::get();

        $products = ProductResource::collection(Product::all());

        return RequestHelper::write(200, 'sucess', $products);

    }
}

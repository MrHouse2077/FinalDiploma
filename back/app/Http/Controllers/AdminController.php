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
use App\Models\Characteristics;

class AdminController extends Controller{


    function addCharacteristicsAction(Request $request){
        $characteristics = new Characteristics;

        $characteristics->size = $request->size;
        $characteristics->color = $request->color;
        $characteristics->equipment = $request->equipment;
        
        $characteristics->save();

        return $characteristics;
    }

    function addProductAction(Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->main_photo = $request->main_photo;
        $product->price = $request->price;
        $product->old_price = $request->old_price;
        $product->count = $request->count;
        $product->category_id = $request->selectedCategory;
        $product->save();
        return $product;



        



    }
}
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
use App\Models\ProductCharacterisrics;

class AdminController extends Controller{


    // function addCharacteristicsAction(Request $request){
    //     $characteristics = new Characteristics;

    //     $characteristics->size = $request->size;
    //     $characteristics->color = $request->color;
    //     $characteristics->equipment = $request->equipment;
    //     $characteristics->color_price = $request->priceColor;
    //     $characteristics->size_price = $request->priceSize;
    //     $characteristics->equipment_price = $request->priceEquipment;


        
    //     $characteristics->save();
        

    //     return $characteristics;
    // }

    function addProductAction(Request $request){
        //dd($request);
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        //$product->main_photo = $request->main_photo;
        $product->price = $request->newPrice;
        $product->old_price = $request->oldPrice;
        $product->count = $request->count;
        $product->category_id = $request->selectedCategory;
        $product->main_photo = $request->images;

        $product->save();


        $characteristicTable = new ProductCharacterisrics;
        //DB::table('characteristics_and_products')->insert(['product_id' => '1']);
        $characteristicTable->characteristic_id = 2;
        $characteristicTable->product_id = 1;

        // //Product::where('id')->latest()->first();
        $characteristicTable->save();




        // $characteristics = new Characteristics;

        // $characteristics->size = $request->size;
        // $characteristics->color = $request->color;
        // $characteristics->equipment = $request->equipment;
        // $characteristics->color_price = $request->priceColor;
        // $characteristics->size_price = $request->priceSize;
        // $characteristics->equipment_price = $request->priceEquipment;     
        // $characteristics->save();
        

        return $characteristicTable;

        // $product = Product::latest()->first();
        // foreach ($product->characteristic as $characteristic) {
        //     echo $characteristic->pivot->created_at;
        // }
        




        



    }
}
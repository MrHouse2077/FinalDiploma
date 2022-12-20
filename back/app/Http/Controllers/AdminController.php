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
use App\Models\UsersDashboardWidgets;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller{


    function addCharacteristicsAction(Request $request){
        $characteristics = new Characteristics;

        $characteristics->size = $request->size;
        $characteristics->color = $request->color;
        $characteristics->equipment = $request->equipment;
        $characteristics->color_price = $request->priceColor;
        $characteristics->size_price = $request->priceSize;
        $characteristics->equipment_price = $request->priceEquipment;     
        $characteristics->save();


        $productRow = Product::latest()->first();
        $productId = $productRow->id;

        $characteristicRow = Characteristics::latest()->first();
        $characteristicId = $characteristicRow->id;   

        $character = new ProductCharacterisrics;
        $character->product_id = $productId;
        $character->characteristic_id = $characteristicId;

        $character->save();

        

        return $characteristics;
    }

    function addProductAction(Request $request){
        $product = new Product;
        $product->name = $request->name;
        $product->description = $request->description;
        $product->main_photo = $request->main_photo;
        $product->price = $request->newPrice;
        $product->old_price = $request->oldPrice;
        $product->count = $request->count;
        $product->category_id = $request->selectedCategory;
        $product->main_photo = $request->images;

        $product->save();
        
        

       


        // $characteristics = new Characteristics;

        // $characteristics->size = $request->size;
        // $characteristics->color = $request->color;
        // $characteristics->equipment = $request->equipment;
        // $characteristics->color_price = $request->priceColor;
        // $characteristics->size_price = $request->priceSize;
        // $characteristics->equipment_price = $request->priceEquipment;     
        // $characteristics->save();
        

        return $product;

    }

    function writeUserWidgetsAction(Request $request){
        $user = User::where('email', $request->email)->first();
        $UDW = UsersDashboardWidgets::where('user_id', $user->id)->first();
        $UDW->widgets = $request->jsonIsOpenGraph;
        $UDW->save();
        $status = 1;

        return $request;
    }

    function readUserWidgetsAction(Request $request){
        $user = User::where('email', $request->email)->first();
        $UDW = UsersDashboardWidgets::where('user_id', $user->id)->first();
        return $UDW->widgets;
    }

    function getUsersTableAction(){
        $users = User::get();

        return $users;
    }
}
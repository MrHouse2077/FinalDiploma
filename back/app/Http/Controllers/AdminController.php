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
        dd($request);
    }

    function addProductAction(Request $request){
        dd($request);
    }
}
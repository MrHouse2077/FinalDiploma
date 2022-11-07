<?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\ShopController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Middleware\TokenAuth;
use App\Http\Validators\LoginValidator;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});*/

Route::prefix('v1')->group(function () {
    Route::get('/main-menu', function () {
        return [1, 2, 3];
    });

    Route::post('/login', [IndexController::class, 'indexAction']);
    Route::post('/chekToken', [IndexController::class, 'checkToken']);

    Route::get('/products', [ShopController::class, 'listProductsAction']);
    Route::get('/categories', [ShopController::class, 'categoriesAction']);
    // Route::post('/addcategoryform', [ShopController::class, 'addproductformAction']);



    Route::get('/logout', function () {
        
    });

    Route::middleware([TokenAuth::class])->post('/lk', function () {
        return "скрытая зона";
    });

});


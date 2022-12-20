 <?php

use App\Http\Controllers\IndexController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\AdminController;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use App\Http\Middleware\TokenAuth;
use App\Http\Validators\LoginValidator;


use Illuminate\Support\Facades\Mail;

use App\Mail\Feedback;



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
    
    Route::post('/search', [IndexController::class, 'searchAction']);

    Route::post('/products', [ShopController::class, 'listProductsAction']);
    Route::post('/categories', [ShopController::class, 'categoriesAction']);
    //Route::post('/addNewcategory', [ShopController::class, 'addNewCategoryAction']);
    Route::get('/ip', [IndexController::class, 'ipAction']);
    Route::get('/get-users', function(){
        return User::get();
    });

    Route::get('/logout', function () {
        
    });
    Route::post('/feedback', [IndexController::class, 'feedbackAction']);

    Route::middleware([TokenAuth::class])->post('/lk', function () {
        return "скрытая зона";
    });

    Route::post('/addCharacteristics', [AdminController::class, 'addCharacteristicsAction']);
    Route::post('/addProduct', [AdminController::class, 'addProductAction']);
    Route::post('/addNewcategory', [AdminController::class, 'addNewCategoryAction']);
    Route::post('/listProducts', [AdminController::class, 'renderProductsAction']);



});


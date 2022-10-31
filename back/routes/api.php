<?php

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
<<<<<<< HEAD
    Route::get('/login', function () {
        
    });
    Route::get('/logout', function () {
        
    });
    Route::get('/lk', function () {
        
    });

});
=======

    Route::post('/login', function (Request $request) {

        // $request->validate([
        //     'email' => 'required|email',
        //     'password' => 'required',
        // ]);

        $validator = LoginValidator::loginCheck($request);

        // if ($validator->fails()) {
        //     return [
        //                  "errors" => $validator->errors();
        //                  "name" => $request->name,
        //                  "email" => $request->email,
        //              ];
        // }

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }

        return [
                    "token" => $user->createToken("token_name")->plainTextToken,
                    "name" => $user->name,
                    "email" => $user->email,
                ];
                

    });

    Route::get('/logout', function () {
        
    });

    Route::middleware([TokenAuth::class])->post('/lk', function () {
        return "скрытая зона";
    });
});


>>>>>>> c814f912058bd710df092d8fac7811caea552e5f

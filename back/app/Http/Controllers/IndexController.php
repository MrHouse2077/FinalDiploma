<?php

namespace App\Http\Controllers;

use App\Helpers\RequestHelper;
use App\Http\Validators\LoginValidator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;


class IndexController extends Controller
{
    function indexAction(Request $request){

        $validator = LoginValidator::loginCheck($request);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return RequestHelper::write(402, 'В доступе отказано');
        }

        $data = [
            "token" => $user->createToken("token_name")->plainTextToken,
            "name" => $user->name,
            "email" => $user->email,
        ];

        

        return RequestHelper::write(200, 'sucess', $data);
    }
}
 
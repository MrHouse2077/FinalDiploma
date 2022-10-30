<?php

    namespace App\Http\Validators;
    
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Validator;
    
    class LoginValidator {

        public static function loginCheck($request) {
            return Validator::make($request->all(),[
                                                        'email' => 'required|email:rfc,dns',
                                                        'password' => 'required|min:4',
                                                    ],
                                                    [
                                                        'email.required' => 'Введите почту!',
                                                        'email.email:rfc,dns' => 'Введите почту!',
                                                        'password.required' => 'Введите пароль!',
                                                        'password.min:4' => 'Ошибка!',
                                                    ]
            );
        }
    }

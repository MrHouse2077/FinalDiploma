<?php

    namespace App\Http\Validators;
    
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Validator;
    
    class LoginValidator {

        public static function loginCheck($request) {
            return Validator::make($request->all(),[
                                                        'email' => 'required|email:rfc,dns',
<<<<<<< HEAD
                                                        'password' => 'required|min:4',
=======
                                                        'password' => 'required|min:3',
>>>>>>> 3d06e47a1287b5459cf39b745a8b8cc02c55e5cf
                                                    ],
                                                    [
                                                        'email.required' => 'Введите почту!',
                                                        'email.email:rfc,dns' => 'Введите почту!',
                                                        'password.required' => 'Введите пароль!',
<<<<<<< HEAD
                                                        'password.min:4' => 'Ошибка!',
=======
                                                        'password.min:3' => 'Ошибка!',
>>>>>>> 3d06e47a1287b5459cf39b745a8b8cc02c55e5cf
                                                    ]
            );
        }
    }

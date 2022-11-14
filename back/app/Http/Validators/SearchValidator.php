<?php

    namespace App\Http\Validators;
    
    use Illuminate\Support\Facades\DB;
    use Illuminate\Support\Facades\Validator;
    
    class SearchValidator {

        public static function searchCheck($request) {
            return Validator::make($request->all(),[
                                                        'msg' => 'required|min:1',
                                                    ],
                                                    [
                                                        'msg.min:1' => 'Нет данных для поиска',

                                                    ]
            );
        }
    }

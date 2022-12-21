<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dataUser1 = [];
        DB::table('users')->insertOrIgnore([
            [
                'name' => "admin",
                'last_name' => 'admin',
                'description' => "Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin",
                'email' => 'admin@mail.ru',
                'phone_num' => "89200018052",
                'zone' => 'admin',
                'id_role' => 1,
                'image' => "not_user.jpg",
                'password' => '$2y$04$PfvhmEZ88MaN..ryo5gcr.SNdrlrfvOlKYGYK4VbhGapBixd1UEKW',
                'id_trainer' => 1,
                'id_subscription' => 1,
                'gender' => "male",
                'age' => 20,
                "adress" => "Moscow",
            ],
            [
                'name' => "Pavel",
                'last_name' => "Polkanov",
                'description' => "Duis nunc sodales conubia a laoreet aliquet on nostra eleifend lacinia prasent hendrerit quisque penatibus erat a pulvina integer semper ridiculus lectus con dimentum obor tise verodar capmtaso morin",
                'email' => 'pasha@yandex.ru',
                'phone_num' => "89200018052",
                'zone' => 'client',
                'id_role' => 1,
                'image' => "not_user.jpg",
                'password' => '$2y$04$PfvhmEZ88MaN..ryo5gcr.SNdrlrfvOlKYGYK4VbhGapBixd1UEKW',
                'id_trainer' => 1,
                'id_subscription' => 1,
                'gender' => "male",
                'age' => 20,
                "adress" => "Moscow",
                ],
        ]);
    }
}

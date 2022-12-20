<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Carbon\Carbon;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $i = 0;
        $data = [];
        while($i < 20){
            $product = [
                'name' => Str::random(5),
                'email' => Str::random(7)."@mail.ru",
                'created_at' => Carbon::createFromDate(mt_rand(2019, 2022), 1, 1),
            ];
            $data[] = $product;
            $i++;
        }
        DB::table('users')->insertOrIgnore($data);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insertOrIgnore([
            'name' => Str::random(10),
            'price' => mt_rand(100, 50000),
            'count' => mt_rand(0, 4),
            'category_id' => mt_rand(1, 2),
        ]);
    }
}

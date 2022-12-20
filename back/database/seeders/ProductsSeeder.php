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
            [
                'name' => 'Велотренажер',
                'price' => mt_rand(100, 50000),
                'count' => mt_rand(0, 4),
                'old_price'=> mt_rand(100, 50000),
                'category_id' => 2,
            ],
            [
                'name' => 'Гантели',
                'price' => mt_rand(100, 50000),
                'count' => mt_rand(0, 4),
                'old_price'=> mt_rand(100, 50000),
                'category_id' => 1,
            ],
            [
                'name' => 'Кроссовки Nike Air',
                'price' => mt_rand(100, 50000),
                'count' => mt_rand(0, 4),
                'old_price'=> mt_rand(100, 50000),
                'category_id' => 4,
            ],
            [
                'name' => 'Майка женская',
                'price' => mt_rand(100, 50000),
                'count' => mt_rand(0, 4),
                'old_price'=> mt_rand(100, 50000),
                'category_id' => 3,
            ],
            [
                'name' => 'Обруч',
                'price' => mt_rand(100, 50000),
                'count' => mt_rand(0, 4),
                'old_price'=> mt_rand(100, 50000),
                'category_id' => 2,
            ],
        ]);
    }
}

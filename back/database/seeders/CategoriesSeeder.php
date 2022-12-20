<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('category')->insertOrIgnore([
            [
                'name' => 'ручные тренажеры',
                'description' => 'Тренажеры для занятий дома',
            ],
            [
                'name' => 'электрические тренажеры',
                'description' => 'Тренажеры для спортзала',
            ],
            [
                'name' => 'спортивная одежда',
                'description' => 'Одежда для занятий спортом дома и в спортзале',
            ],
            [
                'name' => 'спортивная обувь',
                'description' => 'Обувь для занятий спортом дома и в спортзале',
            ]
            
        ]);
    }
}

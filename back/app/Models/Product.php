<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Characteristics;


class Product extends Model
{
    use HasFactory;
    protected $table = 'product';

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function characteristics()
    {
        return $this->belongsToMany(Characteristics::class, 'characteristics_and_products', 'product_id', '	characteristic_id');
    }
}

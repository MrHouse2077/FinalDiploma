<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;


class Characteristics extends Model
{
    use HasFactory;
    protected $table = 'characteristics';

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }
}

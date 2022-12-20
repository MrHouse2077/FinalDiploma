<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersDashboardWidgets extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'users_dashboard_widgets';

}

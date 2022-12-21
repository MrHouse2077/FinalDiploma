<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
        
            $table->string('id_role')->default(1);
            $table->string('phone_num')->nullable();
            $table->string('zone')->default("admin");
            $table->string('image')->default("no_photo.jpg");
            $table->string('id_trainer')->default(1);
            $table->string('description')->nullable();
            $table->string('id_subscription')->nullable();
            $table->string('gender')->nullable();
            $table->string('birthday')->nullable();
            $table->string('adress')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};

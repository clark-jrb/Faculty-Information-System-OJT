<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubjHandledsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subj__handleds', function (Blueprint $table) {
            $table->id();
            $table->string('day');
            $table->string('cat_no');
            $table->string('sub_title');
            $table->string('time');
            $table->string('section');
            $table->string('room');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subj__handleds');
    }
}

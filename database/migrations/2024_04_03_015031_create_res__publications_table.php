<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResPublicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('res__publications', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('faculty_id', 5);
            $table->string('proj_title');
            $table->string('authors');
            $table->string('date');
            $table->string('doi');
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
        Schema::dropIfExists('res__publications');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBasicInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('basic__infos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('faculty_id');
            $table->string('fname');
            $table->string('mname');
            $table->string('lname');
            $table->string('gender')->nullable()->default(null);
            $table->date('birth_date')->nullable()->default(null);
            $table->string('age')->nullable()->default(null);
            $table->string('department');
            $table->string('position')->nullable()->default(null);
            $table->string('high_degree')->nullable()->default(null);
            $table->string('role')->nullable()->default(null);
            $table->string('specialization')->nullable()->default(null);
            $table->string('email');
            $table->string('contact_no')->nullable()->default(null);
            $table->string('profile_pic')->nullable()->default(null);
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
        Schema::dropIfExists('basic__infos');
    }
}

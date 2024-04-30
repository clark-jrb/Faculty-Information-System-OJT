<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExtActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ext__activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('faculty_id', 5);
            $table->string('ext_title');
            $table->string('duration');
            $table->string('lead');
            $table->string('member');
            $table->string('sponsor');
            $table->string('beneficiaries');
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
        Schema::dropIfExists('ext__activities');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Res_ResActivity extends Model
{
    use HasFactory;
    protected $table = "res__res_activities";
    public $timestamps = true;
    protected $fillable = [
        'res_title', 'status', 'duration', 'researcher'
    ];
}

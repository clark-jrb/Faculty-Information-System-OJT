<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Res_Publication extends Model
{
    use HasFactory;
    protected $table = "res__publications";
    public $timestamps = true;
    protected $fillable = [
        'proj_title', 'authors', 'date', 'doi', 'cover'
    ];
}

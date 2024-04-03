<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acad_WorkExp extends Model
{
    use HasFactory;
    protected $table = "acad__work_exps";
    public $timestamps = true;
    protected $fillable = [
        'position', 'work_loc', 'date', 'location'
    ];
}

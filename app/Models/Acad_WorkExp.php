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
        'faculty_id' ,'position', 'work_loc', 'start_date', 'end_date', 'location'
    ];
}

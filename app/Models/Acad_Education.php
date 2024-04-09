<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acad_Education extends Model
{
    use HasFactory;
    protected $table = "acad__education";
    public $timestamps = true;
    protected $fillable = [
        'faculty_id', 'degree', 'institution', 'date', 'location'
    ];
}

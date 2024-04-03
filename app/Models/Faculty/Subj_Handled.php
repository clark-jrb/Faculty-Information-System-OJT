<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subj_Handled extends Model
{
    use HasFactory;
    protected $table = "subj__handled";
    public $timestamps = true;
    protected $fillable = [
        'day', 'cat_no', 'sub_title', 'time', 'section', 'room'
    ];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ResActivity extends Model
{
    use HasFactory;
    protected $table = "res__res_activities";
    public $timestamps = true;
    protected $fillable = [
        'faculty_id', 'res_title', 'status', 'start_date', 'end_date', 'researcher'
    ];
}

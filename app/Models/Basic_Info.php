<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basic_Info extends Model
{
    use HasFactory;
    protected $table = "basic__infos";
    public $timestamps = true;
    protected $fillable = [
        'faculty_id',
        'fname', 
        'mname',
        'lname', 
        'gender', 
        'birth_date', 
        'age', 
        'department', 
        'position', 
        'high_degree',
        'role', 
        'specialization', 
        'email', 
        'contact_no', 
        'profile_pic'
    ];
}

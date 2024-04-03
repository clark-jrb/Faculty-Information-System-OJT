<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty_List extends Model
{
    use HasFactory;
    protected $table = "faculty__lists";
    public $timestamps = true;
    protected $fillable = [
        'role', 'department', 'full_name'
    ];
}

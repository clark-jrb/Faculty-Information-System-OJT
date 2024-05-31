<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ext_Activity extends Model
{
    use HasFactory;
    protected $table = "ext__activities";
    public $timestamps = true;
    protected $fillable = [
        'faculty_id', 'ext_title', 'start_date', 'end_date', 'lead', 'member', 'sponsor', 'beneficiaries'
    ];
}

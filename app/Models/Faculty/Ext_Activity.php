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
        'ext_title', 'duration', 'lead', 'member', 'sponsor', 'beneficiaries'
    ];
}

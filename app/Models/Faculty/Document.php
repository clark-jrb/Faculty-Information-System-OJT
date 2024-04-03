<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $table = "documents";
    public $timestamps = true;
    protected $fillable = [
        'file_name', 'label'
    ];
}

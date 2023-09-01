<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeachersDetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id', 
        'about', 
        'age', 
        'gender', 
        'grade_level',
        'degree', 
        'experience', 
        'subject_taught',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

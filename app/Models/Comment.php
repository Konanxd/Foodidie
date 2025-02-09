<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';

    protected $fillable = [
        'id_recipe',
        'id_user',
        'comment'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

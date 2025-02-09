<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    protected $table = "bookmarks";

    protected $fillable = [
        'id_user',
        'id_recipe',
        'title',
        'image',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}

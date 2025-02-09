<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SearchHistory extends Model
{
    protected $fillable = ['id_user', 'query', 'ingredients'];

    protected $casts = [
        'ingredients' => 'array'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

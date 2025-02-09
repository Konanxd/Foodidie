<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function show($id_recipe)
    {
        $comments = Comment::where('id_recipe', $id_recipe)
    }
}

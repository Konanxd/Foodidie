<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::where('id_recipe', Auth::id())->get();

        return response()->json($bookmarks->toArray());
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_recipe' => 'required',
            'title' => 'required|string',
            'image' => 'nullable|string'
        ]);

        $exists = Bookmark::where('id_user', Auth::id())
            ->where('id_recipe', $request->id_recipe)
            ->exists();

        if ($exists) {
            return back()->with(['message' => 'Already bookmarked'], 409);
        }

        $bookmark = Bookmark::create([
            'id_recipe' => $request->id_recipe,
            'title' => $request->title,
            'image' => $request->image,
            'id_user' => Auth::id(),
        ]);

        return back()->with(['bookmark' => $bookmark->toArray()], 201);
    }

    public function destroy($id)
    {
        $bookmark = Bookmark::where('id_user', Auth::id())
            ->where('id_recipe', $id)
            ->first();

        if (!$bookmark) {
            return back()->with(['message' => 'Bookmark not found']);
        }

        $bookmark->delete();
        return back()->with(['message' => 'Bookmark has been removed']);
    }
}

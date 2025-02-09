<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Comment;
use App\Models\Bookmark;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\SearchHistory;
use App\Services\SpoonacularService;
use Illuminate\Support\Facades\Auth;

class RecipesController extends Controller
{
    protected $spoonacular;

    public function __construct(SpoonacularService $spoonacular)
    {
        $this->spoonacular = $spoonacular;
    }

    public function index(Request $request)
    {
        $title = empty($request->input('title')) ? '' : $request->input('title');
        $ingredients = empty($request->input('ingredients')) ? [] : $request->input('ingredients');
        $recipes = [];
        $bookmarks = Bookmark::where('id_recipe', Auth::id())->get();

        if ($title || !empty($ingredients)) {
            $recipes = $this->spoonacular->searchRecipes($title, $ingredients);
        }

        return Inertia::render('Recipes', [
            'bookmarks' => $bookmarks->toArray(),
            'recipes' => $recipes,
            'searchQuery' => $title,
            'selectedIngredients' => $ingredients
        ]);
    }

    public function details(Request $request, $id_recipe)
    {
        $recipe = $request->all();

        $comments = Comment::where('id_recipe', $id_recipe)
            ->with('user')
            ->get()
            ->toArray();

        return Inertia::render('DetailRecipes', [
            'recipe' => $recipe,
            'comments' => $comments
        ]);
    }

    public function getSearchHistory()
    {
        return Auth::user()
            ? SearchHistory::where('id_user', Auth::id())->latest()->limit(10)->get()
            : [];
    }

    public function findByIngredients(Request $request)
    {
        $ingredients = $request->input('');
    }
}

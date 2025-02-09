<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Bookmark;
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

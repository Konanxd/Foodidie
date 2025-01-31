<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\SpoonacularService;

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

        if ($title || !empty($ingredients)) {
            $recipes = $this->spoonacular->searchRecipes($title, $ingredients);
        }

        return Inertia::render('Recipes', [
            'recipes' => $recipes,
            'searchQuery' => $title,
            'selectedIngredients' => $ingredients
        ]);
    }

    public function findByIngredients(Request $request)
    {
        $ingredients = $request->input('');
    }
}

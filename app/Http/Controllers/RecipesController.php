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
        $title = $request->input('title');
        $recipes = [];

        if ($title) {
            $recipes = $this->spoonacular->searchRecipes($title);
        }

        return Inertia::render('Recipes', [
            'recipes' => $recipes,
            'searchQuery' => $title,
        ]);
    }
}

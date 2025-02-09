<?php

namespace App\Services;

use App\Models\SearchHistory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class SpoonacularService
{
    protected $apiKey;
    protected $baseUrl;
    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        $this->apiKey = config('services.spoonacular.api_key');
        $this->baseUrl = "https://api.spoonacular.com/";
    }

    public function searchRecipes(string $title, array $ingredients)
    {
        $cacheKey = "recipes_search_" . md5($title . implode(',', $ingredients));

        return Cache::remember($cacheKey, now()->addHours(1), function () use ($title, $ingredients) {
            $stringIngredients = empty($ingredients) ? '' : implode(',', $ingredients);
            $title = empty($title) ? '' : $title;

            $recipes = Http::get($this->baseUrl . "recipes/complexSearch", [
                'apiKey' => $this->apiKey,
                'query' => $title,
                'fillIngredients' => 'true',
                'addRecipeNutrition' => 'true',
                'addRecipeInstructions' => 'true',
                'number' => 100,
                'includeIngredients' => $stringIngredients,
                'fields' => 'id,title,readyInMinutes,servings,image,nutrition.nutrients,nutrition.ingredients,analyzedInstructions.steps'
            ]);

            if (!$recipes->successful()) {
                return [];
            }

            return collect($recipes->json('results'))->map(function ($recipe) {
                return [
                    'id_recipe' => $recipe['id'],
                    'title' => $recipe['title'],
                    'readyInMinutes' => $recipe['readyInMinutes'],
                    'servings' => $recipe['servings'],
                    'image' => $recipe['image'],
                    'nutritions' => $recipe['nutrition']['nutrients'],
                    'ingredients' => $recipe['nutrition']['ingredients'],
                    'instruction' => $recipe['analyzedInstructions']
                ];
            })->toArray();
        });
    }



    public function searchRecipesByIngredients(array $ingredients)
    {
        $recipes = Http::get($this->baseUrl . "recipes/findByIngredients", [
            'apiKey' => $this->apiKey,
            'ingredients' => implode('+', $ingredients),
            'fields' => 'id,title,readyInMinutes,servings'
        ]);

        if (!$recipes->successful()) {
            return [];
        }

        $results = $recipes->json('results') ?? [];
        $ids = collect($results)->pluck('id')->toArray();

        $bulk = Http::get($this->baseUrl . "recipes/informationBulk", [
            'apiKey' => $this->apiKey,
            'includeNutrition' => 'true',
            'ids' => implode(',', $ids),
            'fields' => 'id,title,readyInMinutes,servings,image,nutrition.nutrients',
        ]);

        if (!$bulk->successful()) {
            return [];
        }

        return collect($bulk->json())->map(function ($recipe) {
            $calories = collect($recipe['nutrition']['nutrients'])
                ->where('name', 'Calories')
                ->pluck('amount')
                ->first();

            // dd($recipe);

            return [
                'id' => $recipe['id'],
                'title' => $recipe['title'],
                'readyInMinutes' => $recipe['readyInMinutes'],
                'servings' => $recipe['servings'],
                'image' => $recipe['image'],
                'calories' => $calories ?? 0,
            ];
        })->toArray();
    }

    public function getRecipeInformationById($id)
    {
        $response = Http::get($this->baseUrl . "recipes/$id/information", [
            'apiKey' => $this->apiKey
        ]);

        return $response->json();
    }

    public function getRecipeInstructions($id)
    {
        $response = Http::get($this->baseUrl . "recipes/$id/instructions", [
            'apiKey' => $this->apiKey
        ]);

        return $response->json();
    }

    public function searchIngredients($query)
    {
        $response = Http::get($this->baseUrl . "food/ingredients/", [
            'apiKey' => $this->apiKey,
            'query' => $query
        ]);

        return $response->json();
    }
}

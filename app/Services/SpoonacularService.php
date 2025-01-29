<?php

namespace App\Services;

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

    public function searchRecipes(string $title)
    {
        $cacheKey = "recipes_search_{$title}";

        // if (Cache::has($cacheKey)) {
        //     return Cache::get($cacheKey);
        // }

        $recipes = Http::get($this->baseUrl . "recipes/complexSearch", [
            'apiKey' => $this->apiKey,
            'query' => $title,
            'fillIngredients' => 'true',
            'addRecipeNutrition' => 'true',
            'addRecipeInstructions' => 'true',
            'fields' => 'id,title,readyInMinutes,servings,image,nutrition.nutrients,nutrition.ingredients,analyzedInstructions.steps'
        ]);

        if (!$recipes->successful()) {
            return [];
        }

        // $results = $recipes->json('results') ?? [];

        $response = collect($recipes->json('results'))->map(function ($recipe) {
            // $calories = collect($recipe['nutrition']['nutrients'])
            //     ->where('name', 'Calories')
            //     ->pluck('amount')
            //     ->first();

            // $ingredients = collect($recipe['missedIngredients'])
            //     ->pluck('id')
            //     ->toArray();

            // dd($recipe);

            return [
                'id' => $recipe['id'],
                'title' => $recipe['title'],
                'readyInMinutes' => $recipe['readyInMinutes'],
                'servings' => $recipe['servings'],
                'image' => $recipe['image'],
                'nutritions' => $recipe['nutrition']['nutrients'],
                'ingredients' => $recipe['nutrition']['ingredients'],
                'instruction' => $recipe['analyzedInstructions']
            ];
        })->toArray();

        // dd($response);

        // Cache::put($cacheKey, $response, now()->addHours(1));

        return $response;
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

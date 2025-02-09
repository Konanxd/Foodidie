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
                'fields' => 'id,title,readyInMinutes,creditsText,image,types,nutrition.nutrients,nutrition.ingredients,analyzedInstructions.steps'
            ]);

            // dd($recipes->json());

            if (!$recipes->successful()) {
                return [];
            }

            return collect($recipes->json('results'))->map(function ($recipe) {
                return [
                    'id_recipe' => $recipe['id'],
                    'title' => $recipe['title'],
                    'readyInMinutes' => $recipe['readyInMinutes'],
                    'credits' => $recipe['creditsText'],
                    'image' => $recipe['image'],
                    'nutritions' => $recipe['nutrition']['nutrients'],
                    'ingredients' => $recipe['nutrition']['ingredients'],
                    'instructions' => $recipe['analyzedInstructions']
                ];
            })->toArray();
        });
    }

    public function getInformationRecipes($id)
    {
        $cacheKey = "recipes_information_" . $id;
        return Cache::remember($cacheKey, now()->addHours(1), function () use ($id) {

            $response = Http::get($this->baseUrl . "recipes/" . $id . "/information", [
                'apiKey' => $this->apiKey,
                'includeNutrition' => 'true',
            ]);

            $recipe = $response->json();

            if (!$recipe->successful()) {
                return [];
            }

            $result = [
                'title' => $recipe['title'],
                'readyInMinutes' => $recipe['readyInMinutes'],
                'credits' => $recipe['creditsText'],
                'image' => $recipe['image'],
                'nutritions' => $recipe['nutrition']['nutrients'],
                'ingredients' => $recipe['nutrition']['ingredients'],
                'instructions' => $recipe['analyzedInstructions']
            ];
            dd($result);
        });
    }
}

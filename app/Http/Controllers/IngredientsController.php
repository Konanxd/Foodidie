<?php

namespace App\Http\Controllers;

use App\Models\Ingredients;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class IngredientsController extends Controller
{
    public function getIngredients()
    {
        $cacheKey = "ingredients_list";

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        } else {
            $ingredients = Ingredients::pluck('ingredient');

            Cache::put($cacheKey, $ingredients, now()->addHours(24));
        }

        return response()->json($ingredients);
    }
}

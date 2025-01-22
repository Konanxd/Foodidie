<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Services\SpoonacularService;
use Illuminate\Support\Facades\Http;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SpoonacularTest extends TestCase
{
    protected $spoonacular;

    protected function setUp(): void
    {
        parent::setUp();

        $this->spoonacular = new SpoonacularService();
    }

    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_search_recipes(): void
    {
        Http::fake([
            'https://api.spoonacular.com/recipes/complexSearch*' => Http::response([
                'results' => [
                    [
                        "id" => 716429,
                        "title" => "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
                        "image" => "https://img.spoonacular.com/recipes/716429-312x231.jpg",
                    ],
                ]
            ], 200)
        ]);

        $title = "pasta";
        $response = $this->spoonacular->searchRecipes($title);

        print_r($response);

        $this->assertIsArray($response);
        $this->assertArrayHasKey('results', $response);
    }

    public function test_search_recipes_by_ingredients(): void
    {
        // Http::fake([
        //     'https://api.spoonacular.com/recipes/findByIngredients*' => Http::response([
        //         ['id' => 1, 'title' => 'Recipe 1'],
        //         ['id' => 2, 'title' => 'Recipe 2']
        //     ], 200)
        // ]);


        $ingredients = ['apples', 'flour', 'sugar'];
        $number = 2;
        $response = $this->spoonacular->searchRecipesByIngredients($ingredients, $number);

        print_r('====================\n');
        print_r($response);

        $this->assertIsArray($response);
        $this->assertNotEmpty($response);
    }
}

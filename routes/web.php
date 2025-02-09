<?php

use App\Http\Controllers\BookmarkController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RecipesController;
use App\Http\Controllers\IngredientsController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/recipes', [RecipesController::class, 'index'])->name('recipes');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/search-history', [RecipesController::class, 'getSearhcHistory']);
});

Route::get('/api/ingredients', [IngredientsController::class, 'getIngredients']);

Route::get('/api/bookmark', [BookmarkController::class, 'index'])->name('bookmark.index');
Route::post('/api/bookmark', [BookmarkController::class, 'store'])->name('bookmark.store');
Route::delete('/api/bookmark{$id}', [BookmarkController::class, 'destory'])->name('bookmark.destroy');

require __DIR__ . '/auth.php';

<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard Route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile Route 
Route::prefix('/profile')->middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Profile');
    })->name('profile');

    Route::get('/basic', function () {
        return Inertia::render('Profile/Basic');
    })->name('basic');

    Route::get('/research', function () {
        return Inertia::render('Profile/Research');
    })->name('research');

    Route::get('/academic', function () {
        return Inertia::render('Profile/Academic');
    })->name('academic');

    Route::get('/documents', function () {
        return Inertia::render('Profile/Documents');
    })->name('documents');

    Route::get('/extensions', function () {
        return Inertia::render('Profile/Extensions');
    })->name('extensions');
});


// Faculty Route
Route::get('/faculty', function () {
    return Inertia::render('Faculty');
})->middleware(['auth', 'verified'])->name('faculty');

// Facility Route
Route::get('/facilities', function () {
    return Inertia::render('Facilities');
})->middleware(['auth', 'verified'])->name('facilities');

require __DIR__.'/auth.php';

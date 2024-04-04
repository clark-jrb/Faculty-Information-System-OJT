<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the 'web' middleware group. Now create something great!
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

// For Viewer
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/redirectAuthenticatedUsers', [RedirectAuthenticatedUsersController::class, 'home']);
    // Dashboard Route
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    // Profile Routes
    Route::prefix('/profile')->group(function () {
        Route::get('/', fn () => Inertia::render('Profile'))->name('profile');
        Route::get('/basic', fn () => Inertia::render('Profile/Basic'))->name('basic');
        Route::get('/research', fn () => Inertia::render('Profile/Research'))->name('research');
        Route::get('/academic', fn () => Inertia::render('Profile/Academic'))->name('academic');
        Route::get('/documents', fn () => Inertia::render('Profile/Documents'))->name('documents');
        Route::get('/extensions', fn () => Inertia::render('Profile/Extensions'))->name('extensions');
    });

    // Faculty Route
    Route::get('/faculty', fn () => Inertia::render('Faculty'))->name('faculty');

    // Facility Route
    Route::get('/facilities', fn () => Inertia::render('Facilities'))->name('facilities');
    
    // For Admin
    // Route::middleware(['auth', 'verified'])->group(function () {
    //     Route::prefix('/admin')->group(function () {
    //         Route::get('/', fn () => Inertia::render('AdminDashboard'))->name('admin');
    //         // Route::get('/dashboard', fn () => Inertia::render('Admin/Dashboard'))->name('Admin.dashboard');
    //     });
    // });

    Route::group(['middleware' => 'ifAdmin:admin'], function() {
        Route::inertia('/admin', 'Admin/AdminDashboard')->name('admin');
        Route::inertia('/admin/dashboard', 'Admin/AdminDashboard')->name('admin.dashboard');
        Route::inertia('/admin/faculties', 'Admin/AdminFaculties')->name('admin.faculties');
        Route::inertia('/admin/faculties/departments', 'Admin/AdminDepartments')->name('admin.departments');

        Route::inertia('/admin/faculties/departments/ae', 'Admin/Departments/DAE')->name('admin.departments.ae');
        Route::inertia('/admin/faculties/departments/am', 'Admin/Departments/DAM')->name('admin.departments.am');
        Route::inertia('/admin/faculties/departments/as', 'Admin/Departments/DAS')->name('admin.departments.as');
        Route::inertia('/admin/faculties/departments/cp', 'Admin/Departments/DCP')->name('admin.departments.cp');
        Route::inertia('/admin/faculties/departments/cs', 'Admin/Departments/DCS')->name('admin.departments.cs');
        Route::inertia('/admin/faculties/departments/ss', 'Admin/Departments/DSS')->name('admin.departments.ss');
    });
});




require __DIR__.'/auth.php';

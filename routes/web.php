<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\AdminController;

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
        Route::get('/', [AdminController::class, 'showProfile'])->name('profile');
        Route::get('/basic/{id}', [AdminController::class, 'showBasic'])->name('basic');
        Route::get('/research/{id}', [AdminController::class, 'showResearch'])->name('research');
        Route::get('/academic/{id}', [AdminController::class, 'showAcademic'])->name('academic');
        Route::get('/publication/{id}', [AdminController::class, 'showPublications'])->name('publication');
        Route::get('/documents/{id}', [AdminController::class, 'showDocuments'])->name('documents');
        Route::get('/extensions/{id}', [AdminController::class, 'showExtensions'])->name('extensions');
    });

    // Faculty Route
    // Route::get('/faculty', fn () => Inertia::render('Faculty'))->name('faculty');
    Route::get('/faculty', [AdminController::class, 'showFaculties'])->name('faculties');

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
        Route::inertia('/admin/faculties', 'Admin/AdminFacultyList')->name('admin.faculties');
        Route::inertia('/admin/faculties/departments', 'Admin/AdminDepartments')->name('admin.departments');
        Route::inertia('/admin/files', 'Admin/AdminFiles')->name('admin.files');

        Route::inertia('/admin/create', 'Admin/AdminCreateFaculty')->name('admin.create');
        Route::post('/admin/store', [AdminController::class, 'store'])->name('admin.store');
        Route::post('/admin/update/{id}', [AdminController::class, 'update'])->name('admin.update');
        Route::post('/admin/updateProfilePic/{id}', [AdminController::class, 'updateProfilePicture'])->name('admin.update.profilePic');
        Route::post('/admin/addDocument/{id}', [AdminController::class, 'addDocument'])->name('admin.addDocument');
        Route::delete('/admin/deleteDocument/{id}', [AdminController::class, 'deleteDocument'])->name('admin.deleteDocument');
        Route::delete('/admin/delete/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');
        Route::get('/admin/faculty/{id}', [AdminController::class, 'show'])->name('admin.faculty.show');

        Route::get('/admin/faculties/departments/ae', [AdminController::class, 'getAE'])->name('admin.departments.ae');
        Route::get('/admin/faculties/departments/am', [AdminController::class, 'getAM'])->name('admin.departments.am');
        Route::get('/admin/faculties/departments/as', [AdminController::class, 'getAS'])->name('admin.departments.as');
        Route::get('/admin/faculties/departments/cp', [AdminController::class, 'getCP'])->name('admin.departments.cp');
        Route::get('/admin/faculties/departments/cs', [AdminController::class, 'getCS'])->name('admin.departments.cs');
        Route::get('/admin/faculties/departments/ss', [AdminController::class, 'getSS'])->name('admin.departments.ss');

        Route::get('/admin/faculties/filter/{value}', [AdminController::class, 'filterFaculty'])->name('admin.faculty.filter');
    });
});




require __DIR__.'/auth.php';

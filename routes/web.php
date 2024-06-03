<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\RedirectAuthenticatedUsersController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FacultyController;

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

// For Faculty
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/redirectAuthenticatedUsers', [RedirectAuthenticatedUsersController::class, 'home']);
    // Dashboard Route
    Route::get('/dashboard', fn () => Inertia::render('Dashboard'))->name('dashboard');

    // Profile Routes
    Route::prefix('/profile')->group(function () {
        Route::get('/', [FacultyController::class, 'showProfile'])->name('profile');
        Route::get('/basic', [FacultyController::class, 'showBasic'])->name('basic');
        Route::get('/research', [FacultyController::class, 'showResearch'])->name('research');
        Route::get('/academic', [FacultyController::class, 'showAcademic'])->name('academic');
        Route::get('/publication', [FacultyController::class, 'showPublications'])->name('publication');
        Route::get('/documents', [FacultyController::class, 'showDocuments'])->name('documents');
        Route::get('/extensions', [FacultyController::class, 'showExtensions'])->name('extensions');
        Route::get('/trainings', [FacultyController::class, 'showTrainings'])->name('trainings');

        Route::post('/updateBasic', [FacultyController::class, 'updateBasicInfo'])->name('update.basic');

        Route::post('/addEduc', [FacultyController::class, 'addEduc'])->name('add.educ');
        Route::post('/addWork', [FacultyController::class, 'addWork'])->name('add.work');
        Route::post('/addPublication', [FacultyController::class, 'addPublication'])->name('add.pub');
        Route::post('/addResearch', [FacultyController::class, 'addResearch'])->name('add.res');
        Route::post('/addExtension', [FacultyController::class, 'addExtension'])->name('add.ext');
        Route::post('/addTraining', [FacultyController::class, 'addTraining'])->name('add.train');

        Route::post('/updateEduc', [FacultyController::class, 'updateEduc'])->name('update.educ');
        Route::post('/updateWork', [FacultyController::class, 'updateWork'])->name('update.work');
        Route::post('/updatePub', [FacultyController::class, 'updatePub'])->name('update.pub');
        Route::post('/updateRes', [FacultyController::class, 'updateRes'])->name('update.res');
        Route::post('/updateExt', [FacultyController::class, 'updateExt'])->name('update.ext');
        Route::post('/updateTraining', [FacultyController::class, 'updateTraining'])->name('update.train');

        Route::delete('/destroyEduc/{id}', [FacultyController::class, 'destroyEduc'])->name('destroy.educ');
        Route::delete('/destroyWork/{id}', [FacultyController::class, 'destroyWork'])->name('destroy.work');
        Route::delete('/destroyPub/{id}', [FacultyController::class, 'destroyPub'])->name('destroy.pub');
        Route::delete('/destroyRes/{id}', [FacultyController::class, 'destroyRes'])->name('destroy.res');
        Route::delete('/destroyExt/{id}', [FacultyController::class, 'destroyExt'])->name('destroy.ext');
        Route::delete('/destroyTrain/{id}', [FacultyController::class, 'destroyTrain'])->name('destroy.train');

        Route::post('/updateProfPic', [FacultyController::class, 'updateProfPic'])->name('update.profilePic');
        Route::get('/print', [FacultyController::class, 'print'])->name('faculty.print');

    });

    // Faculty Route
    // Route::get('/faculty', fn () => Inertia::render('Faculty'))->name('faculty');
    Route::get('/faculty', [AdminController::class, 'showFaculties'])->name('faculties');

    Route::prefix('/home')->group(function () {
        Route::get('/', fn () => Inertia::render('Home'))->name('home');
        // Dept Facility Route
        Route::get('/agricultural-extension', fn () => Inertia::render('HomeDept/AEFacility'))->name('agricultural.extension');
        Route::get('/agri-management', fn () => Inertia::render('HomeDept/AMFacility'))->name('agri.management');
        Route::get('/animal-science', fn () => Inertia::render('HomeDept/ASFacility'))->name('animal.science');
        Route::get('/crop-protection', fn () => Inertia::render('HomeDept/CPFacility'))->name('crop.protection');
        Route::get('/crop-science', fn () => Inertia::render('HomeDept/CSFacility'))->name('crop.science');
        Route::get('/soil-science', fn () => Inertia::render('HomeDept/SSFacility'))->name('soil.science');
    });
    
    
    // Route::middleware(['auth', 'verified'])->group(function () {
    //     Route::prefix('/admin')->group(function () {
    //         Route::get('/', fn () => Inertia::render('AdminDashboard'))->name('admin');
    //         // Route::get('/dashboard', fn () => Inertia::render('Admin/Dashboard'))->name('Admin.dashboard');
    //     });
    // });

// For Admin
    Route::group(['middleware' => 'ifAdmin:admin'], function() {
        Route::inertia('/admin', 'Admin/AdminDashboard')->name('admin');
        Route::get('/admin/dashboard', [AdminController::class, 'showFacultiesDashboard'])->name('admin.dashboard');
        // Route::inertia('/admin/faculties', 'Admin/AdminFacultyList')->name('admin.faculties');
        Route::get('/admin/faculties', [AdminController::class, 'showFaculties'])->name('admin.faculties');
        // Route::post('/admin/filterFaculties', [AdminController::class, 'filterFaculties'])->name('admin.faculties.filter');
        
        Route::inertia('/admin/faculties/departments', 'Admin/AdminDepartments')->name('admin.departments');
        // Route::inertia('/admin/files', 'Admin/AdminFiles')->name('admin.files');

        Route::inertia('/admin/create', 'Admin/AdminCreateFaculty')->name('admin.create');
        Route::post('/admin/store', [AdminController::class, 'store'])->name('admin.store');
        Route::post('/admin/update/{id}', [AdminController::class, 'update'])->name('admin.update');
        Route::post('/admin/updateProfilePic/{id}', [AdminController::class, 'updateProfilePicture'])->name('admin.update.profilePic');
        Route::post('/admin/addDocument/{id}', [AdminController::class, 'addDocument'])->name('admin.addDocument');
        Route::delete('/admin/deleteDocument/{id}', [AdminController::class, 'deleteDocument'])->name('admin.deleteDocument');
        Route::delete('/admin/delete/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');
        Route::get('/admin/faculty/{id}', [AdminController::class, 'show'])->name('admin.faculty.show');

        Route::get('/admin/print', [AdminController::class, 'showFacultiesOnPrint'])->name('print');
        Route::get('/admin/printSpec', [AdminController::class, 'printSpecific'])->name('printSpec');
    });
});




require __DIR__.'/auth.php';

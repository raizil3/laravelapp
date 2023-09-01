<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/about', function () {
    return view('about.about');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


// Show Images
Route::get('/images/{imageName}', 'HomeController@showImage')->name('show.image');

Route::get('/auth', function () {
    return view('auth/auth-login');
});

 // Login

Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
Route::post('/login', [LoginController::class, 'authenticate'])->name('logedin');

Route::post('/add', [LoginController::class, 'adduser']);



// Route::get('/', function () {
//     return view('student.main');
// });

Route::get('/profile', function () {
    return view('student.profile');
});

Route::get('/', function () {
    return view('student.main');
});


Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');



// ----------------------------------------------------------------------------------------------

// Route::get('/', function () {
//     return view('student.main');
// });

Route::get('/form1', function () {
    return view('form.form1');
});
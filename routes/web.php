<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\View;
use Inertia\Inertia;

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

Route::get('/', function () {
    return redirect()->route('signup');
});

Route::get('/signup', function () {
    return Inertia::render('Signup');
})->name('signup');

Route::get('/success', function () {
    return Inertia::render('Success');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
});

Route::get('/dashboard/users', function () {
    return Inertia::render('Dashboard/Users');
});

Route::get('/dashboard/setting', function () {
    return Inertia::render('Dashboard/Setting');
});

Route::get('/dashboard/content', function () {
    return Inertia::render('Dashboard/Content');
});

Route::get('/dashboard/content/create', function () {
    return Inertia::render('Dashboard/ContentCreate');
});
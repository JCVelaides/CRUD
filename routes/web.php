<?php

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
    return view('home');
});

Route::get('/register', 'RegisterController@viewRegister')->name('nViewRegister');
Route::get('/login', 'SessionsController@viewLogin')->name('nViewLogin');
Route::get('/create-finca', 'FincaController@viewCreateFinca')->name('nViewCreateFinca');
Route::get('/edit-finca', 'FincaController@viewEditFinca')->name('nViewEditFinca');
Route::get('/index', 'FincaController@index');
//Route::get('/ver', 'FincaController@verDash')->middleware('checkLog');
Route::get('/ver', 'FincaController@verDash');

Route::post('/register-user', 'RegisterController@registerUser');
Route::post('/iniciar-sesion', 'SessionsController@iniciarSesion');
Route::post('/crear-finca', 'FincaController@crearFinca');
Route::put('/editar-finca/{id}', 'FincaController@editarFinca');
//Route::delete('delete/{id}', 'FincaController@destroy')->middleware('checkLog');
Route::put('delete/{id}', 'FincaController@destroy');
Route::post('salir', 'SessionsController@logout')->middleware('checkLog');


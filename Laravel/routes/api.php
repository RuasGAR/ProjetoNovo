<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('register','API\PassportController@register'); //rota para efetuar o cadastro do usuário
Route::post('login','API\PassportController@login'); //rota para efetuar o login do usuário
//neste grupo, estão as rotas que necessitam que o usuário esteja autenticado
Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout','API\PassportController@logout'); //rota para efetuar o logout do usuário
});

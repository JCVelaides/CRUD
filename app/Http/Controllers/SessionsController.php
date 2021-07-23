<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginFormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SessionsController extends Controller
{
    public function viewLogin() {
        return view('auth.login');
    }

    public function iniciarSesion(LoginFormRequest $request) {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password], false)) {
            return response()->json('Has iniciado sesión', 200);
            //return view('auth.register');
            //return redirect()->back();
            //return redirect()->route('index');
            //return redirect()->action('app\Http\Controllers\FincaController@index');
        }else{
            return response()->json(['errors' => ['login' => ['Los datos ingresados son incorrectos']]], 422);
        }

    }

    public function logout(){
        Auth::logout();
    }
}

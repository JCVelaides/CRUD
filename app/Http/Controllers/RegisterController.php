<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterFormRequest;
use App\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function viewRegister() {
        return view('auth.register');
    }

    public function registerUser(RegisterFormRequest $request) {

        $user = new User;
        $user->names = $request->names;
        $user->surname = $request->surname;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->contact = $request->contact;
        $user->save();

        return response()->json($request->all(), 200);
    }
}

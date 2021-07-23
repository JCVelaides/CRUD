@extends('layouts.app')

@section('title', 'Login')
@section('content')
    <ul class="nav justify-content-end">
        <li class="nav-item ">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewRegister') }}">Registrarse</a>
        </li>
        <li class="nav-item ml-1">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewLogin') }}">Iniciar sesión</a>
        </li>
    </ul>
    <div id="crud" class="col-md-4 offset-md-4 mt-5">
        <div class="card">
            <div class="card-header">
                <h1 class="my-3 text-center">Iniciar sesión</h1>
            </div>
            <div class="card-body">
                <form id="formulario-login">
                    <div class="form-group">
                        <label for="email">Usuario</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Correo electronico">
                    </div>
                    <div class="form-group">
                        <label for="pass">Contraseña</label>
                        <input type="password" v-model="password" class="form-control" id="pass" placeholder="Contraseña">
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-outline-success btn-lg btn-block" @click="iniciarSesion()">Enviar</button>
            </div>
        </div>
    </div>
@endsection

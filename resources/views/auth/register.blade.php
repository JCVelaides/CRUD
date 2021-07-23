@extends('layouts.app')

@section('title', 'Register')
@section('content')
    <ul class="nav justify-content-end">
        <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewRegister') }}">Registrarse</a>
        </li>
        <li class="nav-item ml-1">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewLogin') }}">Iniciar sesión</a>
        </li>
    </ul>
    <div id="crud" class="col-md-4 offset-md-4 mt-5">
        <div class="card">
            <div class="card-header">
                <h1 class="my-3 text-center">Crear cuenta</h1>
            </div>
            <div class="card-body">
                <form id="formulario-registro">
                    <div class="form-group">
                        <label for="name">Nombres</label>
                        <input type="text" v-model="name" class="form-control" id="name" placeholder="Nombres">
                    </div>
                    <div class="form-group">
                        <label for="surname">Apellidos</label>
                        <input type="text" v-model="surname" class="form-control" id="surname" placeholder="Apellidos">
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico</label>
                        <input type="email" v-model="email" class="form-control" id="email" placeholder="Correo electrónico">
                    </div>
                    <div class="form-group">
                        <label for="pass">Contraseña</label>
                        <input type="password" v-model="password" class="form-control" id="pass" placeholder="Contraseña">
                    </div>
                    <div class="form-group">
                        <label for="contact">Numero de telefono</label>
                        <input type="tel" v-model="contact" class="form-control" id="contact" placeholder="Numero de contacto">
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                <button type="button" class="btn btn-outline-success btn-lg btn-block" @click="registerUser()">Registrarse</button>
            </div>
        </div>
    </div>
@endsection

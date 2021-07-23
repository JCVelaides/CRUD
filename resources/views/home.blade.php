@extends('layouts.app')

@section('title', 'Home')
@section('content')
    <ul class="nav justify-content-end">
        <li class="nav-item">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewRegister') }}">Registrarse</a>
        </li>
        <li class="nav-item ml-1">
            <a class="nav-link btn btn-outline-dark" href="{{ route('nViewLogin') }}">Iniciar sesión</a>
        </li>
    </ul>
@endsection

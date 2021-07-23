<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'names' => 'required|alpha',
            'surname' => 'required|alpha',
            'email' => 'required|email',
            'password' => 'required',
            'contact' => 'required|starts_with:3'
        ];
    }

    public function messages()
    {
        return [
            'names.required' => 'El nombre es obligatorio',
            'names.alpha' => 'El nombre debe contener solo letras',
            'surname.required' => 'El apellido es obligatorio',
            'surname.alpha' => 'El apellido debe contener solo letras',
            'email.required' => 'El correo electronico es obligatorio',
            'email.email' => 'No corresponde a una cuenta valida',
            'password.required' => 'La contraseña es obligatoria',
            'contact.required' => 'El numero de contacto es obligatorio'
        ];
    }
}

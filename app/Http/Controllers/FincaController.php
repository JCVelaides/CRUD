<?php

namespace App\Http\Controllers;

use App\Finca;
use Illuminate\Http\Request;

class FincaController extends Controller
{
    public function viewCreateFinca(){
        return view('create');
    }

    public function viewEditFinca(){
        return view('edit');
    }

    public function verDash(){
        return view('dashboard');
    }

    public function index(Request $request){
        //$finca = Finca::orderBy('id', 'DESC')->get();
        $finca = Finca::where('estado', 0)->get();
        return $finca;
    }

    public function crearFinca(Request $request){
        $finca = new Finca();
        $finca->nombreFinca = $request->nombreFinca;
        $finca->procedencia = $request->procedencia;
        $finca->departamento = $request->departamento;
        $finca->estado = 0;
        $aux = $request->verificado;
        if($aux != 0){
            $finca->verificado = $request->verificado;
            $finca->fechaVerificado = $request->fechaVerificado;
            $finca->nombreVerificado = $request->nombreVerificado;
            $finca->observacionVerificado = $request->observacionVerificado;
        }
        $finca->save();
    }

    public function editarFinca(Request $request, $id)
    {
        Finca::find($id)->update($request->all());
        return;
    }

    public function destroy(Request $request, $id)
    {

        //$finca = Finca::findOrFail($id);
        //$finca->delete();
        Finca::find($id)->update([
            'estado' => 1
        ]);
        return;
    }
}

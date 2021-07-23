<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Finca extends Model
{
    protected $fillable = ['nombreFinca', 'procedencia', 'departamento', 'verificado', 'fechaVerificado', 'nombreVerificado', 'observacionVerificado', 'estado'];
}

@extends('layouts.app')

@section('title', 'Dashboard')
@section('content')

    <div id="crud" class="container">    
        <ul class="nav justify-content-end">
            <li class="nav-item mt-lg-5 ml-5">
                <h6> Bienvenido @{{ name }} </h6>
                <br>
                <a href="#" class="btn btn-secondary pull-right" @click="logout">Cerrar sesión</a>
            </li>
        </ul>
        <h1 class="text-center">DASHBOARD</h1>
        <div class="row">
            <div class="col-md-12  mt-5">
                <div class="mb-lg-5">
                <a href="#" class="btn btn-outline-dark pull-right" data-toggle="modal" data-target="#create">Agregar Finca</a>
                </div>
                <table class="table" id="example"><!--<table class="table" id="example">-->
                    <thead>
                        <tr class="text-center">
                            <th>ID</th>
                            <th>Nombre de la Finca</th>
                            <th>Procedencia</th>
                            <th>Departamento</th>
                            <th>Verificado</th>
                            <th>Fecha</th>
                            <th>Nombre</th>
                            <th>Observación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                    <tr v-for="farm in farms">
                        <td v-text="farm.id"></td>
                        <td v-text="farm.nombreFinca"></td>
                        <td v-text="farm.procedencia"></td>
                        <td v-text="farm.departamento"></td>
                        <td v-text="farm.verificado"></td>
                        <td v-text="farm.fechaVerificado"></td>
                        <td v-text="farm.nombreVerificado"></td>
                        <td v-text="farm.observacionVerificado"></td>

                        <td>
                            <div class="btn-group" role="group">
                                <a href="#" class="btn btn-light active btn-sm" v-on:click.prevent="editar(farm)">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="btn btn-light btn-sm" v-on:click.prevent="deleteFarm(farm)">
                                    <i class="far fa-trash-alt"></i>
                                </a>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <!--modal para crear-->
                <form method="POST" v-on:submit.prevent="crearFinca">
                <div class="modal fade" id="create">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2>Nueva Finca</h2>
                                <button type="button" class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <label for="nombreFinca">Nombre de la finca</label>
                                <input type="text" name="nombreFinca" class="form-control" v-model="newFinca">
                                <label for="procedencia">Procedencia</label>
                                <input type="text" name="procedencia" class="form-control" v-model="newProcedencia">
                                <label for="departamento">Departamento</label>

                                <select class="form-control" id="departamento" v-model="newDepartamento" size="5">
                                    <option>Amazonas</option><option>Antioquía</option><option>Arauca</option>
                                    <option>Atlántico</option><option>Bolívar</option><option>Boyacá</option>
                                    <option>Caldas</option><option>Caquetá</option><option>Casanare</option>
                                    <option>Cauca</option><option>Cesar</option><option>Chocó</option>
                                    <option>Córdoba</option><option>Cundinamarca</option><option>Guainía</option>
                                    <option>Guaviare</option><option>Huila</option><option>La Guajira</option>
                                    <option>Magdalena</option><option>Meta</option><option>Nariño</option>
                                    <option>Norte de Santander</option><option>Putumayo</option><option>Quindío</option>
                                    <option>Risaralda</option><option>San Andrés y Providencia</option>
                                    <option>Santander</option><option>Sucre</option><option>Tolima</option>
                                    <option>Valle del Cauca</option><option>Vaupés</option><option>Vichada</option>
                                </select>
                            </div>
                            <div class="modal-footer">
                                <input type="submit" class="btn btn-outline-dark" value="Guardar">
                            </div>
                        </div>
                    </div>
                </div>
                </form>

                <!--modal para editar-->
                <form method="POST" v-on:submit.prevent="editarFinca(farm.id)">
                    <div class="modal fade" id="edit">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h2>Editar Finca</h2>
                                    <button type="button" class="close" data-dismiss="modal">
                                        <span>&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <label for="nombreFinca">Nombre de la finca</label>
                                    <input type="text" name="nombreFinca" class="form-control" v-model="farm.nombreFinca">
                                    <label for="procedencia">Procedencia</label>
                                    <input type="text" name="procedencia" class="form-control" v-model="farm.procedencia">
                                    <label for="departamento">Departamento</label>
                                    <select class="form-control" id="departamento" v-model="farm.departamento">
                                        <option>Amazonas</option><option>Antioquía</option><option>Arauca</option>
                                        <option>Atlántico</option><option>Bolívar</option><option>Boyacá</option>
                                        <option>Caldas</option><option>Caquetá</option><option>Casanare</option>
                                        <option>Cauca</option><option>Cesar</option><option>Chocó</option>
                                        <option>Córdoba</option><option>Cundinamarca</option><option>Guainía</option>
                                        <option>Guaviare</option><option>Huila</option><option>La Guajira</option>
                                        <option>Magdalena</option><option>Meta</option><option>Nariño</option>
                                        <option>Norte de Santander</option><option>Putumayo</option><option>Quindío</option>
                                        <option>Risaralda</option><option>San Andrés y Providencia</option>
                                        <option>Santander</option><option>Sucre</option><option>Tolima</option>
                                        <option>Valle del Cauca</option><option>Vaupés</option><option>Vichada</option>
                                    </select>
                                    <label>Verificado:</label>
                                    <div class="mb-lg-5 custom-control custom-switch">
                                        <input type="checkbox" v-model="farm.verificado" @click="click" class="custom-control-input" id="customSwitch1">
                                        <label class="custom-control-label" for="customSwitch1" v-if="farm.verificado===true">Si</label>
                                        <label class="custom-control-label" for="customSwitch1" v-else>No</label>
                                        <div v-if="farm.verificado===true" class="mr-lg-5">
                                            <label for="fecha">Fecha verificado:</label>
                                            <input type="date" id="fecha" class="form-control" v-model="newFechaVerificado">
                                            <label for="nombreVerificado">Nombre verificado:</label>
                                            <input type="text" name="nombreVerificado" class="form-control" v-model="newNombreVerificado">
                                            <label for="observacionVerificado">Observación verificado:</label>
                                            <input type="text" name="observacionVerificado" class="form-control" v-model="newObservacionVerificado">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-outline-dark" value="Editar">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>


            </div>
        </div>
    </div>

@endsection

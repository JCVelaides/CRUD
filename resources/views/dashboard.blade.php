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
                    <a href="#" id="rest" class="btn btn-outline-dark pull-right" data-toggle="modal" data-target="#create">Agregar Finca</a>
                </div>
                <table class="table" id="tabla">
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
                </table>

                <!--modal para crear-->
                <div class="modal fade" id="create">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2>Nueva Finca</h2>
                                <button type="button" class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <form id="addUser">
                                <div class="modal-body">
                                    <label for="">Nombre de la finca</label>
                                    <input type="text" class="form-control" id="nombreFinca">
                                    <label for="">Procedencia</label>
                                    <input type="text" class="form-control" id="procedencia">
                                    <label for="">Departamento</label>
                                    <select class="form-control" id="departamento" size="5">
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
                            </form>
                        </div>
                    </div>
                </div>

                <!--modal para editar-->                
                <div class="modal fade" id="edit">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h2>Editar Finca</h2>
                                <button type="button" class="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <form id="editUser">
                                <div class="modal-body">
                                    <label for="">Nombre de la finca</label>
                                    <input type="text" class="form-control" id="nombreFinca1">
                                    <label for="">Procedencia</label>
                                    <input type="text" class="form-control" id="procedencia1">
                                    <label for="">Departamento</label>
                                    <select class="form-control" id="departamento1">
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
                                        <input name="customSwitch1" type="checkbox" v-model="farm.verificado" @click="click" class="custom-control-input" id="customSwitch1">
                                        <label class="custom-control-label elsi" for="customSwitch1" v-if="farm.verificado===true">Si</label>
                                        <label class="custom-control-label" for="customSwitch1" v-else>No</label>
                                        <div v-if="farm.verificado===true" class="mr-lg-5">
                                            <label for="">Fecha verificado:</label>
                                            <input type="date" id="fechaVerificado" class="form-control">
                                            <label for="">Nombre verificado:</label>
                                            <input type="text" id="nombreVerificado" class="form-control">
                                            <label for="">Observación verificado:</label>
                                            <input type="text" id="observacionVerificado" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <input type="submit" class="btn btn-outline-dark" value="Editar">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection

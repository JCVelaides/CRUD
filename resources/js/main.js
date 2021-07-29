const { isNull, isEmpty } = require("lodash");

//Codigo insertado
new Vue({
    el: '#crud',
    created: function() {
        //this.getFincas();
        this.miTabla();
    },
    data: {
        farms: [],
        farm: {
            id: '',
            nombreFinca: '',
            procedencia: '',
            departamento: '',
            verificado: false,
            nombreVerificado: '',
            fechaVerificado: '',
            observacionVerificado: ''
        },
        newFinca: '',
        newProcedencia: '',
        newDepartamento: '',
        newNombreVerificado: '',
        newFechaVerificado: '',
        newObservacionVerificado: '',
        name: '',
        surname: '',
        email: '',
        password: '',
        contact: ''
    },
    methods: {
        miTabla(){
            $(function(){
                miTabla = $('#tabla').DataTable({               
                    "ajax": {
                        "headers": {
                            "Authorization": `bearer ${localStorage.getItem('access_token')}`,
                            "Content-Type": "application/json"
                            /*'Access-Control-Allow-Origin':'*',
                            'Access-Control-Allow-Methods': 'POST',
                            'Access-Control-Allow-Credentials': true,
                            'Access-Control-Allow-Headers':'origin, content-type',
                            'cache-control': 'no-cache'*/
                        },
                        "url": "http://127.0.0.1:3000/api/auth/index",
                    },
                    "columns": [
                        {data: "id"},
                        {data: "nombreFinca"},
                        {data: "procedencia"},
                        {data: "departamento"},
                        {data: "verificado"},
                        {data: "fechaVerificado"},
                        {data: "nombreVerificado"},
                        {data: "observacionVerificado"},
                        {"defaultContent": "<div class='btn-group' role='group'><a href='#' class='btn btn-light active btn-sm editar'><i class='fas fa-edit'></i></a><a href='#' class='btn btn-light btn-sm eliminar'><i class='far fa-trash-alt'></i></a></div>"}
                    ],
                    "language": {
                        "processing": "Procesando...",
                        "lengthMenu": "Mostrar _MENU_ registros",
                        "zeroRecords": "No se encontraron resultados",
                        "emptyTable": "Ningún dato disponible en esta tabla",
                        "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                        "infoFiltered": "(filtrado de un total de _MAX_ registros)",
                        "search": "Buscar:",
                        "infoThousands": ",",
                        "loadingRecords": "Cargando...",
                        "paginate": {
                            "first": "Primero",
                            "last": "Último",
                            "next": "Siguiente",
                            "previous": "Anterior"
                        },
                        "aria": {
                            "sortAscending": ": Activar para ordenar la columna de manera ascendente",
                            "sortDescending": ": Activar para ordenar la columna de manera descendente"
                        },
                        "buttons": {
                            "copy": "Copiar",
                            "colvis": "Visibilidad",
                            "collection": "Colección",
                            "colvisRestore": "Restaurar visibilidad",
                            "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
                            "copySuccess": {
                                "1": "Copiada 1 fila al portapapeles",
                                "_": "Copiadas %d fila al portapapeles"
                            },
                            "copyTitle": "Copiar al portapapeles",
                            "csv": "CSV",
                            "excel": "Excel",
                            "pageLength": {
                                "-1": "Mostrar todas las filas",
                                "_": "Mostrar %d filas"
                            },
                            "pdf": "PDF",
                            "print": "Imprimir"
                        },
                        "autoFill": {
                            "cancel": "Cancelar",
                            "fill": "Rellene todas las celdas con <i>%d<\/i>",
                            "fillHorizontal": "Rellenar celdas horizontalmente",
                            "fillVertical": "Rellenar celdas verticalmentemente"
                        },
                        "decimal": ",",
                        "searchBuilder": {
                            "add": "Añadir condición",
                            "button": {
                                "0": "Constructor de búsqueda",
                                "_": "Constructor de búsqueda (%d)"
                            },
                            "clearAll": "Borrar todo",
                            "condition": "Condición",
                            "conditions": {
                                "date": {
                                    "after": "Despues",
                                    "before": "Antes",
                                    "between": "Entre",
                                    "empty": "Vacío",
                                    "equals": "Igual a",
                                    "notBetween": "No entre",
                                    "notEmpty": "No Vacio",
                                    "not": "Diferente de"
                                },
                                "number": {
                                    "between": "Entre",
                                    "empty": "Vacio",
                                    "equals": "Igual a",
                                    "gt": "Mayor a",
                                    "gte": "Mayor o igual a",
                                    "lt": "Menor que",
                                    "lte": "Menor o igual que",
                                    "notBetween": "No entre",
                                    "notEmpty": "No vacío",
                                    "not": "Diferente de"
                                },
                                "string": {
                                    "contains": "Contiene",
                                    "empty": "Vacío",
                                    "endsWith": "Termina en",
                                    "equals": "Igual a",
                                    "notEmpty": "No Vacio",
                                    "startsWith": "Empieza con",
                                    "not": "Diferente de"
                                },
                                "array": {
                                    "not": "Diferente de",
                                    "equals": "Igual",
                                    "empty": "Vacío",
                                    "contains": "Contiene",
                                    "notEmpty": "No Vacío",
                                    "without": "Sin"
                                }
                            },
                            "data": "Data",
                            "deleteTitle": "Eliminar regla de filtrado",
                            "leftTitle": "Criterios anulados",
                            "logicAnd": "Y",
                            "logicOr": "O",
                            "rightTitle": "Criterios de sangría",
                            "title": {
                                "0": "Constructor de búsqueda",
                                "_": "Constructor de búsqueda (%d)"
                            },
                            "value": "Valor"
                        },
                        "searchPanes": {
                            "clearMessage": "Borrar todo",
                            "collapse": {
                                "0": "Paneles de búsqueda",
                                "_": "Paneles de búsqueda (%d)"
                            },
                            "count": "{total}",
                            "countFiltered": "{shown} ({total})",
                            "emptyPanes": "Sin paneles de búsqueda",
                            "loadMessage": "Cargando paneles de búsqueda",
                            "title": "Filtros Activos - %d"
                        },
                        "select": {
                            "cells": {
                                "1": "1 celda seleccionada",
                                "_": "$d celdas seleccionadas"
                            },
                            "columns": {
                                "1": "1 columna seleccionada",
                                "_": "%d columnas seleccionadas"
                            },
                            "rows": {
                                "1": "1 fila seleccionada",
                                "_": "%d filas seleccionadas"
                            }
                        },
                        "thousands": ".",
                        "datetime": {
                            "previous": "Anterior",
                            "next": "Proximo",
                            "hours": "Horas",
                            "minutes": "Minutos",
                            "seconds": "Segundos",
                            "unknown": "-",
                            "amPm": [
                                "am",
                                "pm"
                            ]
                        },
                        "editor": {
                            "close": "Cerrar",
                            "create": {
                                "button": "Nuevo",
                                "title": "Crear Nuevo Registro",
                                "submit": "Crear"
                            },
                            "edit": {
                                "button": "Editar",
                                "title": "Editar Registro",
                                "submit": "Actualizar"
                            },
                            "remove": {
                                "button": "Eliminar",
                                "title": "Eliminar Registro",
                                "submit": "Eliminar",
                                "confirm": {
                                    "_": "¿Está seguro que desea eliminar %d filas?",
                                    "1": "¿Está seguro que desea eliminar 1 fila?"
                                }
                            },
                            "error": {
                                "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\/a&gt;).<\/a>"
                            },
                            "multi": {
                                "title": "Múltiples Valores",
                                "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
                                "restore": "Deshacer Cambios",
                                "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
                            }
                        },
                        "info": "Mostrando de _START_ a _END_ de _TOTAL_ entradas"
                    }

                });

                var fila;
               
                $('#addUser').on('submit', function(e){
                    e.preventDefault();
                    nombreFinca = $.trim($('#nombreFinca').val());
                    procedencia = $.trim($('#procedencia').val());
                    departamento = $.trim($('#departamento').val());

                    $.ajax({
                        "headers": {
                            "Authorization": `bearer ${localStorage.getItem('access_token')}`
                        },
                        "url": "http://127.0.0.1:3000/api/auth/crear-finca",
                        "type": "POST",
                        data: {"nombreFinca": nombreFinca, "procedencia": procedencia, "departamento": departamento},
                            success: function(data){
                                miTabla.ajax.reload(null, false);
                            }
                    });
                    
                    $('#create').modal('hide');
                })

                $(document).on("click", "#rest", function(){
                    $('#addUser').trigger("reset");
                    $('#create').modal('show');
                })
                 
                $(document).on("click", ".eliminar", function(){
                    
                    fila = $(this);
                    id = parseInt($(this).closest("tr").find('td:eq(0)').text());
                    url = 'http://127.0.0.1:3000/api/auth/delete/' + id;

                    $.ajax({
                        "headers": {
                            "Authorization": `bearer ${localStorage.getItem('access_token')}`
                        },
                        "url": url,
                        "type": "PUT",
                        data: {"estado": 1},
                        success: function(data){
                            miTabla.row(fila.parents('tr')).remove().draw();                            
                        }
                    });                    
                })

                $(document).on("click", ".editar", function(){
                    
                    fila = $(this).closest("tr");
                    id = parseInt(fila.find('td:eq(0)').text());
                    nombreFinca = fila.find('td:eq(1)').text();                    
                    procedencia = fila.find('td:eq(2)').text();                    
                    departamento = fila.find('td:eq(3)').text();
                                        
                    $('#nombreFinca1').val(nombreFinca);
                    $('#procedencia1').val(procedencia);
                    $('#departamento1').val(departamento);
                    
                    $('#editUser').on('submit', function(e){
                        e.preventDefault();
                        url = 'http://127.0.0.1:3000/api/auth/editar-finca/' + id;
                        verificado = 0;
                        nombreFinc = $.trim($('#nombreFinca1').val());
                        procedenci = $.trim($('#procedencia1').val());
                        departament = $.trim($('#departamento1').val());
                        fechaVerificado = $.trim($('#fechaVerificado').val());
                        nombreVerificado = $.trim($('#nombreVerificado').val());
                        observacionVerificado = $.trim($('#observacionVerificado').val());
                        aux = $(this).find('.elsi').first().text();
                        
                        if(aux === "Si"){
                            verificado = 1;                                                     
                        }
                        
                        $.ajax({
                            "headers": {
                                "Authorization": `bearer ${localStorage.getItem('access_token')}`
                            },
                            "url": url,
                            "type": "PUT",
                            data: {"nombreFinca": nombreFinc, "procedencia": procedenci, "departamento": departament, "verificado": verificado, "fechaVerificado": fechaVerificado, "nombreVerificado": nombreVerificado, "observacionVerificado": observacionVerificado},
                            success: function(data){
                                miTabla.ajax.reload(null, false);
                            }
                        });
                        
                        $('#edit').modal('hide');
                        $('#editUser').trigger("reset");
                    });
                                        
                   $('#edit').modal('show');                                 
                })
                    
            });

            /*$(document).on("click", ".editar", function(){
                //this.farm.id = $.trim($('#id').val());
                fila = $(this).closest("tr");
                user_id = parseInt(fila.find('td:eq(0)').text());
                nombreFinca = fila.find('td:eq(1)').text();
                procedencia = fila.find('td:eq(2)').text();
                departamento = fila.find('td:eq(3)').text();
                $("nombreFinca").val(nombreFinca);
                //this.editar(user_id, nombreFinca, procedencia, departamento);
               // $("nombreFinca").val(nombreFinca);
                //this.farm.procedencia = farm.procedencia;
                //this.farm.departamento = farm.departamento;
                //alert(nombreFinca);
                //this.editarFinca(user_id);
                $('#edit').modal('show');
            });*/

            /*this.$nextTick(()=>{
                $('#example').DataTable();
            });*/
            //$(document).on("click", "#edit", function(){
            //    alert('hola');
            //});
            
        },

        /*----------
        getFincas: function() {//yap
            //let token = 'Bearer ' + localStorage.getItem('access_token');
            //const headers = { "Authorization": token  };
            //const params = {"token": localStorage.getItem('access_token')};
            axios.get('http://127.0.0.1:3000/api/auth/index', 
            { 
                headers: {'Authorization': `bearer ${localStorage.getItem('access_token')}`}
            }).then(response => {
                
                this.farms = response.data.finca;
                //this.name = localStorage.getItem('username');
                //this.axios.defaults.headers.common['Autorization'] = 'Bearer ' + localStorage.getItem('access_token');
                this.name = response.data.nombre;
                this.miTabla();
            }).catch( error => {
                //let er = error.data.msg;
                //console.log(er);
                //window.location = '/login';
                
            });
        }-----------------*/






        /*getFincas: function() {
            axios.post('http://127.0.0.1:3000/api/auth/index', {
                tk: localStorage.getItem('user')
            }).then(response => {
                this.farms = response.data
            });
        },*/
        registerUser: function () {//yap
            axios.post('http://127.0.0.1:3000/api/auth/register', {
                name: this.name,
                surname: this.surname,
                email: this.email,
                password: this.password,
                contact: this.contact
            }).then( response => {
                swal('Cuenta creada', 'Cuestionario lleno', 'success');
                this.clearData();
            }).catch( error => {
                /*let er = error.response.data.errors;
                let mensaje = 'Error no identificado';
                if( er.hasOwnProperty('email') ){
                    mensaje = er.email[0];
                } else {
                    mensaje = er.login[0];
                }
                swal('Error', mensaje, 'error');*/
                console.log( error.response.data );
            });
        },
        /*iniciarSesion: function (){
            axios.post('/iniciar-sesion', {
                email: this.email,
                password: this.password
            }).then( response => {
                swal('Sesion iniciada', 'datos correctos', 'success');
                this.clearData();
                window.location = '/ver';
            }).catch( error => {
                let er = error.response.data.errors;
                let mensaje = 'Error no identificado';
                if( er.hasOwnProperty('email') ){
                    mensaje = er.email[0];
                } else if( er.hasOwnProperty('password')){
                    mensaje = er.password[0];
                }
                swal('Error', mensaje, 'error');
            });
        }*/
        iniciarSesion: function(){ //yap
            axios.post('http://localhost:3000/api/auth/login', {
                email: this.email,
                password: this.password
            }).then( response => {
                window.location = '/ver';
                console.log('bien');
                localStorage.setItem('access_token', response.data.access_token);
                //localStorage.setItem('username', response.data.username);

                //let tk = localStorage.getItem('access_token');
                //alert(tk);
            }).catch( error => {
                alert(error.response.data);
            });
        },
        logout: function (){ //yap
            axios.post('http://127.0.0.1:3000/api/auth/logout', {
                headers: {'Authorization': `Bearer ${localStorage.getItem('access_token')}`}
            }).then(response=>{
                localStorage.removeItem('access_token');
                //localStorage.clear(); esto borra todo el localStorage
                window.location = '/login';
            });
        },
       /* crearFinca: function(){ //yap
            axios.post('http://127.0.0.1:3000/api/auth/crear-finca', {
                nombreFinca: this.newFinca,
                procedencia: this.newProcedencia,
                departamento: this.newDepartamento,
                //token: localStorage.getItem('access_token')
            }, {
                headers: {'Authorization': `bearer ${localStorage.getItem('access_token')}`}
            }).then( response => {
                //this.getFincas();
               swal('Finca creada', 'Cuestionario lleno', 'success');
                $('#create').modal('hide');
                window.location = '/ver';
            })
        },*/

        /*editar: function (farm){
            this.farm.id = farm.id;
            this.farm.nombreFinca = farm.nombreFinca;
            this.farm.procedencia = farm.procedencia;
            this.farm.departamento = farm.departamento;
            $('#edit').modal('show');
        }*/
        
        editar: function (user_id, nombreFinca, procedencia, departamento){
            this.farm.id = user_id;
            this.farm.nombreFinca = nombreFinca;
            this.farm.procedencia = procedencia;
            this.farm.departamento = departamento;
            $('#edit').modal('show');
        }
        ,
        click: function (){
            //alert(this.farm.verificado);
            //this.farm.verificado = true;
            //alert(this.farm.verificado);
            return this.farm.verificado;
        }
        ,
        editarFinca: function (id) { //yap
            var url = 'http://127.0.0.1:3000/api/auth/editar-finca/' + id;
            /*opcion = this.click();
            if (this.click() === true){
                alert('yes')
            }*/
            //this.farm
            axios.put(url, {
                nombreFinca: this.farm.nombreFinca,
                procedencia: this.farm.procedencia,
                departamento: this.farm.departamento,
                verificado: this.farm.verificado,
                nombreVerificado: this.newNombreVerificado,
                fechaVerificado: this.newFechaVerificado ,
                observacionVerificado: this.newObservacionVerificado
            }, 
            { 
                headers: {'Authorization': `bearer ${localStorage.getItem('access_token')}`}
            }).then( response => {
                //this.getFincas();

                this.farm = {
                    nombreFinca: '',
                    procedencia: '',
                    departamento: ''
                };
                //swal('Finca actualizada', 'lleno', 'success');
                window.location = '/ver';
            }).catch( error => {
                /*let er = error.response.data.errors;
                let mensaje = 'Error no identificado';
                if( er.hasOwnProperty('email') ){
                    mensaje = er.email[0];
                } else {
                    mensaje = er.login[0];
                }
                swal('Error', mensaje, 'error');*/
                console.log( error.response.data );
            });

        },
        deleteFarm: function (farm){
            var url = 'http://127.0.0.1:3000/api/auth/delete/' + farm.id;
            /*axios.delete(url).then(response =>{
                this.getFincas();
            })*/
            axios.put(url, {
                estado: 1
            },{ 
                    headers: {'Authorization': `bearer ${localStorage.getItem('access_token')}`}
                }).then(response =>{
                    //this.getFincas();
                    //window.location = '/ver';
            });
        }
        ,
        clearData: function () {
            this.name = '';
            this.surname = '';
            this.email= '';
            this.password= '';
            this.contact= ''
        }
    }

});

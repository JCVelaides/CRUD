//Codigo insertado
new Vue({
    el: '#crud',
    created: function() {
        this.getFincas();
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
        mytable(){
            $(function(){
                $('#example').DataTable();
            });
            /*this.$nextTick(()=>{
                $('#example').DataTable();
            });*/
        },

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
                this.mytable();
            }).catch( error => {
                //let er = error.data.msg;
                //console.log(er);
                //window.location = '/login';
                
            });
        }
        /*getFincas: function() {
            axios.post('http://127.0.0.1:3000/api/auth/index', {
                tk: localStorage.getItem('user')
            }).then(response => {
                this.farms = response.data
            });
        }*/,
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
            axios.post('http://127.0.0.1:3000/api/auth/login', {
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
                console.log('mal');
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
        crearFinca: function(){ //yap
            axios.post('http://127.0.0.1:3000/api/auth/crear-finca', {
                nombreFinca: this.newFinca,
                procedencia: this.newProcedencia,
                departamento: this.newDepartamento,
                //token: localStorage.getItem('access_token')
            }, {
                headers: {'Authorization': `bearer ${localStorage.getItem('access_token')}`}
            }).then( response => {
                this.getFincas();
               swal('Finca creada', 'Cuestionario lleno', 'success');
                $('#create').modal('hide');
                window.location = '/ver';
            })
        },
        editar: function (farm){
            this.farm.id = farm.id;
            this.farm.nombreFinca = farm.nombreFinca;
            this.farm.procedencia = farm.procedencia;
            this.farm.departamento = farm.departamento;
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
                this.getFincas();

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
                    this.getFincas();
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

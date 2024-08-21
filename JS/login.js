document.addEventListener('DOMContentLoaded', fn_ob_datos)
document.addEventListener('DOMContentLoaded', fn_mostrarDatos)
document.addEventListener('DOMContentLoaded', fn_editar)
const url = "http://localhost:3000/Users"
//login
let log_ob_user = document.getElementById("username")
let log_ob_pass = document.getElementById("pass")
let btnIniciar = document.getElementById("btn-iniciar")
//registro
let reg_ob_name = document.getElementById("name")
let reg_ob_lastname = document.getElementById("lastname")
let reg_ob_email = document.getElementById("email")
let reg_ob_pass = document.getElementById("r_pass")
let btnRegistrar = document.getElementById("btn-registrar")
//tabla
let tabla_datos = document.getElementById("tbody-admin")
//ADMIN
let edit_id = document.getElementById("txtId")
let edit_Name = document.getElementById("txtNombre")
let edit_Lastname = document.getElementById("txtApellido")
let edit_email = document.getElementById("txtEmail")
let edit_user = document.getElementById("txtUser")
let edit_password = document.getElementById("txtPassword")
let btnGuardar = document.getElementById("btnGuardar")

//GET para validar login
function fn_ob_datos(){
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        function fn_login(){
            let log_user = log_ob_user.value
            let log_pass = log_ob_pass.value
            let userFound = false
            res.forEach(function(i){
                if(log_user===i.user && log_pass===i.pass){
                    alert("ingreso de sesión")
                    localStorage.setItem("loggedName", i.name)
                    localStorage.setItem("loggedLastName", i.lastname)
                    location.href="bienvenido.html"
                    userFound=true
                }
            })
            if(!userFound){
                alert("Usuario o password incorrectos")
            }
            
        }
        btnIniciar.addEventListener('click', fn_login)
    })
}

//REGISTRARSE
btnRegistrar.addEventListener('click', fn_registrar)
function fn_registrar(){
    let reg_ob_user = reg_ob_email.value.split("@")[0]
    let opciones = {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": reg_ob_name.value,
            "lastname": reg_ob_lastname.value,
            "email": reg_ob_email.value,
            "user": reg_ob_user,
            "pass": reg_ob_pass.value
        })
    }
    fetch(url, opciones)
    .then(res=>res.json())
    .then(res=>{
        alert("Se registró correctamente")
    })
}

//GET para mostrar en tabla de administrador
function fn_mostrarDatos(){
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        let fila=""
        res.forEach((i, indice)=>{
            fila+=`
                <tr>
                    <th>${i.id}</th>
                    <td>${i.name}</td>
                    <td>${i.lastname}</td>
                    <td>${i.email}</td>
                    <td>${i.user}</td>
                    <td>${i.pass}</td>
                    <td>
                        <button class="btn btn-primary"
                            onclick='fn_editar(${indice})' 
                            type="button">
                        Editar</button>
                        <button class="btn btn-danger" 
                            onclick='fn_eliminar(${indice},"${i.id}")' 
                            type="button">
                        Eliminar</button>
                    </td>
                </tr>
            `
        })
        tabla_datos.innerHTML = fila

    })
}

//DELETE para eliminar el usuario, solo el admin puede hacerlo
function fn_eliminar(indice, id){
    alertify.confirm('Desea elminar el usuario', function(){
        let eliminar_opciones = {
            method: "DELETE"
        }
        fetch(`${url}/${id}`, eliminar_opciones)
        .then(res=>res.json())
        .then(res=>{
            tabla_datos.deleteRow(indice)
        })
    },
    function(){ /*alertify.error('Cancel')*/}); 
}


function fn_editar(indice){

    let $id = tabla_datos.rows[indice].cells[0].innerHTML
    let $nom = tabla_datos.rows[indice].cells[1].innerHTML
    let $ape = tabla_datos.rows[indice].cells[2].innerHTML 
    let $mail = tabla_datos.rows[indice].cells[3].innerHTML 
    let $user = tabla_datos.rows[indice].cells[4].innerHTML 
    let $pass = tabla_datos.rows[indice].cells[5].innerHTML 
    edit_id.value = $id
    edit_Name.value = $nom
    edit_Lastname.value = $ape
    edit_email.value = $mail
    edit_user.value = $user
    edit_password.value = $pass
    
    function fn_guardar_edit(id){
        let editar_opciones= {
        method : "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": edit_id.value,
            "name": edit_Name.value,
            "lastname": edit_Lastname.value,
            "email": edit_email.value,
            "user": edit_user.value,
            "pass": edit_password.value
        })
        }
        fetch(`${url}/${id}`,editar_opciones)
        .then(res=>res.json())
        .then(res=>{})
    }
    btnGuardar.addEventListener('click', function() {
        fn_guardar_edit($id);
    });
    
}


/*---------------------------------------------
                LOGIN STYLE
-----------------------------------------------*/
const fondo = document.querySelector(".fondo");
const loginlink = document.querySelector(".login-link");
const registrarlink = document.querySelector(".registrar-link");
const btn = document.querySelector(".btn");
const iconocerrar = document.querySelector(".icono-cerrar");
registrarlink.addEventListener("click", () => {
    fondo.classList.add('active');
});
loginlink.addEventListener("click", () => {
    fondo.classList.remove('active');
});
btn.addEventListener("click", () => {
    fondo.classList.add('active-btn');
});
iconocerrar.addEventListener("click", () => {
    fondo.classList.remove('active-btn');
});



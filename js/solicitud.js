document.querySelector('#btn-SInicio').addEventListener('click',iniciarSesion);

function iniciarSesion() {
    let user='';
    let contrasena='';
    let access=false;

    user=document.querySelector('#txtUsuario').value;
    contrasena=document.querySelector('#txtPassword').value;

    access=userValidation(user,contrasena);
    console.log(access);
    if (access===true) {
        login();
    } else {
        alert("usuario o contraseña invalidos")
    }
}
function login() {
    window.location.href="Auditoria.html"
}


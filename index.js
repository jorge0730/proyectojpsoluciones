var ingreso = function() {
    var correo = document.getElementById("correo").value
    var clave = document.getElementById("clave").value
    if(correo == "usuario@jpsoluciones.com" && clave == '1234'){
        window.location.href ="./usuario.html";
    }
    else if(correo == "administrador@jpsoluciones.com" && clave == '1234'){
        window.location.href ="./administrador.html";
    }
    else{
        alert("datos incorrectos")
    }

}
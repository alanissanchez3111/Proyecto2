function encriptar(){
    const passSistema= "Norevelesmichisme";
    const msgError= "Incorrecto por sapo";
    var mensaje = document.getElementById("msg").value;
    var password = document.getElementById("pass").value;
    if(passSistema==password){
        var encriptado = btoa(mensaje);
        document.getElementById("demo1").innerHTML = encriptado;    
        document.getElementById("error").innerHTML = "";
    }else{
        document.getElementById("error").innerHTML = msgError;
    }
}

function desencriptar(){
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var decrypted = atob(mensajeCodigo);
    document.getElementById("demo2").innerHTML = decrypted
}

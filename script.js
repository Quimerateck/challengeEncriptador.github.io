// variables

var mensaje = document.getElementById("texto-input");
var mensajeEncriptado = document.getElementById("mensaje-encriptado");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnEncriptar = document.getElementById("btn-encriptar");
var btnCopiar = document.getElementById("btn-copiar");

mensaje.focus();

//funciones
function log(texto){
    console.log(texto);
}

function ocultarImg(){
    var primerEncriptado = true
    if (primerEncriptado) {
        document.getElementById("imagen-rectangulo").style.display = "none"; 
        document.getElementById("mensaje-rectangulo").style.display ="none";
        document.getElementById("h2-rectangulo").style.display = "none";
        document.getElementById("p-rectangulo").style.display = "none";
        document.getElementById("mensaje-encriptado").style.display = "block"; 
        document.getElementById("btn-copiar").style.display = "block";
    }
    primerEncriptado = false;
}

function encriptar(){
    var nuevotexto = "";
    var texto = mensaje.value;
    for (index = 0; index <= texto.length -1 ; index++){
        if (texto[index] == "a"){
            nuevotexto += "ai";
        }
        else if (texto[index] == "e"){
            nuevotexto += "enter";
        }
        else if (texto[index] == "i"){
            nuevotexto += "imes";
        }
        else if (texto[index] == "o"){
            nuevotexto += "ober";
        }
        else if (texto[index] == "u"){
            nuevotexto += "ufat";
        }
        else{
            nuevotexto += texto[index];
        }
    }
    log(nuevotexto);
    mensajeEncriptado.value = nuevotexto;
}

/*function comprobarEncriptado(){
    texto = mensaje.value;
    encripciones = ["ai","enter","imes","ober","ufat"]
    palabra = "";
    for (var index = 0; index <= texto.length; index++){
        if (texto[index] != " "){
            palabra += texto[index]; 
        }
        else if ((texto[index] == " ") && (palabra in encripciones) ){
            break;
        }
        else if ((texto[index] == " ") && !(palabra in encripciones) ){
            alert("El mensaje no esta encriptado");
            break;
        }
        else{
            continue;
        }
    }
} */

function desencriptar(){
    var nuevotexto = "";
    var texto = mensaje.value;
    for (index = 0; index <= texto.length -1 ; index++){
        if (texto[index] == "a"){
            nuevotexto += "a";
            index += 1;
        }
        else if (texto[index] == "e"){
            nuevotexto += "e";
            index += 4;
        }
        else if (texto[index] == "i"){
            nuevotexto += "i";
            index += 3;
        }
        else if (texto[index] == "o"){
            nuevotexto += "o";
            index += 3;
        }
        else if (texto[index] == "u"){
            nuevotexto += "u";
            index += 3;
        }
        else{
            nuevotexto += texto[index];
        }
    }
    log(nuevotexto);
    mensajeEncriptado.value = "";
    mensajeEncriptado.value = nuevotexto;
}

function funcionesEncriptar(){
    ocultarImg();
    encriptar();
}

function funcionesDesencriptar(){
    ocultarImg()
    desencriptar();
}

function copiarTexto(){

    var texto = mensajeEncriptado;
    texto.select();
    texto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(texto.value);
}

//Botones

btnEncriptar.onclick = funcionesEncriptar;
btnDesencriptar.onclick = funcionesDesencriptar;
btnCopiar.onclick = copiarTexto;
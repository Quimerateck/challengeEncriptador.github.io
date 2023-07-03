// variables

var mensaje = document.getElementById("texto-input");
var mensajeEncriptado = document.getElementById("mensaje-encriptado");
var btnDesencriptar = document.getElementById("btn-desencriptar");
var btnEncriptar = document.getElementById("btn-encriptar");
var btnCopiar = document.getElementById("btn-copiar");

var codigo = {"a":"ai","e":"enter","i":"imes","o":"ober","u":"ufat"};
var letras = ["a","e","i","o","u"];

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
    for (let i = 0; i < texto.length; i++) {
        if (letras.includes(texto[i])){
            var letra = texto[i];
            nuevotexto += texto[i].replace(letra, codigo[letra]);
        }else{
            nuevotexto += texto[i];
        }
        
    }
    mensajeEncriptado.value = nuevotexto;
}

function desencriptar(){
    var texto = "";
    texto = mensaje.value;
    letras.forEach(letra => {
        texto = texto.replaceAll(codigo[letra], letra);
    });
    mensajeEncriptado.value = texto;
}

function funcionesEncriptar(){
    ocultarImg();
    encriptar();
}

function funcionesDesencriptar(){
    ocultarImg();
    desencriptar();
}

function copiarTexto(){

    var texto = mensajeEncriptado;
    texto.select();
    texto.setSelectionRange(0, 99999); //para celulares
    navigator.clipboard.writeText(texto.value);
}

//Botones
btnEncriptar.onclick = funcionesEncriptar;
btnDesencriptar.onclick = funcionesDesencriptar;
btnCopiar.onclick = copiarTexto;
let btnEncriptar = document.querySelector('.btn-encriptar');
let btnDesencriptar = document.querySelector('.btn-desencripatr');
let contenedor = document.querySelector('.contenedor-parrafo')
let resultado = document.querySelector('.texto-resultado');



function Encriptar () {
    
    let textoEncriptar = document.getElementById('texto').value.toLowerCase();
    resultado.textContent = encriptarTexto(textoEncriptar);
    document.getElementById('imgenMunieco').style.display = "none";
    document.querySelector('.mensaje').style.display = "none";
    document.querySelector('.btn-copiar').style.display = "show";
    document.querySelector('.btn-copiar').style.display = "inherit";
    document.querySelector('.texto-resultado').style.display = "show";
    document.querySelector('.texto-resultado').style.display = "inherit";
    console.log(textoEncriptar);
}   

function encriptarTexto (parrafo) {
    let texto = parrafo;
    let textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function Desencriptar () {
    let textoEncriptar = document.getElementById('texto').value;
    resultado.textContent = desencriptarTexto(textoEncriptar);
    document.getElementById('imgenMunieco').style.display = "none";
    document.querySelector('.mensaje').style.display = "none";
    document.querySelector('.btn-copiar').style.display = "show";
    document.querySelector('.btn-copiar').style.display = "inherit";
}

function desencriptarTexto(parrafo){
    var texto = parrafo;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

let btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    });
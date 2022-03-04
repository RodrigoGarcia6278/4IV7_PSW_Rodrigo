/*
Javasripct es un lenguaje que posee un paradigma orientado a objetos y funciones, por tal motivo presenta una particularidad la cual es:

NO TIPADO

no existe int, float, string, ni char, ni nada

TODO ES VAR -> variable

De acuerdo al estandar ES6 se maneja 3 tipos de variables 

VAR
LET    es una variable del tipo "protected" 
CONST
*/

function validar(formulario){
    //obtener los datos y discriminar a los que tienen 3 letras
    if(formulario.nombre.value.length < 5){
        alert("Escriba por lo menos 5 caracteres en el campo Nombre");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "QWERTYUIOPASDFGHJKLÑZXCVBNM"
    + "qwertyuiopasdfghjklñzxcvbnm"

    var checkSTR = formulario.nombre.value;

    var todoesvalido = true;

    for(var i = 0; i < checkSTR.length; i++){
        var ch = checkSTR.charAt(i);
        for(var j = 0; j< checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente letras en el campo Nombre");
        formulario.nombre.focus();
        return false;

    }

    var checkOK = "1234567890"

    var checkSTR = formulario.edad.value;

    var todoesvalido = true;

    for(var i = 0; i < checkSTR.length; i++){
        var ch = checkSTR.charAt(i);
        for(var j = 0; j< checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
            
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente numeros en el campo Edad");
        formulario.nombre.focus();
        return false;

    }

    var txt = formulario.email.value;

    //creo mi expresion regular
    // algo@algo   o   algo@algo.algo

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt) ?"":" no ")+" valido");

    return b.test;
}
function validar(examen){
    if(examen.valor.value.length < 10000000, examen.valor.value.length > 100000000){
        alert("Escriba un Valor entre 10000000 y 100000000");
        examen.valor.focus();
        return false;
    }

    var porcentajecuo = (examen.valor.value*10)/100;
    
    if(examen.cuotaini.value > porcentajecuo){
        alert("Escriba una Cuota Inicial de minimo, el 10% del Valor del Automovil");
        examen.cuotaini.focus();
        return false;
    }

    if(examen.periodo.value.length <= 2, examen.periodo.value.length == 4, examen.periodo.value.length == 5, examen.periodo.value.length == 7, examen.periodo.value.length == 8, examen.periodo.value.length == 10, examen.periodo.value.length == 11, examen.periodo.value.length == 13, examen.periodo.value.length == 14, examen.periodo.value.length == 15, examen.periodo.value.length == 16, examen.periodo.value.length == 17, examen.periodo.value.length >= 19){
        alert("Escriba un Perido dentro del rangop permitido")
        examen.periodo.focus();
        return false;
    }

    var interes = (examen.cuotaini.value*3.94)/100;

    var s = (examen.cuotaini.value*interes)*examen.periodo.value;
    var cuo = document.getElementById('Cuota');
    cuo.innerHTML = s;
}
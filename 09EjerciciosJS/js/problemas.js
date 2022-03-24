function problema1(){
    var capital = document.getElementById('p1-input').value;
    if(capital == ""){
        alert('Entrada vacia');
        return false;
    }
    if(capital.length!=""){
        var ganado = 0;
        var final = 0;
        var resultado1 = '';

        ganado = parseFloat(capital*2/100);
        final = parseFloat(capital*2/100)+parseFloat(capital);

        resultado1 += 'Ganancia de la inversión: '+ganado+' | Saldo de: '+final+'\n';


    }
    document.querySelector('#p1-output').textContent = resultado1;
}

function problema2(){
    var sueldo = document.getElementById('p2.1-input').value;
    var ven1 = document.getElementById('p2.2-input').value;
    var ven2 = document.getElementById('p2.3-input').value;
    var ven3 = document.getElementById('p2.4-input').value;
    if((sueldo=="") && (ven1=="") && (ven2=="") && (ven3=="")){
        alert('Entrada vacia');
        return false;
    }
    if((sueldo!="") && (ven1!="") && (ven2!="") && (ven3!="")){
        var co = 0;
        var su = 0;
        var resultado2 = '';
        var ve = 0;

        ve = parseFloat(ven1)+parseFloat(ven2)+parseFloat(ven3);
        co = parseFloat(ve*10/100);
        su = parseFloat(sueldo)+parseFloat(co);

        resultado2 += 'Comisión: '+co+' | Sueldo Total: '+su+'\n';

    }
    document.querySelector('#p2-output').textContent = resultado2;
}

function problema3(){
    var compra = document.getElementById('p3-input').value;
    if(compra==""){
        alert('Entrada vacia');
        return false;
    }
    if(compra!=""){
        var desc = 0;
        var comp = 0;
        var resultado3 = '';

        desc = parseFloat(compra*15/100);
        comp = parseFloat(compra)-parseFloat(desc);
        
        resultado3 += 'Descuento en la compra: '+desc+' | Total a Pagar: '+comp+'\n';
    
    }
    document.querySelector('#p3-output').textContent = resultado3;
}

function problema4(){
    var parcial1 = document.getElementById('p4.1-input').value;
    var parcial2 = document.getElementById('p4.2-input').value;
    var parcial3 = document.getElementById('p4.3-input').value;
    var examen = document.getElementById('p4.4-input').value;
    var trabajo = document.getElementById('p4.5-input').value;
    if((parcial1=="") && (parcial2=="") && (parcial3=="") && (examen=="") && (trabajo=="")){
        alert('Entrada vacia');
        return false;
    }
    if((parcial1>10) && (parcial2>10) && (parcial3>10) && (examen>10) && (trabajo>10)){
        alert('Introducir solo calificaciones menor o igual a 10');
        return false;
    }
    if((parcial1<0) && (parcial2<0) && (parcial3<0) && (examen<0) && (trabajo<0)){
        alert('Introducir solo calificaciones en numeros positivos');
        return false;
    }
    if((parcial1!="") && (parcial2!="") && (parcial3!="") && (examen!="") && (trabajo!="")){
        var prom1 = 0;
        var prom2 = 0;
        var prom3 = 0;
        var promfin = 0;
        var resultado4 = '';

        prom1 = ((parseFloat(parcial1)+parseFloat(parcial2)+parseFloat(parcial3))/3)*55/100;
        prom2 = parseFloat(examen)*30/100;
        prom3 = parseFloat(trabajo)*15/100;
        promfin = parseFloat(prom1)+parseFloat(prom2)+parseFloat(prom3);
        resultado4 += 'Calificación final: '+promfin+'\n';

    }
    document.querySelector('#p4-output').textContent = resultado4;
}

function problema5(){
    var noH = document.getElementById('p5.1-input').value;
    var noM = document.getElementById('p5.2-input').value;
    if((noH=="") && (noM=="")){
        alert('Entrada vacia');
        return false;
    }
    if((noH!="") && (noM!="")){
        var noT = 0;
        var porH = 0;
        var porM = 0;
        var resultado5 = '';

        noT = parseFloat(noH)+parseFloat(noM);
        porH = (parseFloat(noH)*100)/parseFloat(noT);
        porM = (parseFloat(noM)*100)/parseFloat(noT);
        resultado5 += 'Porcentaje de hombres: '+porH+'% | Porcentaje de mujeres: '+porM+'%\n';

    }
    document.querySelector('#p5-output').textContent = resultado5;
}

function problema6(){
    var dia = document.getElementById('p6.1-input').value;
    var mes = document.getElementById('p6.2-input').value;
    var año = document.getElementById('p6.3-input').value;
    var resultado6 = '';
    if((dia == "") && (mes == "") && (año == "")){
        alert('Entrada vacia');
        return false;
    }
    if((dia != "") && (mes != "") && (año != "")){
        if((dia.length>2) && (dia.length!=4)){
            alert('Introducir solo dias dentro del limite');
            var hoy = new Date();
        años = hoy.getFullYear()-año;
        if(mes>hoy.getMonth()+1 && dia>hoy.getDay())
            años--;
        resultado6 += 'Edad: '+años+'\n';
        }
    }
    document.querySelector('#p6-output').textContent = resultado6;
}
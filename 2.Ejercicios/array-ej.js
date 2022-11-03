/* Script para resolver ejercicios de bucle for con JS */

function pedirString(){
    let valor = window.prompt("Introduce el valor:");
    return valor.toLowerCase();
}

function pedirNumero(){
    let valor = Number(window.prompt("Introduce un numero entero positivo:"));
    if(!isNaN(valor) && valor > 0){
        return valor;
    }
}

function leerId(idNum){
    return document.getElementById(idNum).value;
}

function numLeerId(idNum){
    return Number(leerId(idNum));
}

function escribirSalida(valor, idNum){
    //let txt = document.getElementById(idNum);
    
    let txt = document.getElementById(idNum);
    txt.innerText = valor; 

}

function pedirNumero(str){
    let valor = Number(window.prompt(str));
    if(!isNaN(valor) && valor >= 0){
        return valor;
    }
}

// 1. Array para guardar dias de la semana y al pedir 0-6 lo escribe
function arrayEj1(){
    let arr = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
    let value = numLeerId("input-1");
    escribirSalida(arr[value],"ej-1-resultados");

}
// 2. Array con booleans -> "V" o "F" 
    // si recibimos 0-9 -> true o "V"
    // else return false o "F"
function arrayEj2(){
    let arr = [true, false];
    let txt;
    let value = numLeerId("input-2");
    if(value >= 0 && value < 10) txt = arr[0];
    else txt = arr[1];
    escribirSalida(txt,"ej-2-resultados");     
}

// 3. fn sumaLista(arr) -> return de suma de Numbers
function arrayEj3(){
    let arr = [];
    let num;
    do{
        num = pedirNumero("Inserte un número (0 para detenerse): ");
        if(!isNaN(num)) arr.push(num);
    } while(num != 0);

    escribirSalida(sumaLista(arr), "ej-3-resultados"); 
}

function sumaLista(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}
// 4. Guardar números en array
    // Entrada de datos acaba con 0 o char alfanumérico -> ç r /
    // Se muestra el array, cuántos pares, impares
    // No guardar cosas que no sean Number
function arrayEj4(){
    let arr = [];
    let num, str, pares = 0, impares = 0;
    let bool = true;
    do{
        str = pedirString("Inserte un número (0 ç o / para detenerse): ");
        num = Number(str);
        bool = num != 0 && str != 'ç' && str != '/';
        if(!isNaN(num) && Number.isInteger(num) && bool){
             arr.push(num);
             if (num % 2 == 0) pares++;
             else impares++;
        
        }
    } while(bool);

    let txt =  `Array ${arr} 
                Pares ${pares}
                Impares ${impares}`;

    escribirSalida(txt, "ej-4-resultados"); 

}
// 5. Devolvemos min o índice del mínimo controlando "v" o "i" como segundo param
    // min([4,5,7], 'v') -> 4
    // min([4,5,7], 'i') -> 0
function arrayEj5(){
    let arr = [];
    let num, txt;
    let value = leerId("input-5");
    do{
        num = pedirNumero("Inserte un número (0 para detenerse): ");
        if(!isNaN(num) && num != 0) arr.push(num);
    } while(num != 0);
   
    if(condition == 'v') txt = "El valor es ";
    else txt ="El valor es ";

    escribirSalida(txt + min(arr, value), "ej-5-resultados");

}

function min(arr, condition){/*
    let value = Infinity, idx;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < value){
            value = arr[index];
            idx = index;
        }
    }*/
    let value = Math.min(...arr);
    let idx = arr.indexOf(value);
    if(condition == 'v') return value;
    else return idx;
}

function arrayEj6(){
    let arr = [];
    let str;
    let value = leerId("input-6");
    let bool = true;
    do{
        str = pedirString("Inserte un string (0 para detenerse): ");
        bool = str != '0';
        if(str != "" && bool) arr.push(str);
    } while(bool);

    escribirSalida(existeEn(arr, value), "ej-6-resultados");

   
}
function existeEn(arr, condition){/*
    let i = 0;
    let bool = false;
    while(i < arr.length && !bool){
        if(condition == arr[i]) bool = true;
        i++;
    }
    return bool;*/
    return arr.includes(condition);

}


function arrayEj7(){
    let arr = [];
    let str, cad = "";
    let bool = true;
    do{
        str = pedirString("Inserte un string (0 para detenerse): ");
        bool = str != '0';
        if(str != "" && bool){ 
            arr.push(str);
            if(esVocal(str)){
                cad += "-"+str+"-";
            }else cad+=str;
        }
    } while(bool);

    escribirSalida(cad, "ej-7-resultados");

}

function esVocal(vocal){
    let array = ['a', 'e', 'i', 'o', 'u'];
    return array.includes(vocal);
}

function arrayEj8(){    
    let arr = [];
    let str, cad = "";
    let bool = true;
    do{
        str = pedirString("Inserte un string (0 para detenerse): ");
        bool = str != '0';
        if(str != "" && bool){ 
            arr.push(str);
            cad += "-"+str+"-";
        }
    } while(bool);

    escribirSalida(cad, "ej-8-resultados");
    

}

function arrayEj9(){
    let value = leerId("input-9");
    escribirSalida(servicio(value), "ej-9-resultados");
}

function servicio(dia){
    let arr = [["Lunes", "María"], ["Martes", "Luis"], ["Miércoles", "Antonia"],
    ["Jueves","Pedro"], ["Viernes","Marisa"]];
    let txt;
    let i = 0;
    let bool = false;
    while(!bool && i < arr.length){
        bool = (arr[i][0]).toLowerCase() == dia;
        if(bool) txt = arr[i][1];
        i++;
    }
    if(!bool) txt = "No hay servicio";
    return txt;

}

function arrayEj10(){

}
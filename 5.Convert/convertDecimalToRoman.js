function convertir(){
    let num = document.getElementById("myInputA").valueAsNumber;
    let res = document.getElementById("resultados");
    //operador ternario:  condición ? si es true : si es false
    num < 4000 && num > 0 ? res.innerText = procesarArray(num) 
    : res.innerText = "No es posible procesar ese número";
}

 /*Algoritmo: 
                switch(i){
                    case 0: // millares else{
                        str+=simboloRomano(1000);//tantas veces 1000
                        
                        break;
                    case 1: // centenas
                        if(val == 900 && val == 400) str+= simboloRomano(100) + simboloRomano(val+100);
                        else if(val <900 && val > 400) str+=simboloRomano(500) + simboloRomano(100); //tantas veces 100
                        else{
                            str+=simboloRomano(100);//tantas veces 100
                        }
                        break;
                    case 2: // decenas
                        if(val == 90 && val == 40) str+= simboloRomano(10) + simboloRomano(val+10);
                        else if(val <90 && val > 40) str+=simboloRomano(50) + simboloRomano(10); //tantas veces 10
                        else{
                            str+=simboloRomano(10);//tantas veces 10
                        }
                        break;
                    case 3: //unidades
                        if(val == 9 && val == 4) str+= simboloRomano(1) + simboloRomano(val+1);
                        else if(val <9 && val > 4) str+=simboloRomano(5) + simboloRomano(1); //tantas veces 1
                        else{
                            str+=simboloRomano(1);//tantas vecesI
                        }
                        break;
                }

            }*/


/**
 * Devuelve string a partir de pasarle el array de las unidades. 
 * 
 * @param {array de cuatro elementos M C D U} arr 
 */

function procesarArray(num){
    let arr = descomponer(num); //da el array descompuesto.
    let val, unidades, str = "";
    let map = new Map({1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}); //lista con los números en keys y el signo romano en values.
    
    for (var i = 0; i < arr.length; i++) { 
        if(arr[i] != 0){
            unidades = 10**(arr.length-1-i); //multiplica por 1000 si es M, 100 si es C, 10 si es D y 1 si es U.
            val = arr[i] * unidades; 
            //si encuentra el valor en la lista
            if(map.has(val)) str += map.get(val);
            else{ //si no lo encuentra definido.
                //Si es divisible por 9 o por 4: será símbolo por unidades
                if(val / (9 * unidades) == 1 || val / (4 * unidades) == 1) { // 9 o 4.
                    str += map.get(unidades) + map.get(val+unidades);
                }else{ // de 8 a 5 y 4 a 1. 
                    if(val < (9 * unidades) && val > (4 * unidades)){
                        str += map.get(5 * unidades);
                        val -= 5 * unidades;
                    }
                    let numRepeat = val / unidades; //numero de veces
                    let temp = val / numRepeat;
                    str += String(map.get(temp)).repeat(numRepeat);
                } 
            }
        }
    }
    return str;
}


/**
 *  Convierte un número a string y, cada uno de los valores los metemos en un array.
 * 
 */
function descomponer(num){
    //         M  C  D  U
    let arr = [0, 0, 0, 0];
    let numStr = String(num); 
    let len = numStr.length; // 1, 2, 3, 4

    for(var i = 0; i < len; i++) 
        arr[i + (arr.length-len)] = Number(numStr[i]);

    return arr;
}


function convertirDecimal(){
    let numStr = document.getElementById("myInputB").value;
    let res = document.getElementById("resultados");/*
    if(num < 4000 && num > 0) res.innerText = procesarArray(descomponer(num));
    else res.innerText = "No es posible procesar ese número";*/
    res.innerText = convertirRomanToDecimal(numStr);
}

function convertirRomanToDecimal(numStr){
    let v1, v2, count = 0;
    //list = ["I", "V", "X", "L", "V", "C", "D", "M"]
    for(var i=0; i < numStr.length; i++){
        v1 = simboloDecimal(numStr[i]);
        if(i+1 != numStr.length){
            v2 = simboloDecimal(numStr[i+1]);
            if(v2 > v1) count -= v1;
            else count +=v1;
        }else{
            count +=v1;
        }
    }
    return count;
}

function simboloDecimal(numStr){
    if( numStr === "I" ) return 1;
    else if ( numStr === "V" ) return 5;
    else if ( numStr === "X" ) return 10;
    else if ( numStr === "L" ) return 50;
    else if ( numStr === "C" ) return 100;
    else if ( numStr === "D" ) return 500;
    else if ( numStr === "M" ) return 1000;
    else { return NaN; }
}
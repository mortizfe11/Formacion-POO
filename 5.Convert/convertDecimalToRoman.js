function convertir(){
    let num = document.getElementById("myInputA").valueAsNumber;
    document.getElementById("resultados").innerText = procesarArray(descomponer(num));
}

/**
 * 
 * 
 */
function simboloRomano(num){
    if( num === 1 ) { return "I" } 
    else if ( num === 5 )   { return "V"; } 
    else if ( num === 10 )  { return "X"; } 
    else if ( num === 50 )  { return "L"; }
    else if ( num === 100 ) { return "C"; }
    else if ( num === 500 ) { return "D"; }
    else if ( num === 1000 ){ return "M"; }
    else { return NaN; }
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

function procesarArray(arr){
    let str = "";
    let val, unidades;
    let list = [1, 5, 10, 50, 100, 500, 1000];
    for (var i = 0; i < arr.length; i++) { 
        if(arr[i] != 0){
            unidades = 10**(arr.length-1-i); //multiplica por 1000 si es M, 100 si es C, 10 si es D y 1 si es U.
            val = arr[i] * unidades; 
            //si encuentra el valor en la lista
            if(list.includes(val)) str += simboloRomano(val);
            else{ //si no lo encuentra definido.
                //Si es divisible por 9 o por 4: será símbolo por unidades
                if(val / (9 * unidades) == 1 || val / (4 * unidades) == 1) { // 9 o 4.
                    str+=simboloRomano(unidades)+ simboloRomano(val+unidades);
                }else{ // de 8 a 5 y 4 a 1. 
                    if(val < (9 * unidades) && val > (4 * unidades)){
                        str+=simboloRomano(5 * unidades);
                        val -= 5 * unidades;
                    }
                    let numRepeat = val / unidades; //numero de veces
                    let temp = val/numRepeat;
                    str+=String(simboloRomano(temp)).repeat(numRepeat);
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

    if(len < 4) numStr = '0'.repeat(arr.length-len) +numStr; //si la longitud es inferior a 4, rellena con ceros. 
    for(var i = 0; i < arr.length; i++){
        arr[i] = Number(numStr[i]);
    }
    return arr;
}
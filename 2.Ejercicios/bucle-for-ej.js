
/* Script para resolver ejercicios de bucle for con JS */

function pedirNumero(){
    let valor = Number(window.prompt("Introduce un numero entero positivo:"));
    if(!isNaN(valor) && valor > 0){
        return valor;
    }

}

function escribirSalida(valor, idNum){
    let txt = document.getElementById(idNum);
    txt.innerText = valor; 

}

// 1
/*
Usando un bucle for escribir un script que pida un valor entero y 
muestre en pantalla una lista de números desde el 0 al valor tecleado. 
Los números se separarán por comas. 
Salida:
0, 1, 2, 3, 4, 5  
*/
function escribirScript(valor){
    let count = "";
    for(let i= 0; i < valor; i++){
        count += i; 
        if(i != valor-1) count += ", ";
    }
    escribirSalida(count, "1"); 


}
// 2 
/*
Se trata de que dado un número entero el script muesre una cuenta atrás, 
es decir, una lista de numeros separados por coma desde el número tecleado hasta el 0.
Salida:
5,4,3,2,1
*/
function cuentaAtras(valor){
    let count = "";
    for(let i = valor; i > 0; i--){
        count += i; 
        if(i != 1) count += ", ";
    }
    escribirSalida(count, "2"); 


}
// 3 
/*
Se quiere un bucle que genere una lista con todos los números pares positivos por debajo 
del número tecleado por el usuario. Los números se aparecerán en una ventana alert con 
cambios de linea (carácter '\n'). 
Salida
2
4
6
...
*/
function paresPositivos(valor){
    let count = "";
    for(let i= 2; i < valor; i+=2){
        count += i; 
        if(i != 1) count += " \n";
    }
    escribirSalida(count, "3");
}
/* 4
*Este script debe escribir la tabla de multiplicar del número que el usuario teclee. 
La tabla mostrará en diferentes líneas cada producto y el resultado en la forma a x b = ab.
Recuerda que el salto de linea es el carácter "\n"
*/
function tablaDeMultiplicar(valor){
    let count = "";
    for(let i= 0; i < 11; i++){
        count += valor + " x "+ i + " = "+ valor * i; 
        if(i != 1) count += " \n";
    }
    escribirSalida(count, "4");
}

/* 5
En este ejercicio mezclamos bucles on condicionales: el usuario escribe un número y el script imprimirá (console.log)
 todos los números menores que al dividirlos por 3 den como resto 2.

Recuerda: un número es múltiplo de N es cuando el dividirlo por N el resto es 0. 
**/
function divResto(valor){
    let count = "";
    for(let i= 1; i < valor; i++){
        if(i % 3 == 2) count += i + "\n"; 
    }
    escribirSalida(count, "5");

}

/* 6
Este script el usuario deberá teclear una letra y un número,
y el programa mostrará una cadena formada por la letra repetida el número que haya tecleado.
*/
function numLetra(letra, valor){
    escribirSalida(String(letra).repeat(valor), "6");
}

/* 7
Se quiere tener un contador de dos dígitos en base 5. 
El funcionamiento es simple: el dígito de la derecha irá aumentando 
y cuando pase de 4 su valor se pondrá a 0 y el dígito de la izquierda se incrementa en 1. 
El contador debe deternerse cuando alcancemos el valor 1:4
*/
function contadorDosDigitos(num){
    let count = 0;
    let dig1 = 0;
    for(let i=0; dig1 != 1 && dig2 != 4; i++){
        count = i % 5;
        if(count == 4) dig1++;
        console.log(dig1+":"+ count);
    }
    //count /= arr.length;
    //console.log("La media es "+Math.round(count));

    //escribirSalida(count, "8");
}


/* 8
* Se trata de dibujar un triángulo con asteriscos. El usuario tecleará un valor entero,
* el programa escribirá con asteriscos tantas lineas como diga ese número. 
* Cada linea estará formada por una serie de astericos tan larga como diga el número de línea en el que está.
* Para separar una linea de la siguiente en console o en alert debes usar "\n". En este ejercicio usa console.log.
*/
function triangulo(num, motivo = '*'){
    let count = "";
    for(let i= 1; i < num+1; i++){
        count+=motivo.repeat(i) + "\n"; 
    }
    console.log(count);
}

function trianguloDerecha(num, motivo = '*'){
    let count = "";
    for(let i= 1; i < num+1; i++){
        count+=' '.repeat(num - i)+ motivo.repeat(i) + "\n"; 
    }
    console.log(count);
}

function trianguloConBorde(num, motivoInt = 'x', motivoExt = 'o'){
    let count = "";
    for(let i= 1; i <= num; i++){
        if(i == 1 || i == 2 || i == num) count += motivoExt.repeat(i) + "\n"; 
        else count+=motivoExt + motivoInt.repeat(i-2) + motivoExt + "\n"; 
    }
    console.log(count);
}


function cuadrado(num, motivo = '*'){
    let count = "";
    for(let i= 1; i < num+1; i++){
        count+=motivo.repeat(num) + "\n"; 
    }
    console.log(count);
}

function rectangulo(ancho, alto, motivo = '*'){
    let count = "";
    for(let i= 1; i < alto+1; i++){
        count+=motivo.repeat(ancho) + "\n"; 
    }
    console.log(count);
}


function rectanguloBorde(ancho, alto, motivoInt = '*', motivoExt = "-"){
    let count = "";
    for(let i= 1; i <= alto; i++){
        if(i == 1 || i == alto) count += motivoExt.repeat(ancho) + "\n"; 
        else count += motivoExt + motivoInt.repeat(ancho-2) + motivoExt + "\n"; 
    }
    console.log(count);

    escribirSalida(count, 'para1');
}


/** 9
 * Se trata de crear una aplicación que calcule la suma de todos los números enteros positivos entre 0 
 * y el número tecleado por el usuario. El resultado será de la fomra "Los números enteros de 0 a n suman suma"
 * 
 * Salida: Si tecleo el 5 obtendré "Los enteros enteros de 0 a n suman 15" (1+2+3+4+5 ).
 */
 function sumaEnteros(num){
    let count = 0;
    for(let i= 1; i < num+1; i++){
        count += i;
    }
    console.log(count);
    //escribirSalida(count, "8");
}

/** 10
 * Programa un script que pida al usuario que teclee 4 números (uno cada vez). 
 * Con esos números el programa deberá calcular la media aritmética. 
 * O sea la suma de los 4 números dividida entre 4
 * 
 * Salida: El progrma pide 4 veces al usuario que telcee un número y este escribe 5,9,10,12. 
 * El programa dirá "La media es 9"
 */
 function media(arr){
    let count = 0;
    for(let i=0; i < arr.length; i++){
        count += arr[i];
    }
    count /= arr.length;
    console.log("La media es "+Math.round(count));

    //escribirSalida(count, "8");
}


function ejerciciosFor(){
    let ancho = pedirNumero();
    let alto = pedirNumero();
    /*
    escribirScript(valor);
    cuentaAtras(valor);
    paresPositivos(valor);
    */
    let motivoInt = 'x', motivoExt = 'o'
    rectanguloBorde(ancho, alto, motivoInt, motivoExt)
}
/* Script para resolver ejercicios de bucle for con JS */

function pedirNumero(str){
    let valor = Number(window.prompt(str));
    if(!isNaN(valor) && valor >= 0){
        return valor;
    }
}

function pedirString(str){
    let valor = window.prompt(str);
    return valor.toLocaleLowerCase();
}

function escribirSalida(valor, idNum){
    let txt = document.getElementById(idNum);
    txt.innerText = valor; 

}


function ejerciciosWhile(){
    //let ancho = pedirNumero();

    //ej1();
    //ej2();
    //ej3();
    //ej4();
    //ej5();
    //ej6();
    //ej7();
    //ej8();
    ej9();
}
// Escribe todos losnúmeros desde el 0 al número pedido.
function ej1(){
    let num = pedirNumero("Introduce un numero entero positivo:");
    let i = 0;
    let txt = "";
    while(i <= num){
        txt +=i + ",";
        i++;
    }
    alert(txt.slice(0, -1));

}
// Pide números hasta que se introduzca uno entre el 1 y el 5.
function ej2(){
    let num;
    do{
        num = pedirNumero("Introduce un numero entre 1 y 5:");
    }while(num < 1 || num > 5);
}

// El progama continuará a menos que escribas un N o n.
function ej3(){
    let str;
    do{
        str = pedirString("¿Desea seguir con el programa? (s/n)");
    }while(str != 'n');

    /** Otra forma:
     * 
     * let b = true;
     * while(b){
     *  b = confirm("Desea finalizar el programa?"); //Confirm nos tira un booleano 
     * }
     * 
     */
}
// Verifica si el número introducido es primo.
function ej4(){
    let num = pedirNumero("Inserte el número que desea ver si es primo:");
    let i = 2, mitad = Math.floor(num/2);
    let b = true;
    while(b && i <= mitad){
        if(num % i != 0 ) b = false;
        i++;
    }
    if(b) alert(num + " es primo");
    else alert(num + " no es primo");

}
// Verifica si la contraseña pasada por párametro es pasar. Si llega a tres saca una alerta.
function ej5(){
    let pass = "pasar";
    let txt;
    let num = 0;
    let b = true;
    do{
        txt = pedirString("Inserte la contraseña: ");
        switch(txt){
            case pass:
                alert("Acceso Concedido");
                b = false;
                break;
            default:
                num++;
                if(num == 3){
                     alert("Alerta, intruso");
                     b = false;
                } else alert("Acceso Denegado");   
        }

    } while(b);
    
}
// Suma todos los números que le escribas hasta que escribas un 0.
function ej6(){
    let count = 0;
    let num;
    do{
        num = pedirNumero("Inserte un número (0 para detenerse): ");
        if(!isNaN(num))count += num;
    } while(num != 0);

    alert("La suma es: "+ count);

}
// Determina el máximo y el mínimo de los numeros introducidos hasta que escribas un 0.
function ej7(){
    let minNum = Infinity, maxNum = 0;
    let num;
    do{
        num = pedirNumero("Inserte un número (0 para detenerse): ");
        if(num > maxNum && num != 0) maxNum = num;
        if(num < minNum && num != 0) minNum = num;
    } while(num != 0);

    alert("El máximo es: "+ maxNum + " el mínimo es: "+ minNum);
}
//Cuenta los númneros pares escritos hasta que escribes un impar.
function ej8(){
    let num;
    let count = 0;
    let b = true;
    do{
        num = pedirNumero("Inserte un número (impar para detenerse): ");
        b = num % 2 == 0;
        if(b) count++;
    } while(b);

    alert("Has escrito "+ count +  " números pares");
}
//Menu con opciones.
function ej9(){
    let menu = "1- Leer datos \n"
        + "2- Mostrar dadtos \n"
        + "3- Fin."
    let option = 0;
    do{    
        console.log(menu);
        option = pedirNumero("Inserte una opción: ")
        switch(option){
            case 1:
                console.log("Opción leer datos");
                break;
            case 2:
                console.log("Mostrar datos");
                break;
            case 3:
                console.log("Fin");
                break;
            default:
                console.log("Error");    
        }

    }while(option != 3);
}

function ej10(){


}
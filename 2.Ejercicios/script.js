//let x = 3, y = 10;
//let txtdescrip = document.getElementsByClassName("descripcion")[0].textContent
var x = null;
var y = null;
var age = null;
//const firstdescrip = document.getElementsByClassName("descripcion")[0].textContent;
const exercise = document.getElementById("exercise").textContent;
const exercise2 = document.getElementById("exercise").textContent;
function calcular(){

    x = document.getElementById("x").valueAsNumber;
    y = document.getElementById("y").valueAsNumber;
    actualizar("exercise", x, y);
}

function calcularprompt(){
    x = Number(window.prompt("Dame un valor para x", ""));
    y = Number(window.prompt("Dame un valor para y", ""));
    actualizar("exercise2", x, y); 
}

function actualizar(nombre, x, y){
    if (isNaN(x)) x = 3;
    if (isNaN(y)) y = 10;

    document.getElementById(nombre).innerHTML = exercise +  
    `<p>Los valores son x: ${x}  y: ${y}</p>
    <p>Suma: x + y = ${x+y}</p>
    <p>Resta: x - y = ${x-y} </p>
    <p>Multiplicación: x * y = ${x*y} </p>
    <p>División: x / y = ${x/y} </p>
    <p>Módulo: x % y = ${x%y} </p>`;

}

function mostrarmensaje(){
    var text, day;
    age = document.getElementById("edad").valueAsNumber;
    if(isNaN(age)) text= "no has introducido la edad";
    else if(age >= 18) text = "eres mayor de edad";
    else text = "no eres mayor de edad";
    
    addElementHTML('span', "respuesta", "label-edad", text);

    day = document.getElementById("day").valueAsNumber;
    var date = new Date();
    if(isNaN(day)) text= "no has introducido el día";
    else if(day ==  date.getDate()) text = "tienes razón estamos a día " + day;
    else text = "Te equivocaste, estamos a día "+ dategetDate();

    addElementHTML('span', "fecha", "label-day", text);

    division('label-z');
}

/*  */
function addElementHTML(elementHTML, nombreIdSpan, nombreIdExercise, text){
    var respuesta = document.getElementById(nombreIdSpan);
    if(!respuesta){
        newsp = document.createElement(elementHTML);
        newsp.setAttribute("id", nombreIdSpan);
        newsp.textContent = text;
        document.getElementById(nombreIdExercise).appendChild(newsp);
    }
    else respuesta.innerText = text;
}

/* Dividimos x entre y e insertamos en el elemento nombre. */
function division(nombre){

    x = document.getElementById("w").valueAsNumber;
    y = document.getElementById("z").valueAsNumber;

    if (isNaN(x)) x = 3;
    if (isNaN(y)) y = 10;
    if (y != 0) {
        var text = "La división de "+ x +" / "+ y+" es: " + x / y;
        addElementHTML('span', 'division', nombre, text);

    }   else {
        var text = "El z es igual a 0";
        addElementHTML('span', 'division',nombre, text);
    } // escribir el número es igual a cero. 
}


    // Calculamos IVA como el 21% del parámetro precioBase
    //iva *= precioBase;
    // Calculamos el precioFinal como la suma de precioBase más IVA
    //let precioFinal = precioBase + iva;
    // Retornamos o devolvemos el precioFinal calculado

function calcularPrecioFinal(precioBase, iva = 0.21){
    return (precioBase + precioBase * iva).toFixed(2);
}

function escribirIdEjercicio(idEjercicio,texto, valor, unidades){
    if(typeof(valor) == Number) valor = string(valor);
    document.getElementById(idEjercicio).innerText = texto + valor + unidades;
}

function ejercicios(){
    let arr1 = [0.21, 0.10, 0.4];
    let precio = 200, count = 1;
    let txt = "El precio calculado es: ", unidades= " €";

    for (let iva of arr1) {
        txt = "El valor precio es: "+ precio + " y el Iva es: "+ iva + "\n" + txt;
        escribirIdEjercicio("ejercicio-"+count, txt, calcularPrecioFinal(precio, iva), unidades);
        count++;
    }
}

function calcularDesglose(precioTotal, iva= 0.21){
    let precioBase = (precioTotal / (1 + iva)).toFixed(2);
    let precioIva = precioTotal - precioBase;
    return [precioBase, precioIva];
}
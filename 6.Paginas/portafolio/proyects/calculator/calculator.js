/*
function calcSum(x, y){
    return x + y;
}
function calcSub(x, y){
    return x - y;
}
function calcMult(x, y){
    return x * y;
}
function calcDiv(x, y){
    if (y != 0) return (x / y).toFixed(2);
    else return NaN;
}
function calcMod(x, y){
    return x % y;
}
function calcSqrt(x){
    return Math.sqrt(x);
}

function calcAll(x, y){
    return calcSum(x,y) + "\n " + calcSub(x,y) + "\n " +  calcMult(x, y) + "\n" + calcDiv(x,y) + "\n"
    + calcMod(x,y) + "\n";
    
}


function escribirResultado(resultado, nombre){
    document.getElementById(nombre).innerText = resultado;
}*/

function calcular(){
    let x, y, operation, res;
    x = document.getElementById("x").valueAsNumber;
    y = document.getElementById("y").valueAsNumber;
    operation = document.getElementById("operation").value;
    res = document.getElementById("resultado");
    //operation = document.getElementById("operation").options["selectedIndex"];git
    res.innerHTML = operation == "sum" ? x + y :
        operation == "sub" ? x - y :
        operation == "div" ? y != 0 ? (x / y).toFixed(6) : (alert("No se puede dividir por 0"), NaN) :
        operation == "mul" ? x * y :
        operation == "mod" ? x % y :
        operation == "pow" ? Math.pow(x, y) :
        operation == "sqrt" ? x > 0 ? Math.sqrt(x) : (alert("La raíz quadrada no acepta negativos"), NaN) :
        operation == "log" ? x > 0 ? Math.log(x) : (alert("El logaritmo no acepta negativos"), NaN) :
        ""
}

function selectOperation(){
    let y, operation;
    y = document.getElementById("y");
    operation = document.getElementById("operation").value;

    if(operation == "sqrt" || operation == "log"){
        y.setAttribute('disabled', '');
        y.value = '';
    }
    else y.removeAttribute('disabled');
}
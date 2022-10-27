var oper = '*'

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
}



function calcular(){
    let x, y, operation;
    let nombre = "resultado"; 
    x = document.getElementById("x").valueAsNumber;
    y = document.getElementById("y").valueAsNumber;
    operation = document.getElementById("operation").value;
    //operation = document.getElementById("operation").options["selectedIndex"];
    switch(operation){
        case "all": 
            escribirResultado(calcAll(x, y), nombre);           
            break;
        case "sum": 
            escribirResultado(calcSum(x,y), nombre);           
            break;
        case "sub":
            escribirResultado(calcSub(x,y), nombre);                             
            break;
        case "div": 
            escribirResultado(calcDiv(x,y), nombre);                            
            break;
        case "mul": 
        escribirResultado(calcMult(x,y), nombre);                                
            break;
        case "mod": 
        escribirResultado(calcMod(x,y), nombre);                                 
            break;
    }
}
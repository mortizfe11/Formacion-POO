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
    if (y != 0) return x / y;
    else return NaN;
}
function calcMod(x, y){
    return x % y;
}
function calcSqrt(x, y){
    return Math.sqrt(x);
}

function textCalcSum(x, y){
    return `<p>x + y = ${calcSum(x, y)}</p>`;
}
function textCalcSub(x, y){
    return `<p>x - y = ${calcSub(x, y)}</p>`;
}
function textCalcMult(x, y){
    return `<p>x * y = ${calcMult(x, y)}</p>`;
}
function textCalcMod(x, y){
    return `<p>x % y = ${calcMod(x, y)}</p>`;
}
function textCalcDiv(x, y){
    let temp = calcDiv(x, y);
    if(isNaN(temp)) return `<p>y = 0. No es posible dividir</p>`;
    else return `<p>x / y = ${temp}</p>`;
}
function textCalcSqrt(x, y){
    return `<p>x % y = ${calcMod(x, y)}</p>`;
}

function calcular(){
    let x, y, operation, element;
    let nombre = "resultado";
    let obj = {"all": "Todas", "sum": "Suma", "sub": "Resta", "mul": "Multiplicación", "div": "División", "mod": "Modal"} 
    x = document.getElementById("x").valueAsNumber;
    y = document.getElementById("y").valueAsNumber;
    operation = document.getElementById("operation").value;
    element = `<p>Los valores son x: ${x}  y: ${y}. La operación escogida es: ${obj[operation]}</p>`
    switch(operation){
        case "all": 
            element+= textCalcSum(x,y) + textCalcSub(x,y) + textCalcMult(x,y) + textCalcDiv(x,y) + textCalcMod(x, y);
            document.getElementById(nombre).innerHTML = element;      
            break;
        case "sum": 
            element+= textCalcSum(x,y);
            document.getElementById(nombre).innerHTML = element;             
            break;
        case "sub":
            element+= textCalcSub(x,y);
            document.getElementById(nombre).innerHTML = element;                            
            break;
        case "div": 
            element+= textCalcDiv(x,y);
            document.getElementById(nombre).innerHTML = element;                             
            break;
        case "mul": 
            element+= textCalcMult(x,y);
            document.getElementById(nombre).innerHTML = element;                             
            break;
        case "mod": 
            element+= textCalcMod(x,y);
            document.getElementById(nombre).innerHTML = element;                             
            break;
    }
}
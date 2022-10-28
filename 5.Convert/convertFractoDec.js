function convertir(){
    let numerador = document.getElementById("myInputA").valueAsNumber;
    let denominador = document.getElementById("myInputB").valueAsNumber;
    let decimal = document.getElementById("decimales").options.selectedIndex;
    let res = document.getElementById("resultados");
    if(denominador != 0) res.innerHTML = convertirDecimal(numerador, denominador, decimal);
}

function convertirDecimal(a, b, dec){
    return (a / b).toFixed(dec);
}

function convertirFrac(){
    let numA = document.getElementById("myInputA").valueAsNumber;
    if(numB != 0) res.innerHTML = convertirFrac(numA);

}

function convertirFrac(a){
    let num = 1 / a;
    return "1 / "+num;
}

function borrarCampos(){
    document.getElementById("myInputA").value = "";
    document.getElementById("myInputB").value = "";
    document.getElementById("resultados").innerText = "";
}
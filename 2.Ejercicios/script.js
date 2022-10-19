//let x = 3, y = 10;
//let txtdescrip = document.getElementsByClassName("descripcion")[0].textContent
var x = null;
var y = null;

function calcular(){

    x = document.getElementById("x").valueAsNumber;
    y = document.getElementById("y").valueAsNumber;
    if (isNaN(x)) x = 3;
    if (isNaN(y)) y = 10;
    let firstdescrip = document.getElementsByClassName("descripcion")[0];

    firstdescrip.innerHTML += 
    `<p>Los valores son x: ${x}  y: ${y}</p>
    <p>Suma: x + y = ${x+y}</p>
    <p>Resta: x - y = ${x-y} </p>
    <p>Multiplicación: x * y = ${x*y} </p>
    <p>División: x / y = ${x/y} </p>
    <p>Módulo: x % y = ${x%y} </p>`;
}
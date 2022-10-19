let x = 3, y = 10;
let txtdescrip = document.getElementsByClassName("descripcion")[0].textContent
document.getElementsByClassName("descripcion")[0].innerHTML = 
txtdescrip   + `<p>Los valores son x: ${x}  y: ${y}</p>
<p>Suma de x + y: ${x + y}</p>
<p>Resta de x - y: ${x-y} </p>
<p>Multiplicación de x * y: ${x*y} </p>
<p>División de x / y:  ${x/y} </p>
<p>Módulo de x % y:  ${x%y} </p>`
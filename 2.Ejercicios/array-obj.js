/* Script para resolver ejercicios de Array objeto */

// Corresponde al 2 de la lista 
function ej1(){
    let diasSemana = new Array(7);
    let el = document.getElementById("ej-1-resultados");
    diasSemana = ["lunes", "mArtes", "Miércoles", 
    "JueVes", "vierNes", "Sábado", "doMingo"];

    for(let i = 0; i < diasSemana.length; i++)
        diasSemana[i] = diasSemana[i].toUpperCase();
    

    el.innerText = `[${diasSemana}]`;
}
// A partir de un array, genera dos más uno con pares y otros con impares.
function ej2(){
    let el = document.getElementById("ej-2-resultados");
    let numbers = new Array(10);
    let imparesArr = [];
    let paresArr = [];
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Math.floor(Math.random()*100); //genera números aleatorios de 0, 1 x 100 (de 0 a 100)∫
        if( numbers[i] % 2 == 0 )aresArr.push(numbers[i]);
        else mparesArr.push(numbers[i]);
        
    }
    el.innerText = `Array: ${numbers}
                    Pares: ${paresArr}
                    Impares: ${imparesArr}`;
}
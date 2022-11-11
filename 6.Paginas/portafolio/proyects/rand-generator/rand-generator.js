generarRandInteger = (N, nMax = 53) => {
    if(N <= nMax){
        let set = new Set();
        while(set.size != N)
            set.add(Math.ceil(Math.random()*nMax));
        return Array.from(set);
    }else{
        return "El N es superior al nMax";
    }
}

generarRandFloat = (N, nMax = 53, decimals=2) => {
    let set = new Set();
    while(set.size != N)
        set.add(Number((Math.random()*nMax).toFixed(decimals)));
    return Array.from(set);
}

generarRandPeso = (N, nMax = 1) => {
    let arr = [];
    while(arr.length != N)
        arr.push(Math.ceil(Math.random()*nMax));
    return arr;
}

//Promediar Notas
promediarNotas = (arr, fixed = 2) => {
    //let count = 0;
    let count = arr.reduce((a, b) => a + b, 0);
    //arr.forEach(element => count+=element);
    return Number((count / arr.length).toFixed(fixed));
}
//Promediar Notas con weight
promediarNotasPesos = (arr, arrPesos, fixed = 2) => {
    let count = 0, weight = 0;
    if(arr.length == arrPesos.length){
/*
        let count = arr.reduce((prevVal, currVal, i) => {prevVal*arrPesos[] + currVal
            weight = arrPesos[i];
        }, 0);/*/
        arr.forEach((val, i) => {
            count+=val*arrPesos[i];
            weight+=arrPesos[i];
        });
        return Number((count / weight).toFixed(fixed));
    }else{
        return "El tamaño de los arrays no es el mismo";
    }
}
/*
promediarNotasPesos = (arr, arrPesos, fixed = 2) => {
    let count = 0, weight = 0;
    if(arr.length == arrPesos.length){
        arr.map((val, idx) => {
            count+=val*arrPesos[idx];
            weight+=arrPesos[idx];            
        });
        return (count / weight).toFixed(fixed);
    }else{
        return "El tamaño de los arrays no es el mismo";
    }
}*/
generarRand = (N, nMax = 53) => {
    if(N <= nMax){
        let set = new Set();
        while(set.size != N)
            set.add(Math.ceil(Math.random()*nMax));
        return Array.from(set);
    }else{
        return "El N es superior al nMax";
    }
}

promediarNotas = (arr, fixed = 2) => {
    let count = 0;
    arr.forEach(element => {
        count+=element;
    });
    return (count/ arr.length).toFixed(fixed);
}
promediarNotasPesos = (arr, arrPesos, fixed = 2) => {
    let count = 0, weight = 0;
    if(arr.length == arrPesos.length){
        for(let i = 0; i < arr.length; i++){
            count+=arr[i]*arrPesos[i];
            weight+=arrPesos[i];
        };
        return (count / weight).toFixed(fixed);
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
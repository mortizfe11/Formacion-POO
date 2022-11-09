const rand = (N, nPreguntas = 53) => {
    let set = new Set();
    while(set.size != N)
        set.add(Math.round(Math.random()*nPreguntas));
    return set;    
}
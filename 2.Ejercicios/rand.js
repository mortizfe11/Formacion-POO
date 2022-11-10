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

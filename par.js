function par(a) {
    if(a%2==0){
        return true
    }
     if(a%2!==0){
        return false
    }
    return par
}

console.log(par(9))


function getFact(num) {

    if (num > 1)
        return num * getFact(num - 1);
    else
        return 1;

}

function makeFact(getFact) {
    return getFact 
        
    
}


console.log(makeFact(getFact)(12) );
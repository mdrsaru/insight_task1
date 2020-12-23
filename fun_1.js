 //Implement the following functions.
// - multiply(2, 4)
// - multiply(2)(4)

//multiply(2,4)

const multiply=(a,b)=>{return a*b}

console.log(multiply(2,4));


function mul(x){
    return (y)=>{
        return x*y;
    }
}
console.log(mul(2)(4))
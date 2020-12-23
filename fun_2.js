// Implement Fibonacci(n) using a recursive function

function fibonacci(num) {
    if(num <= 1) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

let result=fibonacci(7);

console.log(result);
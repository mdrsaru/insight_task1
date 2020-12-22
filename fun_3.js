 //From above fibonacci(n) recursive function, for small value of n, there won’t be any issue as
// the value of n grows, the time complexity will increase exponentially. Create an optimized way
// for the above Fibonacci function

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  console.log( fib(77) );  //5527939700884757
const factorial = (n, accumulation = 1) => {
  if (n < 2) {
    return accumulation;
  }
  return factorial(n - 1, n * accumulation); 
}

console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));

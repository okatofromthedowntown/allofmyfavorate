const factorial = (n, accumulation = 1) => {
  if (n < 2) {
    return accumulation;
  }
  return factorial(n - 1, n * accumulation); 
};
const factorial_normal = n => {
  if (n < 2) {
    return 1;
  }
  return n * factorial_normal(n - 1)
};
console.log(factorial(8955)); // RangeError: Maximum call stack size exceeded
console.log(factorial_normal(8960)); // Infinity
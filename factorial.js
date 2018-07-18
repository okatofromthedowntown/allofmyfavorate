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
const factorial_loop = (n) => {
  let ret = 1;
  for(;n > 1;n--){
    ret *=n;
  }
  return ret;
}
console.log(factorial(8955)); // RangeError: Maximum call stack size exceeded
console.log(factorial_normal(8960)); // Infinity
console.log(factorial_loop(100000000)); // Infinity
const adder = () => {
  let sum = 0;
  return (d) => {
    sum += d;
    return sum;
  }
}

const f = adder();

for(let i=0; i<10; i++) {
  console.log(f(i));
}
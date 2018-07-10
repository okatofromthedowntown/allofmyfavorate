// if(cond) thn else els
// IF(cond)(thn)(els)
const IF = (cond) => (thn) => (els) => cond(thn)(els);
// TRUE
const tru = (thn) => (els) => thn;
// FALSE
const fls = (thn) => (els) => els;

console.log(IF(tru)(1)(0));
console.log(IF(fls)(1)(0));
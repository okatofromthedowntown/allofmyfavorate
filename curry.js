($ => d => {
  var n = new Date($);
  n.setDate(n.getDate() + d);
  console.log(`${n.getFullYear()}/${n.getMonth() + 1}/${n.getDate()}`);
})('2018-07-01')(-1355);
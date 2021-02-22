function printSum(value) {
  console.log('The sum is ' + value);
}

const sum = (x, callback) => {
  const m = x + x;
  callback(m);
}

console.log(sum(2, printSum));
function printSum(value) {
  console.log('The sum is ' + value);
}

const sum = (x, callback) => {
  const m = x + x;
  callback(m);
}

console.log(sum(2, printSum));

//  For the alternate solution, comment out the current code and uncomment the remaining piece of code

// function printSum(x, callback) {
//   const sum = x + x;
//   return callback(sum);
// }

// const printNum = sum => 'The sum is ' + sum;

// console.log(printSum(2, printNum));
// Reduce Array Method --> perform some operations on array and reduce it to a single value. It return single value

const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((accumulator, currentValue) => {  // accumulator = previous value = initial value
  return accumulator + currentValue;
}, 0); // 0 is initial value
console.log(sum); // 15

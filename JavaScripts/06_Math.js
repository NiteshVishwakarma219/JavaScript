//Math in javascript

/*
The Math object is a built-in object that has properties and methods for mathematical constants and functions.
It is not a constructor, so you cannot create instances of it.

Commonly used Math methods:

1. Math.abs(x) - Returns the absolute value of x
2. Math.ceil(x) - Rounds x up to the nearest integer
3. Math.floor(x) - Rounds x down to the nearest integer
4. Math.round(x) - Rounds x to the nearest integer
5. Math.max(...values) - Returns the largest of the given numbers
6. Math.min(...values) - Returns the smallest of the given numbers
7. Math.random() - Returns a random number between 0 and 1
8. Math.sqrt(x) - Returns the square root of x
9. Math.pow(base, exponent) - Returns base raised to the power of exponent

*/

// Math.random()
console.log(Math.random());  // 0-1 value with floating point precision

console.log(Math.random() * 10); // 0-10 value with floating point precision

console.log(Math.floor(Math.random() * 10) + 1); // 1-10 value without floating point precision


let start = 10;
let end = 50;
console.log(Math.floor(Math.random() * (end - start + 1)) + start);

// Sequence of characters used to represent text.

// Using triple quotes (not supported in JavaScript)

// Using Single Quote
let s1 = 'abcd';
console.log(s1);

// Using Double Quote
let s2 = "abcd";
console.log(s2);

// backtick (also used for multiple line string)
let s3 = `abcd`;
console.log(s3);

console.log(typeof s1); // string
console.log(typeof s2); // string
console.log(typeof s3); // string


/* ******************************************************************************************************************** */
// String Length
console.log(s1.length); // 4
console.log(s2.length); // 4
console.log(s3.length); // 4


/* ******************************************************************************************************************** */
// Template Literals (Backticks -> ` `)

// String Interpolation  ( to create string by doing substitution of placeholders)
let name = "John";
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
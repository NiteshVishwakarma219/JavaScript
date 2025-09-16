// Operators

// 1. Arithmetic Operators
let a = 5;
let b = 10;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus

// 2. Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log(c);

// 3. Comparison Operators
console.log(a == b); // Equal to
console.log(a != b); // Not equal to
console.log(a > b); // Greater than
console.log(a < b); // Less than

// 4. Logical Operators
console.log(true && false); // Logical AND
console.log(true || false); // Logical OR
console.log(!true); // Logical NOT

// 5. Bitwise Operators
console.log(a & b); // Bitwise AND
console.log(a | b); // Bitwise OR
console.log(a ^ b); // Bitwise XOR
console.log(~a); // Bitwise NOT
console.log(a << 1); // Left shift
console.log(a >> 1); // Right shift

// 6. Ternary Operator
console.log(a < b ? "a is less than b" : "a is not less than b");

// 7. Unary Operators
console.log(+a); // Unary plus
console.log(-b); // Unary negation
console.log(++a); // Pre-increment
console.log(--b); // Pre-decrement

// 7. Comma Operator
let d = (a + b, a - b);
console.log(d); // -5

// 8. BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);
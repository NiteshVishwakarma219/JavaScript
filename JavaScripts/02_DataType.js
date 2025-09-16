                    //Primitive Data Types
//Numeric Data Types
let num1 = 5;          // Integer
let num2 = 10.5;       // Float

// Non-numeric Data Types
// let str = "Hello";     // String
// let str = 'Hello';     // String
// let str =  `Hello`;    // String

let isTrue = false;    // Boolean
let age = null;        // Null
let a;                 // Undefined

let sym = Symbol('id'); // Symbol
let sym2 = Symbol('id'); // Symbol
console.log(sym === sym2) // false


                     // Non - Primitive Data Types
let obj = {
    name: "John",    // object
    age: 30
};

let arr = [1, 2, 3, 4, 5]; // Array

function myFunction() {   // Function
    console.log("Hello");
}

let currentDate = new Date(); // Date


// Type of variable
console.log(typeof num1);        // number
console.log(typeof str);         // string
console.log(typeof isTrue);     // boolean
console.log(typeof age);        // object
console.log(typeof a);          // undefined
console.log(typeof sym);       // symbol
console.log(typeof obj);       // object
console.log(typeof arr);      // object
console.log(typeof myFunction); // function
console.log(typeof currentDate); // object

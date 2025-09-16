// Variables in JavaScript can be declared using var, let, or const. JavaScript is dynamically typed, so variable types are determined at runtime without explicit type definitions.

     // ; use or not

var a = 10     // Old style
let b = 20;    // Preferred for non-const
const c = 30;  // Preferred for const (cannot be changed)

console.log(a);
console.log(b);
console.log(c);

console.table([a, b, c]);
      // or
console.table({a, b, c});

// cannot use var because of issue in block and functional scope
//  var is function scoped: Can be accessed outside block if within the function.
if (true) {
  var x = 10; 
}
console.log(x);


// let and const are block scoped : Cannot be accessed outside block even if inside the same function
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y, z); // ReferenceError


// var can be redeclared in the same scope, but let and const cannot be
var x = 10;
var x = 20; // Allowed

//let y = 30;
//let y = 40; // SyntaxError

//const z = 50;
//const z = 60; // SyntaxError
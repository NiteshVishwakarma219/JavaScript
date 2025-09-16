// Functions -> Block of code designed to perform a particular or specific task

function greet() {  // function declaration
    console.log('Hello, World!');
    console.log('This is a simple function.');
}
greet(); // function call

/* ############################################################################################### */

// Function expressions -> similar to function declarations without function name
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 10)); // 15

// Function hoisting -> function declarations are hoisted, function expressions are not
function add(a, b) {
    return a + b;
};
console.log(add(5, 10)); // 15

       // or

console.log(add(5, 10)); // 15   can also call before function declaration
function add(a, b) {
    return a + b;
};

/* ############################################################################################### */

// Arrow functions
var mul = (a, b) => (a * b); // if not inside {} then not need to use return
        // or
var mul = function(a, b) {   // if inside {} then need to use return
    return a * b;
};

console.log(mul(5, 10)); // 50


/* ############################################################################################### */

// IIFE (Immediately Invoked Function Expression) --> used to Avoiding Global Scope Pollution
(function() {
    console.log('This is an IIFE');
})();  // not need to call automatically run
  
           // or
(() => {
    console.log('This is an IIFE');
})()  // not need to call automatically run

/* ################################################################################################ */

// Function parameters and arguments
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 10)); // 15
console.log(sum(5)); // NaN

// Default parameters
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // 5

// Rest parameters
function total(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(total(1, 2, 3, 4, 5)); // 15

/* ############################################################################################### */

// Callback functions
function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 1000);
}
fetchData((data) => {
    console.log(data); // { id: 1, name: 'John' }
});

// // Promises
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'John' };
//             resolve(data);
//         }, 1000);
//     });
// }
// fetchData().then((data) => {
//     console.log(data); // { id: 1, name: 'John' }
// });

// // Async/Await
// async function getData() {
//     const data = await fetchData();
//     console.log(data);
// }
// getData();
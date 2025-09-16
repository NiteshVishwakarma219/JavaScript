/*

Sync -->  Synchronous programming is a method of programming where tasks are performed one after another. In this model, each task must complete before the next one begins, which can lead to blocking operations. This means that if a task takes a long time to complete, it can freeze the entire program, making it unresponsive. Synchronous programming is simpler to understand and debug but can be inefficient for I/O-bound tasks.

Async -->  Asynchronous programming is a method of programming that allows for non-blocking operations, enabling a program to continue executing while waiting for tasks to complete. This is particularly useful in scenarios like web development, where you might need to wait for a server response without freezing the user interface.

Sync vs Async -- In summary, synchronous programming is simpler but can lead to unresponsiveness, while asynchronous programming is more complex but allows for better performance in I/O-bound tasks.

*/

// Sync example
function fetchDataSync() {
  console.log("Hello");
}

// Async example
// 1. Using setTimeout
setTimeout(() => {
  console.log("Hello");
}, 1000);   // 1000 = 1 second
console.log("I am after Hello");  // This will be logged immediately then after 1 second "Hello" will be logged

// 2. Using setInterval
const intervalId = setInterval(() => {
  console.log("Hello"); // This will be print hello every 1 second
}, 1000);   // 1000 = 1 second
         // or
// to stop the interval, you can use clearInterval
clearInterval(intervalId);
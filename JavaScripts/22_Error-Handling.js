/*

Error Handling--> you can handle errors using try/catch blocks. This makes it easier to read and maintain error handling logic.

*/

let a = 10;
let b = 0;

try {
  let c = a / b;
  if (!isFinite(c)) {
    throw new Error("Division by zero error");
  }
  console.log(c);
} catch (error) {
  console.error(error.message);
}

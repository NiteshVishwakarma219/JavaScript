/*

Promises --> Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. Promises have three states: pending, fulfilled, and rejected.
It is an Object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

*/

// Promise Example
// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  console.log("Promise is created");
  const success = false; // Simulating success or failure
  if (success) { // true
    resolve("Promise fulfilled!");
  } else {  // false
    reject("Promise rejected!");
  }
});

// Handling the Promise
myPromise.then((result) => {  // result(resolve) = "Promise fulfilled!"  -- then-> resolve
  console.log(result);
}).catch((error) => {
  console.error(error);  // error(reject) = "Promise rejected!"  -- catch-> reject
});


// 2. Using Promise with setTimeout to simulate an async operation
const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve("Async operation completed successfully!");
      } else {
        reject("Async operation failed!");
      }
    }, 2000);
  });
};

// Handling the async operation
asyncOperation().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});


// 3. Finally block
asyncOperation().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
}).finally(() => {
  console.log("Async operation completed.");  // This will run regardless of success or failure
});
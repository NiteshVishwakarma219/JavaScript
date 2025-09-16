/*
Async/Await --> Async/Await is a syntactic sugar built on top of Promises, making it easier to work with asynchronous code. It allows you to write asynchronous code that looks synchronous, improving readability and maintainability.
Uses with promises always

*/

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

const asyncFunction = async () => {
  try {
    const result = await asyncOperation();  // await - pauses execution until the promise is resolved
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

asyncFunction();

/*

API (Application Programming Interface) --> An API is simply a medium to fetch or send data between interfaces.
API is a set of rules and protocols for building and interacting with software applications. It defines the methods and data formats that applications can use to communicate with each other. APIs are used to enable the integration of different systems and allow them to work together.

The V8 engine --> V8 engine is an open-source JavaScript engine developed by Google. It is written in C++ and is used in Google Chrome and Node.js. V8 compiles JavaScript code to native machine code, which makes it faster and more efficient. It also includes a garbage collector to manage memory automatically.

In summary, APIs allow different software systems to communicate, while the V8 engine is a high-performance JavaScript engine that executes code efficiently.

*/

// API Example -- Fetching user data

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error fetching user data:", error));


  // 2. Fetching posts data
  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching posts data:", error);
    }
  };

  fetchPosts();

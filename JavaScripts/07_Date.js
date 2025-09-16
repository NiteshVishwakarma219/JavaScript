// Date operations
let currentDate = new Date();
console.log(currentDate); // bydefault toISOString "2023-01-01T00:00:00.000Z"

//typeof
console.log(typeof currentDate); // object

//Format to print Date
console.log(currentDate.toDateString()); // e.g. "Mon Jan 01 2023"
console.log(currentDate.toISOString()); // e.g. "2023-01-01T00:00:00.000Z"
console.log(currentDate.toLocaleDateString()); // e.g. "1/1/2023" based on locale
console.log(currentDate.toString()); // e.g. "Mon Jan 01 2023 00:00:00 GMT+0000 (Coordinated Universal Time)"

// Get current date components
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let date = currentDate.getDate();

console.log(currentDate.getFullYear()); // 2025
console.log(currentDate.getMonth()); // 7
console.log(currentDate.getDate()); // 30

console.log(year, month, date); // 2025 7 30

let specificDate = new Date('2023-01-01');
console.log(specificDate);   // bydefault toISOString "2023-01-01T00:00:00.000Z"

currentDate.setFullYear(2025);
console.log(currentDate); //2025-08-30T04:37:56.768Z
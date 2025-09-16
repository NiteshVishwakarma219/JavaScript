// Arrays
let fruits = ['apple', 'banana', 'orange'];
let arr = ["apple", "banana", "orange"];
let num_arr = [10,20,30,40,50]
console.log(arr); // ['apple', 'banana', 'orange']
console.log(num_arr); // [10, 20, 30, 40, 50]
console.log(fruits); // ['apple', 'banana', 'orange']

// Accessing elements
console.log(fruits[0]); // 'apple'
console.log(fruits[1]); // 'banana'
console.log(fruits[2]); // 'orange'

// Modifying elements
fruits[1] = 'mango';
console.log(fruits); // ['apple', 'mango', 'orange']

/* **************************************************************************************** */
// Array methods

// Adding elements
// Push() - > adds an element to the end of the array
fruits.push('grape');
console.log(fruits); // ['apple', 'mango', 'orange', 'grape']


// Unshift() - adds an element to the beginning of the array
fruits.unshift('kiwi');
console.log(fruits); // ['kiwi', 'apple', 'mango', 'orange', 'grape']


// Removing elements
// Pop() - removes the last element from the array
fruits.pop();
console.log(fruits); // ['kiwi', 'apple', 'mango', 'orange']

// Shift() - removes the first element from the array
fruits.shift();
console.log(fruits); // ['apple', 'mango', 'orange']

// Splice() - removes elements from the array
fruits.splice(1, 2); // removes 2 elements starting from index 1
console.log(fruits); // ['apple', 'orange']

// Slice() - returns a shallow copy of a portion of an array
let citrus = fruits.slice(1);
console.log(citrus); // ['orange']

//toString() - converts the array to a string
console.log(fruits.toString()); // 'apple,orange'

// join() - joins all elements of an array into a string
console.log(fruits.join(' - ')); // 'apple - orange'

// reverse() - reverses the elements of an array
fruits.reverse();
console.log(fruits); // ['orange', 'apple']

// sort() - sorts the elements of an array
fruits.sort();
console.log(fruits); // ['apple', 'orange']

// length - returns the number of elements in an array
console.log(fruits.length); // 2

// concat() - merges two or more arrays
let berries = ['strawberry', 'blueberry'];
let allFruits = fruits.concat(berries);
console.log(allFruits); // ['apple', 'orange', 'strawberry', 'blueberry']

// indexOf() - returns the first index of a specified element
let index = allFruits.indexOf('orange');
console.log(index); // 1

// includes() - determines whether an array includes a certain value
let includes = allFruits.includes('banana');
console.log(includes); // false

// join() - joins all elements of an array into a string
console.log(allFruits.join(' - ')); // 'apple - orange - strawberry - blueberry'

// isArray() - determines whether a value is an array
let isArray = Array.isArray(allFruits);
console.log(isArray); // true

// from() - creates a new array from an array-like or iterable object
let newArray = Array.from('hello');
console.log(newArray); // ['h', 'e', 'l', 'l', 'o']
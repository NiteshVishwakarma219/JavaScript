// String Methods
// Built-in function to manipulate strings

// 1. charAt() - Returns the character at a specified index
let str = "Hello";
console.log(str.charAt(0)); // H

// 2. concat() - Combines two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(" ", str2)); // Hello World

// 3. includes() - Checks if a string contains a specified substring
let sentence = "The quick brown fox";
console.log(sentence.includes("quick")); // true

// 4. indexOf() - Returns the index of the first occurrence of a specified value
console.log(sentence.indexOf("o")); // 12

// 5. lastIndexOf() - Returns the index of the last occurrence of a specified value
console.log(sentence.lastIndexOf("o")); // 17

// 6. slice() - Extracts a section of a string and returns it as a new string
console.log(sentence.slice(4, 19)); // quick brown

// 7. split() - Splits a string into an array of substrings
let csv = "apple,banana,cherry";
console.log(csv.split(",")); // [ 'apple', 'banana', 'cherry' ]

// 8. toLowerCase() - Converts a string to lowercase
console.log(str.toLowerCase()); // hello

// 9. toUpperCase() - Converts a string to uppercase
console.log(str.toUpperCase()); // HELLO

// 10. trim() - Removes whitespace from both ends of a string
let padded = "   Hello   ";
console.log(padded.trim()); // Hello

// 11. valueOf() - Returns the primitive value of a string object
console.log(str.valueOf()); // Hello

// 12. toString() - Returns a string representing the specified object
console.log(str.toString()); // Hello

// 13. anchor() - Creates a hyperlink
console.log(str.anchor("example")); // <a name="example">Hello</a>

// 14. replace() - Replaces a specified value with another value in a string
console.log(str.replace("Hello", "Hi")); // Hi

// 15. replaceAll() - Replaces all occurrences of a specified value with another value in a string
console.log(str.replaceAll("l", "x")); // Hexxo

// 16. substring() - Returns a portion of the string between two specified indices
console.log(str.substring(1, 4)); // ell
// A Map is a data structure that stores key-value pairs, where each key is unique. Maps are iterable, and they maintain the insertion order of the keys.

// Creating a new Map -1 Method --> Passing Array to new map
let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
]);
console.log(anotherMap);


// Creating a Map using map.set() - 2nd Method
let anotherMap2 = new Map();

// Adding key-value pairs
anotherMap2.set('name', 'Alice');
anotherMap2.set('age', 30);
anotherMap2.set('city', 'New York');

// Accessing values -- using get()
console.log(anotherMap2.get('name')); // Output: Alice
console.log(anotherMap2.get('age')); // Output: 30

// Checking for a key -- using has()
console.log(anotherMap2.has('city')); // Output: true

// Deleting a key-value pair -- using delete()
anotherMap2.delete('age');
console.log(anotherMap2.has('age')); // Output: false

// Checking the size of the Map -- using size
console.log(anotherMap2.size); // Output: 2

// Clearing the Map -- using clear()
anotherMap2.clear();
console.log(anotherMap2); // Output: Map(0) {}

// Iterating over a Map
for (const [key, value] of anotherMap2) {
  console.log(`${key}: ${value}`);
}

                 // Output:
                 // name: Alice
                 // city: New York
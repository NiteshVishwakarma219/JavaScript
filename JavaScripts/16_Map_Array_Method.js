/*

Map Method
The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
It does not modify the original array.

*/

const arr = [1, 2, 3, 4, 5];
const doubled = arr.map((num) => num * 2);
            // or
const doubled1 = arr.map((num) => {
    return num * 2;
})
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(doubled1); // [2, 4, 6, 8, 10]
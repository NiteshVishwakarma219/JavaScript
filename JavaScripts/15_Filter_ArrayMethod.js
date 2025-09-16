/* Filter Method-->

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
It does not modify the original array.

*/

const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter((num) => (num > 2));
            // or
const filtered2 = arr.filter((num) => {
  return num > 2;
});
console.log(filtered); // [3, 4, 5]
console.log(filtered2); // [3, 4, 5]
/* ForEach loop in Array --> It does not return a new array and does not modify the original array. It's commonly used for iteration and performing actions on each array element.

 array.forEach(callback(element, index, arr), thisValue);

 No Break or Continue: Unlike for loops, you cannot break the forEach() loop or use continue to skip to the next iteration. It will always iterate over all elements.
 
No Return Value: The forEach() loop does not return a new array, it returns undefined.

 */


const arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
  console.log(num); // 1 2 3 4 5
});


const arr1 = [1, 2, 3, 4, 5];
arr1.forEach((num, index) => {
  console.log(num , index); // value as well as index
});


const arr2 = [1, 2, 3, 4, 5];
arr2.forEach((num, index , arr) => {
  console.log(num , index , arr); // value , index , original array
});

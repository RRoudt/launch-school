/* Solution to exercise 5 of Arrays chapter

Challenge: 
- Write a findIntegers function that takes an array as argument and returns an array that contains only the integers from the input array. 
- Use the filter method in your function. */

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter(element => Number.isInteger(element));
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
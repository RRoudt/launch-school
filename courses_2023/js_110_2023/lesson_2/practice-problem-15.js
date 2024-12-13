/* eslint-disable max-len */
/* Practice Problem 15

Instructions:
Given the following data structure, write some code to return an array which contains only the objects where all the numbers are even.

Input:
- Array with nested objects that contain arrays

Output:
- Array that only contains the objects where ALL numbers are even

Rules:
- Return a new array
- Only copy objects where all numers are even

Data:
- Array with objects with arrays as input
- Array with objects with arrays as output

Algorithm:
- Get an array
- Iterate through the array, keeping only the objects of which all values are even
  - Iterate through the object values at every array element
    - Iterate through the object value subarrays at every property
      - Check whether every element is even
        - If so, keep the element
*/

function evenObjArr(arr) {
  return arr.filter(obj => {
    return Object.values(obj).every(subArr => {
      return subArr.every(num => num % 2 === 0);
    });
  });
}

// Test case
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

console.log(evenObjArr(arr));
// Expected output:
// [ { e: [ 8 ], f: [ 6, 10 ] } ]
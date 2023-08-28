/* Practice Problem 11

Instructions:
Given the following data structure, use the map method to return a new array identical in structure to the original but, with each number incremented by 1. Do not modify the original data structure.

Input:
- Array with nested plain objects

Output:
- New array with same properties, but every value incremented by 1

Rules:
- Must use the map method to return a new array
- Return new nested objects (do not mutate original data structure)
- Ever value must be incremented by one

Data:
- Array with nested objects as input
- New array with new nested  objects

Algorithm:
- Get an array with nested objects
- Iterate over the array with nested objects
  - Iterate over the nested objects
    - Return new nested object where each value is incremented by one
- Return new array with new nested objects
*/

function incrementByOne(arr) {
  return arr.map(obj => {
    let incrementedObj = {};

    for (let key in obj) {
      incrementedObj[key] = obj[key] + 1;
    }

    return incrementedObj;
  });
}

// Test case
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let incrementedArr = incrementByOne(arr);

console.log(incrementedArr);
// Expected output:
// [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }]

console.log(arr);
// Expected output:
// [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]
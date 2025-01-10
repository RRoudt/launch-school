/* JS110 - Lesson 2.5: Practice Problem 11

Instructions:
- Use the map method to return a new array identical in structure to the original but, with each number incremented by 1.
- Do not modify the original data structure.

Input:
- Array with object elements

Output:
- Array with object elements, but each value of the objects is incremented by 1

Rules:
- Do not modify the array or the objects it contains

Data:
- Array (input)
- Objects (array elements)
- Numbers (object values)
- Array with new objects (output)

Algorithm:
Get an array and iterate over it, creating a new array:
  Iterate over each object, creating a new object:
    Increment each value by 1
  End iterating over object and return new objects
End iterating over array and return new array
*/

function getIncrementedArr(arr) {
  return arr.map(obj => {
    let incrementedObjEntries = Object.entries(obj).map(keyValue => {
      keyValue[1] += 1;
      return keyValue;
    });

    return Object.fromEntries(incrementedObjEntries);
  });
}

// Test case
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
console.log(getIncrementedArr(arr));
// [{ a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 }]

console.log(arr);
// [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }]
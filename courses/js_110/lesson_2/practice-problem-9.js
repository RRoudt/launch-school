/* JS110 - Lesson 2.5: Practice Problem 9

Instructions: 
- Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in ascending order.

Input:
- Array

Output:
- Sorted array

Questions:
Q: Should also new nested arrays be returned?
  A: Let's assume, yes

Rules:
- Return a new array, with the same structure
  - Structure = two-dimensional array
- Order the elements in ascending order
  - a before b
  - 1 before 2

Data:
- Array (input)
- Strings (array elements)
- Numbers (array elements)
- Array (output)

Algorithm:
Get an array
Iterate over the array, creating a new array:
  Iterate over each subarray:
    Create new array
    If first element of subArray is a string:
      Sort new array in default way
    Else:
      Sort new array in numerical way
    Endif
    Return the new sorted array
  End iterating over subarrays
End iterating over the array, and return the new array
*/

function sortArray(arr) {
  return arr.map(subArr => {
    if (typeof subArr[0] === 'string') {
      return subArr.slice().sort();
    } else {
      return subArr.slice().sort((a, b) => a - b);
    }
  })
}

// Test case
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = sortArray(arr);

console.log(sortedArr);
// [['a', 'b', 'c'], [-3, 2, 11,], ['black', 'blue', 'green']];
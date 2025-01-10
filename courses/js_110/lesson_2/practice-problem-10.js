/* JS110 - Lesson 2.5: Practice Problem 10

Instructions: 
- Given the following data structure, return a new array with the same structure, but with the values in each subarray ordered -- alphabetically or numerically as appropriate -- in descending order.

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
- Order the elements in descending order
  - b before a

Data:
- Array (input)
- Strings (array elements)
- Numbers (array elements)
- Array (output)

Algorithm:
Get an array
Iterate over the array, creating a new array:
  Iterate over each subarray:
    Create new array and sort it:
      If a > b:
        Put b before a (return -1)
      If a < b:
        Put a before b (return 1)
      Default:
        Leave a and b as-is (return 0)
      Endif
    Return the new sorted array
  End iterating over subarrays
End iterating over the array, and return the new array
*/

function sortArray(arr) {
  return arr.map(subArr => {
    return subArr.slice().sort((a, b) => {
      if (a > b) return -1;
      if (b < a) return 1;
      return 0;
    });
  });
}

// Test case
let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = sortArray(arr);

console.log(sortedArr);
// [['a', 'b', 'c'], [-3, 2, 11,], ['black', 'blue', 'green']];
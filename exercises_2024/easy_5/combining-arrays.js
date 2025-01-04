/* Easy 5.2: Combining Arrays

Instructions:
- Write a function that takes two arrays as arguments and returns an array containing the union of the values from the two.
- There should be no duplication of values in the returned array, even if there are duplicates in the original arrays.
- You may assume that both arguments will always be arrays.

Input:
- Two arrays

Output:
- One new, deduplicated arrays

Rules:
- Must accept two input arrays
- Return a new array
- The returned array should contain no duplicate values

Questions:
Q: Will there always only be 2 input arrays?
  A: From the test case, it seems to be yes
Q: In what order do the arrays need to be combined? Interleaved or one after the other?
  A: First array one, then array two; only unique values are added

Data:
- Array (input)
- Number (array elements)
- Array (output)

Algorithm:
Get input arrays: arrays
Set new array: outputArray
Iterate over arrays:
  Iterate over each subArray:
    If current element is not in outputArray:
      Add current element to outputArray
    Endif
  Enditerate
Enditerate
Return outputArray
*/

function union(...arrays) {
  let outputArray = [];

  arrays.forEach(subArray => {
    subArray.forEach(element => {
      if (!outputArray.includes(element)) {
        outputArray.push(element);
      }
    });
  });

  return outputArray;
}

// Test cases
console.log(union([1, 3, 5], [3, 6, 9]));               // [1, 3, 5, 6, 9]
console.log(union([1, 2, 3], [4, 5, 6], [5, 6, 1]));    // [1, 2, 3, 4, 5, 6]
console.log(union([1, 2, 3], [1, 2, 3]));               // [1, 2, 3]
console.log(union([1, 2, 3], [1, 2, 3], [1, 2, 3]));    // [1, 2, 3]
console.log(union([3, 2, 1], [1, 2, 3]));               // [3, 2, 1]
console.log(union([1], [2], [3], [4], [5], [6]));       // [1, 2, 3, 4, 5, 6]
console.log(union([0, 0, 0], [0, 0, 0]));               // [0]
console.log(union([0, 0, 0]));                          // [0]
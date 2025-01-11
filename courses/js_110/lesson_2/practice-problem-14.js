/* JS110 - Lesson 2.5: Practice Problem 14

Instructions:
- Use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

Input:
- A nested array with integers in the subarrays

Output:
- A new nested array (structured like the input array), but only containing integers that are multiples of 3

Questions:
Q: How many levels is the array?
  A: It's a two-dimensionals array
Q: Are nested arrays of equal length?
  A: No, they can contain 1 or multiple elements
Q: Can input arrays or subarrays be empty?
  A: No, from the test cases this doesn't seem to be
Q: Can output arrays or subarrays be empty?
  A: Yes, let's assume that for now
     (looking at test case later, this was correct)

Rules:
- The input array is two-dimensional (has nested arrays, one level deep)
- Nested arrays are of varying length
- Arrays or nested arrays are never empty
- Return a new array
- Structure the new array like the input array
- Only include multiples of 3 from the input array in the new array

Data:
- Array (nested, input)
- Arrays (array elements)
- Numbers (subarray elements)
- Array (nested, output)

Algorithm:
Get a nested array as input
Iterate over the outer array:
  Iterate over the inner arrays:
    If current number % 3 equals 0:
      Add current number to new subarray
    Endif
  End iterating over the inner arrays and return the new subarray
End iterating over the outer array and return the new nested array
*/

function getMultiplesOfThree(arr) {
  return arr.map(subArr => {
    return subArr.filter(num => num % 3 === 0);
  });
}

// Test case
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let filteredArr = getMultiplesOfThree(arr);

console.log(arr);           // [ [ 2 ], [ 3, 5, 7 ], [ 9 ], [ 11, 15, 18 ] ]
console.log(filteredArr);   // [ [], [ 3 ], [ 9 ], [ 15, 18 ] ]
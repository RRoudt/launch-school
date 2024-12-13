/* Practice Problem 12

Instructions:
Given the following data structure, use a combination of methods, including filter, to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

Input:
- Array with subarrays

Output:
- New array, identical in structure, but with filtered results

Rules:
- Must use the filter method
- Return a new array that's identical in structure (meaning two levels)
- Only keep the elements that are multiples of 3 (element % 3 === 0)

Data:
- Nested array (two levels) as input
- New nested array (two levels) as output
- Numbers as elements

Algorithm:
- Get array with subarrays
- Iterate over the array
  - Iterate over each subarray, only keeping the values that are multiples of 3 (element % 3 === 0)
- Return the new filtered array with subarrays
*/

// Test case
let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
let multiplesOfThreeArr = arr.map(subarray => {
  return subarray.filter(element => element % 3 === 0);
});

console.log(multiplesOfThreeArr);
// Expected output:
// [[], [ 3 ], [ 9 ], [ 15, 18 ]]

console.log(arr);
// Expected output:
// [[2], [3, 5, 7], [9], [11, 15, 18]]
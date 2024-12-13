/* Practice Problem 13

Instructions:
Given the following data structure, sort the array so that the sub-arrays are ordered based on the sum of the odd numbers that they contain.

Input:
- Array with nested arrays

Output:
- Sorted array

Rules:
- Sort subarrays based on the sum of their odd numbers
- The original array must be mutated

Data:
- Array with subarrays
- Sorted array with subarray (mutation)

Algorithm:
- Get array with subarrays
- Iterate over the array and sort the subarrays
  - Create empty variable: oddTotalA
  - Create empty variable: oddTotalB
  - Iterate over the subarray a
    - If current value is odd, add the value to oddTotalA
  - Iterate over the subarray b
      - If current value is odd, add the value to oddTotalB
  - Return oddTotalA - oddTotalB
*/

function sortByOddNum(arr) {
  return arr.sort((subArrA, subArrB) => {
    let oddTotalA = 0;
    let oddTotalB = 0;

    subArrA.forEach(num => {
      if (num % 2 === 1) {
        oddTotalA += num;
      }
    });

    subArrB.forEach(num => {
      if (num % 2 === 1) {
        oddTotalB += num;
      }
    });

    return oddTotalA - oddTotalB;
  });
}

// Test case
let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
sortByOddNum(arr);
console.log(arr);
// Expected output:
// [[ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ]]
/* Easy 4.5: Running Totals

Instructions:
Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Input:
- Array of numbers

Output:
- New array of numbers, where every element's value is the running total from the original array

Rules:
- The new array should have the current element replaced by the addition of the current element (in the source array) with the previous element (in the source array)

Data:
- Array as input
- Array as output

Algorithm:
- Create a runningTotalNum variable to keep track of the sum
- Iterate over the source array and create a new array
- For every new element, add the current element's value to the runningTotalNum, and store this value in the new array
*/

function runningTotal(arr) {
  let runningTotalNum = 0;
  let runningTotalArr = arr.map(currentNum => {
    return runningTotalNum = runningTotalNum + currentNum;
  });
  return runningTotalArr;
}

// Test cases
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
/* Easy 4.5: Running Totals

Instructions:
- Write a function that takes an array of numbers and returns an array with the same number of elements, but with each element's value being the running total from the original array.

Input:
- An array

Output:
- An array

Rules:
- In the returning array, each element must be the sum of all preceding elements plus the current element

Data:
- Array (input)
- Numbers (individual elements)
- Array (output)

Algorithm:
Get an array with numbers: inputArr
Set outputArr: []
Set sum: 0
Iterate over the inputArr:
  Add the value of the current element to sum
  Push the value of sum to outputArr
Enditeration
Return outputArr
*/

function runningTotal(inputArr) {
  let outputArr = [];
  let sum = 0;

  for (let num of inputArr) {
    sum += num;
    outputArr.push(sum);
  }

  return outputArr;
}

// Test cases
console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
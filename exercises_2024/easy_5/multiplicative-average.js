/* Easy 5.6: Multiplicative Average

Instructions:
- Write a function that takes an array of integers as input,
- multiplies all of the integers together,
- divides the result by the number of entries in the array, and
- returns the result as a string with the value rounded to three decimal places.

Input:
- An array with integers

Output:
- A number as a string value, rounded to three decimal places, and the result of:
  - All integers from the input array multiplied
  - Multiplied number divided by number of array elements

Rules:
- Output must be a string, rounded to three decimal places
- Elements must be multiplied by each other
- Sum of elements needs to be divided by number of array elements

Data:
- Array (input)
- Numbers (elements, processing)
- Number shown as string (output)

Algorithm:
Get an array: inputArray
Set multipliedSum:
  All numbers of inputArray multiplied by each other
Set multipliedAverage:
  multipliedSum / length of inputArray
Return multipliedAverage as string, with 3 decimals points
*/

function multiplicativeAverage(inputArray) {
  let multipliedSum = inputArray.reduce((sum, element) => sum * element, 1);
  let multipliedAverage = multipliedSum / inputArray.length;

  return multipliedAverage.toFixed(3);
};

// Test cases
console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
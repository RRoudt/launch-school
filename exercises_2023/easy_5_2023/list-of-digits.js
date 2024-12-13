/* Easy 5.8: List of Digits

Instructions:
- Write a function that takes one argument (a positive integer)
- Return an array with each individual; number as individual element

Input:
- Positive integer

Output:
- Array of numbers

Rules:
- The input will always be a positive integer
- Each digit must be an individual element in the resulting array

Data:
- Positive integer as input
- Array of numbers as output
- Individual integers as elements
- String as intermediate data type

Algorithm:
- Get a positive integer
- Turn the integer into a string: intStr
- Turn intStr into an array: intArr
- Iterate through intArr and return a new array
  - Coerce every element to be a number
*/

function digitList(int) {
  let intStr = String(int);
  let intArr = [...intStr];

  return intArr.map(element => Number(element));
}

// Test cases
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]
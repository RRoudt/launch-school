/* Easy 6.4: Counting Up

Instructions:
- Write a function that takes an integer argument and returns an array containing all integers between 1 and the argument (inclusive), in ascending order.
- You may assume that the argument will always be a positive integer.

Input:
- A number (integer)

Output:
- An array, containing all integers between 1 and the argument (inclusive), in ascending order

Rules:
- Return an array
- The array elements must go from 1, 2, 3, ..., until the input argument (inclusive)
- The input is always a positive integer

Data:
- Number (input)
- Array (output)

Algorithm:
Get a number: targetNum
Set a new empty array: outputArray
Loop for targetNum times (inclusive), starting at 1:
  Add current loop number to outputArray as a new element
Endloop
Return outputArray
*/

function sequence(targetNum) {
  let outputArray = [];

  for (let num = 1; num <= targetNum; num += 1) {
    outputArray.push(num);
  }

  return outputArray;
}

// Test cases
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
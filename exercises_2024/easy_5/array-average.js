/* Easy 5.10: Array Average

Instructions:
- Write a function that takes one argument, an array of integers, and returns the average of all the integers in the array, rounded down to the integer component of the average.
- The array will never be empty, and the numbers will always be positive integers.

Input:
- An array of integers

Output:
- A number that's the average of all the integers in the input array, rounded down

Rules:
- The input array will only contain integers
- The returning average needs to be rounded down
- The input array will always contain at least one integer
- The integers in the array will always be positive

Questions:
Q: What does "rounded down to the integer component of the average" mean?
  A: Let's assume, rounded down
Q: What to do with an array only containing 0?
  A: The rules state the inputs will always be positive, but let's make sure [0] or [0, 0] returns 0

Data:
- Array (input)
- Numbers (integers, array elements)
- Number (output)

Algorithm:
Get an array: inputArray
Set a new number variable to 0: sum
Iterate over inputArray:
  Add the current element to sum
Return sum / the length of the input array, rounded down
*/

function average(inputArray) {
  return Math.floor(inputArray.reduce((sum, num) => sum += num, 0) / inputArray.length);
}

// Test cases
console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40
console.log(average([9]));                        // 9
console.log(average([0]));                        // 0
console.log(average([0, 0]));                     // 0
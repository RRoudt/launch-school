/* Easy 1.1: Isn't It Odd?

Instructions:
- Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.

Input:
- Integer
  - Positive, negative, or zero

Output:
- True when absolute number is odd

Rules:
- Input can be positive, negative, or even

Questions:
- Does it need to return false when absolute value is even?
  - From the test cases, it seems to be YES

Data:
- Integer (input)
- Boolean (output)

Algorithm:
+ Get number
+ Turn number into absolute value (remove minus)
+ Modulo absolute number by 2 
  + If result is 1, return true
  + If result is 0, return false
*/

function isOdd(number) {
  return !!(Math.abs(number) % 2);
}

// Test cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
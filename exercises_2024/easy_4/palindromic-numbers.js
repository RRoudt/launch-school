/* Easy 4.4: Palindromic Numbers

Instructions:
- Write a function that returns true if its integer argument is palindromic, or false otherwise.
  - A palindromic number reads the same forwards and backwards.

Input:
- A number

Output:
- A boolean

Rules:
- Return true if the number reads the same forwards and backwards
- Return false if the number does not read the same forwards and backwards

Data:
- Number (input)
- String (processing)
- Array (processing)
- Boolean (output)

Algorithm:
Get a number: num
Reverse the number: reversedNum
  Turn the number into a string
  Turn the string into an array
  Reverse the array
  Turn the array into a string
  Turn the string into a number
Return whether num and reversedNum are equal
*/

function isPalindromicNumber(num) {
  let reversedNum = String(num).split('').reverse().join('');

  return num == reversedNum;
}

// Test cases
console.log(isPalindromicNumber(34543) === true);        // true
console.log(isPalindromicNumber(123210) === false);      // false
console.log(isPalindromicNumber(22) === true);           // true
console.log(isPalindromicNumber(5) === true);            // true
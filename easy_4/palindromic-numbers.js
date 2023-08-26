/* Easy 4.4: Palindromic Numbers

Instructions:
Write a function that returns true if its integer argument is palindromic, or false otherwise. A palindromic number reads the same forwards and backwards.

Input:
- An integer

Output:
- A boolean value (true or false)

Rules:
- Return true if the integer reads the same backwards as it does forwards
  - Otherwise, return false

Data:
- An integer as input
- A boolean value as output
- A string so the number can be turned into an array
- An array to temporarily reverse the number

Algorithm:
- Get an integer
- Turn the number into a string
- Turn the string into an array
- Reverse the array
- Turn the reversed array into a string
- Turn the reversed string into a number
- Compared the integer against the reversed number
*/

function isPalindromicNumber(integer) {
  let reversedInteger = Number(integer.toString()
                                      .split('')
                                      .reverse()
                                      .join(''))
  return integer === reversedInteger;
}

// Test cases
console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
/* Easy 4.2: Palindromic Strings (Part 1)

Instructions:
- Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise.
  - A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Input:
- A string

Output:
- A boolean

Rules:
- If the string is the same as the string reversed, return true, otherwise return false
  - The string must be reversed as-is, without lowercasing letters
  - The string must be compared with case sensitivity

Questions:
-

Data:
- String (input)
- Array (processing)
- Boolean (output)

Algorithm:
Get string
Reverse string: reversedString
  Turn string into an array
  Reverse array
  Turn array into a string
If string === reversedString:
  Return true
Else:
  Return false
Endif
*/

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');

  return string === reversedString;
}

// Test cases
console.log(isPalindrome('madam') === true);                // true
console.log(isPalindrome('Madam') === false);               // false (case matters)
console.log(isPalindrome("madam i'm adam") === false);      // false (all characters matter)
console.log(isPalindrome('356653') === true);               // true
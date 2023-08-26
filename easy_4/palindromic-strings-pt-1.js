/* Easy 4.2: Palindromic Strings (Part 1)

Instructions:
Write a function that returns true if the string passed as an argument is a palindrome, or false otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.

Input:
- A string

Output:
- A boolean value (true or false)

Rules:
- Return true if the string is a palindrome
- Return false if the string is NOT a palindrome
- Case matters. For example, 'Madam' is NOT a palindrome (due to the case)

Questions:
- What is a palindrome?
  - A palindrome is a word or string of characters that's spelled the same ways forward and backwards. For example:
    - madam
    - 356653

Data:
- Input is a string
- Output is a boolean value
- To reverse the string, I'll have to temporarily turn it into an array

Algorithm:
- Get an input string
- Create a reversed copy of string
- Compare the input string with reverse copy
  - If both are exactly the same, return true
  - Else return false
*/

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// Test cases
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
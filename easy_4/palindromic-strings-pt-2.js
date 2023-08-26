/* Easy 4.3: Palindromic Strings (Part 2)

Instructions:
Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Input:
- A string

Output:
- A boolean value (true or false)

Rules:
- Return true if the string is a palindrome
- Return false if the string is NOT a palindrome
- Case does NOT matter. For example, 'Madam' is a palindrome
- All non-alphanumeric character must be ignored

Data:
- Input is a string
- Output is a boolean value
- To reverse the string, I'll have to temporarily turn it into an array

Algorithm:
- Get a string
- Make string lowercase
- Remove all non-alphanumeric characters from string
- Check whether the cleaned up string is a palindrome
*/

function isRealPalindrome(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return isPalindrome(string);
}

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

// Test cases
console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
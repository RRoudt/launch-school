/* Easy 4.3: Palindromic Strings (Part 2)

Instructions:
- Write another function that returns true if the string passed as an argument is a palindrome, or false otherwise.
- This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters.
- If you wish, you may simplify things by calling the isPalindrome function you wrote in the previous exercise.

Input:
- A string

Output:
- A boolean

Rules:
- Return true when the input string is the same as the input string reversed
- Ignore all non-alphanumeric characters
- Ignore letter cases

Questions:
-

Data:
- String (input)
- Array (processing)
- Boolean (output)

Algorithm:
Get inputString
Remove non-alphanumeric characters from inputString
Turn inputString to lowercase
Reverse inputString: reversedString
  Turn inputString into an array
  Reverse the array
  Turn the array into a string
Return whether string equals reversedString
*/

function isRealPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  inputString = inputString.replace(/[^0-9a-z]/g, '');

  let reversedString = inputString.split('').reverse().join('');

  return inputString === reversedString;
}

// Test cases
console.log(isRealPalindrome('madam') === true);               // true
console.log(isRealPalindrome('Madam') === true);               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam") === true);     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653') === true);              // true
console.log(isRealPalindrome('356a653') === true);             // true
console.log(isRealPalindrome('123ab321') === false);            // false
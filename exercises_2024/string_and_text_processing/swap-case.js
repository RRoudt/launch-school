/* String and Text Processing 5: Swap Case

Instructions:
- Write a function that takes a string as an argument and returns that string with:
  - every lowercase letter changed to uppercase
  - every uppercase letter changed to lowercase
- Leave all other characters unchanged.

Input:
- A string

Output:
- A string where all cases are swapped

Questions:
Q: What to do with an empty input string?
  A: Let's assume, return an empty string
    - It's not in the test cases, so don't worry

Rules:
- If a character is a lowercase letter, make it an uppercase letter
- If a chracter is an uppercase letter, make it a lowercase letter
- Leave any other characters as-is

Data:
- String (input)
- Array (processing)
- String (output)

Algorithm:
Get a string
Turn string into an array, splitting on an empty string
Iterate over the array, creating a new array:
  If the character is a lowercase letter:
    Return the letter in uppercase
  Else if the character is an uppercase letter:
    Return the character in lowercase
  Else:
    Return the character as-is
  End if
End iterating over the array
Return the new array as a string, combined with an empty string
*/

function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (/[a-z]/.test(char)) {
        return char.toUpperCase();
      } else if (/[A-Z]/.test(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}

// Test cases
console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
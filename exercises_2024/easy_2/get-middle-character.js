/* Easy 2.11: Get Middle Character

Instructions:
- Write a function that takes a non-empty string argument and returns the middle character(s) of the string.
- If the string has an odd length, you should return exactly one character.
- If the string has an even length, you should return exactly two characters.

Input:
- String

Output:
- Character(s)
 - One character if input string is odd length
 - Two characters if input string is even length

Rules:
- If input string is odd, return the one middle character
- If input string is even, return the two middle characters

Data:
- String (input and output)
- Array (for processing)

Algorithm:
Get inputString
If inputString is of odd length:
  Return element at index of inputString.length / 2, rounded down
Else:
  Return the two middle characters
    Slice inputString from ((inputString.length / 2) - 1) to ((inputString.length / 2) + 1)
Endif
*/

function centerOf(inputString) {
  if (inputString.length % 2 === 1) {
    return inputString[Math.floor(inputString.length / 2)];
  } else {
    return inputString.slice((inputString.length / 2) - 1, inputString.length / 2 + 1);
  }
}

// Test cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
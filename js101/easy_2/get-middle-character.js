/* JS101 Small Problems - Easy 2.11: Get Middle Character

Instructions:
- Write a function that takes a non-empty string argument and returns the middle character(s) of the string.
- If the string has an odd length, you should return exactly one character.
- If the string has an even length, you should return exactly two characters.

Input:
- Non-empty string

Output:
- Middle character of string if string length is odd
- Middle two characters of string if string length is even

Rules:
- Input will always be a string
- Input strin will always be at least 1 character (could be a space)

Mental model of what to return:
- If remainder of string length divided by 2 equals 1 (aka string is odd length)
  - Return character at index of: string length / 2, rounded down
- If remainder of string length divided by 2 equals 0 (aka string is even length)
  - Set startIndex: (string length / 2) - 1
  - Set endIndex: (string length / 2) + 1
  - Return slice of string, starting at startIndex, ending at endIndex

Steps:
- Set and get string
- If remainder of string length divided by 2 equals 1 (aka string is odd length)
  - Set middleIndex: string length / 2, rounded down
  - Return character at middleIndex of string: 
- Else (aka string is even length)
  - Set startIndex: (string length / 2) - 1
  - Set endIndex: (string length / 2) + 1
  - Return slice of string, starting at startIndex, ending at endIndex
*/

function centerOf(string) {
  // If string is odd length
  if (string.length % 2 === 1) {
    let middleIndex = Math.floor(string.length / 2);
    return `"${string[middleIndex]}"`;
  }
  
  // If string is even length
  let startIndex = (string.length / 2) - 1;
  let endIndex = (string.length / 2) + 1;
  return `"${string.slice(startIndex, endIndex)}"`;
}

// Test cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
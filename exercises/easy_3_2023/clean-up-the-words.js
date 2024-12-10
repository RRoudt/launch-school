/* JS101 Small Problems: Easy 3.9: Clean up the words

Instructions:
- Write a function that takes in a string and returns a string
- The returning string replaces all of the non-alphabetic characters by spaces
- If one or more non-alphabetic character are in a row, show a single space

Inputs:
- String with both alphabetic and non-alphabetic characters

Outputs:
- String with only alphabetic characters

Rules:
- Returning string must have non-alphabetic characters repalced by spaces
- Multiple non-alphabetic characters in a row are reduced to a single space

Pseudocode:
- Set and get string: inputString
- Return string where all non-alphabetic characters are replaced by a space
*/

function cleanUp(inputString) {
  const regexPattern = /[^A-Za-z]+/g;
  return inputString.replace(regexPattern, ' ');
}

// Test case
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
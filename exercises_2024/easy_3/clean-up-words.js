/* Easy 3.9: Clean Up the Words

Instructions:
- Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces.
- If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).
  - Example:
  "---what's my +*& line?" -> " what s my line "

Input:
- String with alphabetic and non-alphabetic characters

Output:
- String where non-alphabetic characters are replaced by spaces

Rules:
- Consecutive non-alphabetic characters should be reduces to a single space

Data:
- String (input)
- String (processing)
- String (output)

Algorithm:
Get inputString
Set outputString: ''
Iterate over inputString:
  If current character is alphabetic:
    Add current character to outputString
  Else if current character is non-alphabetic and if previous character was alphabetic:
    Add a space to outputString
*/

function isAlphabetic(str) {
  return /^[a-zA-Z]+$/.test(str);
}

function cleanUp(inputString) {
  let outputString = "";

  for (let index = 0; index < inputString.length; index += 1) {
    if (isAlphabetic(inputString[index])) {
      outputString += inputString[index];
    } else if (!isAlphabetic(inputString[index]) && isAlphabetic(inputString[index - 1])) {
      outputString += " ";
    }
  }

  return outputString;
}

// Test cases
console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUp("!!!Hello!!!"));    // " Hello "
console.log(cleanUp("O!h!!H!e!l!l!o"));    // "O h H e l l o"
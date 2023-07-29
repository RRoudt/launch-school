/* Practice Problems: Medium 1, question 2

Instructions:
- Return a new string that swaps the case of all thetters

Example:
From: "The Munsters are creepy and spooky.";
To:   "tHE mUNSTERS ARE CREEPY AND SPOOKY."

Inputs:
- String

Outputs:
- String where case is swapped

Rules:
- If character is lowercase, turn it into uppercase
- If character is uppercase, turn it into lowercase

Pseudocode:
- Set and get inputString
- Set flippedCaseString: ''
- Loop through string:
  - If character is equal to character turned uppercase:
    - Add lowercase version of character to flippedCaseString
  - Else (aka if the character is lowercase):
    - Add uppercase version of character to flippedCaseString
- Return flippedCaseString
*/

function getFlippedCase(inputString) {
  let flippedCaseString = '';

  for (let char of inputString) {
    if (char === char.toUpperCase()) {
      flippedCaseString += char.toLowerCase();
    } else {
      flippedCaseString += char.toUpperCase();
    }
  }

  return flippedCaseString;
}

// Test cases
let munstersDescription = "The Munsters are creepy and spooky.";
console.log(getFlippedCase(munstersDescription));
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

let helloEveryone = "hELLO EVERYONE! it's me!";
console.log(getFlippedCase(helloEveryone));
// "Hello everyone! IT'S ME!"
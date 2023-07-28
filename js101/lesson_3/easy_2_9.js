/* Lesson 3. Practice Problems: Easy 2.8

Instructions:
- Back in the stone age (before CSS), we used spaces to align things on the screen.
- If we have a 40-character wide table of Flintstone family members, how can we center the title with spaces?

Input:
- String

Output:
- String of exactly 40 characters, with input string exactly in the middle

Pseudocode:
- Set const LINE_LENGTH = 40
- Get and set: inputString
- Get and set length of inputString: inputLength
- Set spacesToAdd: (LINE_LENGTH - inputLength) / 2, rounded down
- Return: inputString.padStart(spacesToAdd);
*/

function getCenteredTitle(inputString) {
  const LINE_LENGTH = 40;
  const inputLength = inputString.length;
  const padding =
    Math.floor(((LINE_LENGTH - inputLength) / 2) + inputLength);
  return inputString.padStart(padding);
}

// Test cases
let title = "Flintstone Family Members";
let centeredTitle = getCenteredTitle(title);

console.log(title);
// 'Flintstone Family Members'

console.log(centeredTitle);
// '       Flintstone Family Members'
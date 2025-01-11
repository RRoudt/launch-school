/* JS110 - Lesson 2.5: Practice Problem 20

Instructions:
- Write a function that takes no arguments and returns a string that contains a UUID.

Input:
- None

Output:
- UUID as a string (8-4-4-4-12 patterns of hexdecimal characters)

Questions:
Q: What do the letters a-f represent?
  A: a: 10, b: 11, c: 12, d: 13, e: 14, f: 15

Rules:
- A UUID consists of 32 characters in total (not counting the hyphens)
- The structure of a UUID is as follows: 8-4-4-4-12 (each number represents a string length)
- The UUID should be made up of the digits 0-9 and the letters a-f

Data:
- Numbers (to generate strings)
- Strings (sections)
- String (output)

Algorithm:
Set an empty string to return: UUID
Get a random hexadecimal number of 8 characters
Get a random hexadecimal number of 4 characters
Get a random hexadecimal number of 4 characters
Get a random hexadecimal number of 4 characters
Get a random hexadecimal number of 12 characters
Add all random hexadecimal numbers into a UUID, separated by a hyphen
Return UUID

Get a random hexadecimal number algorithm:
Get a target length of the string: targetLength
Set an array with all valid hexadecimal values: 0-9, a-f
Set an empty string: randomID
Start loop for targetLength number of times:
  Generate a random index between 0 (inclusive) and 15 (inclusive)
  Add the character at the random index in the valid values to randomID
Stop looping
Return randomID
*/

function generateRandomID(targetLength) {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let randomID = '';

  for (let count = 0; count < targetLength; count += 1) {
    let randomIndex = Math.floor(Math.random() * 16);
    randomID += DIGITS[randomIndex];
  }

  return randomID;
}

function generateUUID() {
  let section1 = generateRandomID(8);
  let section2 = generateRandomID(4);
  let section3 = generateRandomID(4);
  let section4 = generateRandomID(4);
  let section5 = generateRandomID(12);

  return `${section1}-${section2}-${section3}-${section4}-${section5}`;
}

console.log(generateUUID());
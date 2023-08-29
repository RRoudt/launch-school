/* eslint-disable max-len */
/* Practice Problem 17

Instructions:
Write a function that takes no arguments and returns a string that contains a UUID.

Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

Input:
- None

Output:
- UUID in string format

Rules:
- The UUID must be broken up in 5 sections, with this pattern"
  8-4-4-4-12 (For example: 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91')

Data:
- String output
- Array to hold sections until complete
- Array with section pattern: [8, 4, 4, 4, 12]
- Each character used in the UUID must be the numbers 0-9 or the letters a-f

Algorithm:
- Create an empty arr: uuidArr
- Iterate over the section pattern array
  - For every element, create a random string for the length of the element number (separate function)
    - Generate a random number between 0 and 16 (exclusive)
      - If the random number is less than or equal to 9, add the string version of the random number to the random string
      - Else, add a letter to the random string, matching to this number:
        - 10 = a
        - 11 = b
        - 12 = c
        - 13 = d
        - 14 = e
        - 15 = f
  - Add the string as an element to uuidArr
- Turn the uuidArr into a string, separated by hyphens (-) and return this string
*/

function getRandomUUIDString(length) {
  let uuidString = '';

  for (let index = 0; index < length; index++) {
    let randomNum = Math.floor((Math.random() * 16));
    if (randomNum <= 9) {
      uuidString += randomNum;
    } else {
      let charCode = randomNum + 87;
      uuidString += String.fromCharCode(charCode);
    }
  }

  return uuidString;
}

function getUUID() {
  const sectionPattern = [8, 4, 4, 4, 12];

  const uuidArr = sectionPattern.map(length => {
    return getRandomUUIDString(length);
  });

  return uuidArr.join('-');
}

console.log(getUUID());
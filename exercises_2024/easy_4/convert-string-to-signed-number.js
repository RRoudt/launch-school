/* Easy 4.10: Convert a String to a Signed Number

Instructions:
Write a function that takes a string of digits and returns the appropriate number as an integer.
- The string may have a leading + or - sign;
  - if the first character is a +, your function should return a positive number;
  - if it is a -, your function should return a negative number.
  - If there is no sign, return a positive number.
- You may assume the string will always contain a valid number.
- You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and Number().
  - You may, however, use the stringToInteger() function from the previous lesson.

Input:
- A string containing only numbers

Output:
- A number version of the input string

Rules:
- Do not use any built-in method for type conversion
- Return an integer
- The input string will only contain numbers, but in string type
- If input string starts with a -, return a negative number
- If input string starts with a + or just a number, return a positive number

Data:
- String (input)
- Number (output)

Algorithm:
Get a string: inputString
If inputString starts with '-' or '+':
  Call stringToInteger() without the first character of inputString
Else:
  Call stringToInteger with inputString as-is
Endif
If inputString starts with '-':
  Return the value of stringToInteger() as a negative number
Else:
  Return the value of stringToInteger() as-is
Endif
*/

function stringToInteger(inputString) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }

  let outputNumber = 0;
  let lastIndex = inputString.length - 1;

  for (let currentIndex = lastIndex; currentIndex >= 0; currentIndex -= 1) {
    let currentDigit = DIGITS[inputString[currentIndex]];

    outputNumber += currentDigit * (10 ** (lastIndex - currentIndex));
  }

  return outputNumber;
}

function stringToSignedInteger(inputString) {
  let outputNumber = 0;

  if (inputString[0] === '-' || inputString[0] === '+') {
    outputNumber = stringToInteger(inputString.slice(1));
  } else {
    outputNumber = stringToInteger(inputString);
  }

  if (inputString[0] === '-') {
    return -outputNumber;
  } else {
    return outputNumber;
  }
}

// Test cases
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
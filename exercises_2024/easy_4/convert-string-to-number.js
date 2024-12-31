/* Easy 4.9: Convert a String to a Number

Instructions:
- Write a function that takes a string of digits and returns the appropriate number as an integer.
- You may not use any built-in methods like parseInt() or Number()
- Do not worry about leading + or - signs, nor should you worry about invalid characters; assume all characters will be numeric.
You may not use any of the standard conversion methods available in JavaScript, such as String() and Number().
  - Your function should do this the old-fashioned way and calculate the result by analyzing the characters in the string.

Input:
- A string containing only numbers

Output:
- A number version of the input string

Rules:
- Do not use any built-in method for type conversion
- Return an integer
- The input string will only contain numbers, but in string type

Data:
- String (input)
- Number (output)

Algorithm:
Get a string: inputString
Set a conversion table, to look up the number version of a string character: DIGITS
Set a number variable to 0: outputNumber
Set a number variable to store the last index number (inputString.length - 1): lastIndex
Iterate over inputString from lastIndex to 0 (inclusive):
  Set a number variable by looking up in DIGITS the number version of the current character: currentDigit
    Reassign outputNumber to: outputNumber + currentDigit * (10 ** (lastIndex - current index number))
Return outputNumber
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

// Test cases
console.log(stringToInteger("4321") === 4321);        // logs true
console.log(stringToInteger("570") === 570);          // logs true
console.log(stringToInteger("5007") === 5007);        // logs true
console.log(stringToInteger("4030201") === 4030201);  // logs true
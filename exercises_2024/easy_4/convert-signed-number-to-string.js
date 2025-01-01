/* Easy 4.12: Convert a Signed Number to a String

Instructions:
- Write a function that takes an integer and converts it to a string representation.
- You may not use any of the standard conversion functions available in JavaScript, such as String() and Number.prototype.toString().
  - You may, however, use integerToString() from the previous exercise.

Input:
- A number (as number data type)

Output:
- String version of the number input, signed

Rules:
- Cannot use any built-in type coercion methods

Questions:
Q: What does signed mean?
  A: Signed means the string start with '+' if the number is positive, '-' if the number is negative
Q: What to do with the 0 value?
  A: From the test case it seems like to return just '0'

Data:
- Number (input)
- String (output)

Algorithm:
Get a number: inputNumber
If inputNumber is above 0:
  Return '+' plus the string version of inputNumber
Else if inputNumber is below 0 or inputNumber is -0:
  Return '-' plus the string version of inputNumber
Else:
  Return the string version of inputnumber
Endif
*/

function integerToString(inputNumber) {
  const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let currentNumber = inputNumber;
  let outputString = '';

  do {
    let currentDigit = currentNumber % 10;

    currentNumber = Math.floor(currentNumber / 10);

    outputString = NUMBERS[currentDigit] + outputString;
  } while (currentNumber > 0);

  return outputString;
}

function signedIntegerToString(inputNumber) {
  if (inputNumber > 0) {
    return '+' + integerToString(inputNumber);
  } else if (inputNumber < 0 || Object.is(inputNumber, -0)) {
    return '-' + integerToString(-inputNumber);
  } else {
    return integerToString(inputNumber);
  }
}

// Test cases
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
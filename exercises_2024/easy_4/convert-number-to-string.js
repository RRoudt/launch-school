/* Easy 4.11: Convert a Number to a String

Instructions:
- Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string representation of that integer.
- You may not use any of the standard conversion functions available in JavaScript, such as String(), Number.prototype.toString, or an expression such as '' + number.
- Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.

Input:
- A positive integer (number data type)

Output:
- The string version of the input integer

Rules:
- Cannot use any built-in type coercion methods

Questions:
-

Data:
- Integer (input)
- String (output)

Algorithm:
Get an input number: inputNumber
Set an array, containing the string versions of numbers, from '0' at index 0 to '9' at index 9: NUMBERS
Set a number variable to the value of inputNumber: currentNumber
Set an empty string: outputString
While currentNumber > 0:
  Get the remainer of currentNumber divided by 10, and store it: currentDigit
  Set currentNumber to currentNumber divided by 10 (rounded down)
  Look up string value of currentDigit in DIGITS and add it to the start of outputString
Return outputString
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

// Test cases
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
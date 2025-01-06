/* Easy 6.3: Reverse Number

Instructions:
- Write a function that takes a positive integer as an argument and returns that number with its digits reversed.

Input:
- A number (positive integer)

Output:
- A number (the input number, but reversed)

Rules:
- The input number must return with its digits reversed, as a number
- Leading zeros in the result get dropped:
  12000 -> 21
- Single numbers are returned as-is

Data:
- Number (input)
- String (processing)
- Array (processing)
- Number (output)

Algorithm:
Get a number: num
Turn input number into a string and then into an array, then store into a variable: numArray
Reverse numArray and turn it into a string, then store into a variable: reversedNumString
Return reversedNumString as a number
*/

function reverseNumber(num) {
  let numArray = String(num).split('');
  let reversedNumString = numArray.reverse().join('');
  
  return Number(reversedNumString);
}

// Test cases
console.log(reverseNumber(12345) === 54321);    // 54321
console.log(reverseNumber(12213) === 31221);    // 31221
console.log(reverseNumber(456) === 654);        // 654
console.log(reverseNumber(12000) === 21);       // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1) === 1);            // 1
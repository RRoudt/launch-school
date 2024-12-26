/* Easy 1.8: Leap Years (Part 1)

Instructions:
- In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.
- Assume this rule is valid for any year greater than year 0.
- Write a function that takes any year greater than 0 as input and returns true if the year is a leap year, or false if it is not a leap year.


Input:
- Year (number)

Output:
- Boolean
  - True if the year is a leap year
  - False if the year is not a leap year

Rules:
- A leap year is when the year is evenly divisible by 4
  - Except when the year is evenly divisible by 100 (then it's NOT a leap year)
    - Except when the year is evenly divisible by 400 (then it IS a leap year)
- Every inputted year will be more than 0
- Return a boolean value
  - True if the year is a leap year
  - False if the year is not a leap year

Data:
- Number (input)
- Boolean (output)

Algorithm:
- Get year
- Modolo year by 4
  - If result is not 0, return false
- Modolo year by 100 
  - If result is not 0, return false
  - If result is 0, modolo year by 400
    - If result is not 0, return false
- In all other cases, return true
*/

function isLeapYear(year) {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;

  return true;
}

// Test cases
console.log(isLeapYear(2016) === true);      // true
console.log(isLeapYear(2015) === false);      // false
console.log(isLeapYear(2100) === false);      // false
console.log(isLeapYear(2400) === true);      // true
console.log(isLeapYear(240000) === true);    // true
console.log(isLeapYear(240001) === false);    // false
console.log(isLeapYear(2000) === true);      // true
console.log(isLeapYear(1900) === false);      // false
console.log(isLeapYear(1752) === true);      // true
console.log(isLeapYear(1700) === false);      // false
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === false);       // false
console.log(isLeapYear(400) === true);       // true
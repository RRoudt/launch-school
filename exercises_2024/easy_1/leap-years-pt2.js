/* Easy 1.8: Leap Years (Part 2)

Instructions:
- This is a continuation of the previous exercise.
- The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
- Using this information, update the function from the previous exercise to determine leap years both before and after 1752.

Input:
- Year (number)

Output:
- Boolean
  - True if the year is a leap year
  - False if the year is not a leap year

Rules:
- If year is on or before 1752 and evenly divisible by 4, then it's a leap year
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
- If year is 1752 or earlier and evenly divisible by 4, return true
- Modolo year by 4
  - If result is not 0, return false
- Modolo year by 100 
  - If result is not 0, return false
  - If result is 0, modolo year by 400
    - If result is not 0, return false
- In all other cases, return true
*/

function isLeapYear(year) {
  if (year <= 1752 && year % 4 === 0) return true;
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
console.log(isLeapYear(1700) === true);      // true
console.log(isLeapYear(1) === false);         // false
console.log(isLeapYear(100) === true);       // true
console.log(isLeapYear(400) === true);       // true
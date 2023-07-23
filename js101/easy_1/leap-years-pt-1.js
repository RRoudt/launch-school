/* Exercise 8: Leap Years (Part 1)

- Write a function
- Take any value greater than 0 as input
- Return true of the year is a leap year
  - Is evenly divisible by 4
    - Unless it's also divisible by 100
  - Is not evenly divisible by 100
    Unless it's also evenly divisible by 400
- Return false if the year is NOT a leap year

Pseudocode:
START and SET year (argument)
  IF (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))
    RETURN true
ELSE
  RETURN false
*/

function isLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
/* Exercise 8: Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. You can also use Object.is(value, NaN) to make the same determination.

Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, false if it is not. */

function isNotANumber(value) {
  return (typeof value) !== 'number' ? true : false;
}

console.log(isNotANumber(2));         // false
console.log(isNotANumber(-42));       // false
console.log(isNotANumber(true));      // true
console.log(isNotANumber([1, 2, 3])); // true
console.log(isNotANumber('string!')); // true
/* Exercise 9: Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number. */

function isMinusZero(num) {
  if (typeof num !== 'number') return false;
  return 1 / num === -Infinity;
}

console.log(isMinusZero(-0));   // true
console.log(isMinusZero('-0')); // false
console.log(isMinusZero(0));    // false¸
console.log(isMinusZero(-1));   // false
console.log(isMinusZero(1));    // false
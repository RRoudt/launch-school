/* Solution to: JS100 - JavaScript Basics/ Strings / Blank? Version 1 */

function isBlank(str) {
  return str.length === 0;
}

console.log(isBlank('mars')); // false
console.log(isBlank('  '));   // false
console.log(isBlank(''));     // true
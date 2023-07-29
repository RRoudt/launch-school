/* Lesson 3: Practice Problems: Easy 3.1

Instructions:
- Rewrite the function so it only has one return statement
- The function should not explicitly use either true or false.
- Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/

const isColorValid = color => color === "blue" || color === "green";

function isColorValid2(color) {
  return color === "blue" || color === "green";
}

// Test cases
console.log(isColorValid("orange"));  // false
console.log(isColorValid("red"));     // false
console.log(isColorValid("purple"));  // false
console.log(isColorValid("green"));   // true
console.log(isColorValid("blue"));    // true
console.log("--------");
console.log(isColorValid2("orange"));  // false
console.log(isColorValid2("red"));     // false
console.log(isColorValid2("purple"));  // false
console.log(isColorValid2("green"));   // true
console.log(isColorValid2("blue"));    // true
/* Lesson 3. Practice Problems: Easy 2.3

Instructions:
- Given a number and an array, determine whether the number is included in the array.*/

function arrIncludes(arr, element) {
  return arr.includes(element);
}

// Test cases
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(arrIncludes(numbers, number1)); // false
console.log(arrIncludes(numbers, number2)); // true
/* Lesson 3. Practice Problems: Easy 2.2

Instructions:
- Write two distinct ways of reversing the array without mutating the original array. Use reverse for the first solution, and sort for the second.
*/

function createNewArrayFrom(arr) {
  return arr.map(el => el);
}

function sortArray(arr) {
  let newArr = createNewArrayFrom(arr);
  return newArr.sort((num1, num2) => num2 - num1);
}

function reverseArray(arr) {
  let newArr = [];
  arr.forEach(el => newArr.push(el));
  return newArr.reverse();
}

// Test cases
let numbersAsc = [1, 2, 3, 4, 5];
console.log(reverseArray(numbersAsc)); // [ 5, 4, 3, 2, 1 ] — New array
console.log(numbersAsc); // [1, 2, 3, 4, 5] — Array didn't get mutated!

// Test cases
let numbersScrambled = [2, 1, 5, 3, 4];
console.log(sortArray(numbersAsc)); // [ 5, 4, 3, 2, 1 ] — New array
console.log(numbersAsc); // [1, 2, 3, 4, 5] — Array didn't get mutated!
/* Lesson 3. Practice Problems: Easy 2.5

Instructions:
- Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

Inputs:
- Array of numbers: [1, 2, 3, 4, 5]

Output:
- Array of numbers: [1, 2, 4, 5]

Rules:
- Remove element at index 2
*/

let numbers = [1, 2, 3, 4, 5];

console.log(numbers); // [1, 2, 3, 4, 5]
numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]
/* Lesson 3. Practice Problems: Easy 2.10

Instructions:
- Write a one-line expression to count the number of lowercase t characters in each of the strings.

Input:
- String

Output:
- Number of times the input string contains the lowercase "t"

Rule:
- Expression should be one line.
*/

function countTs(str) {
  return [...str].reduce((sum, letter) => letter === 't' ? sum += 1: sum, 0);
}

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(countTs(statement1)); // 2
console.log(countTs(statement2)); // 0
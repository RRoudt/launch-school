/* Lesson 3. Practice Problems: Easy 2.4

Instructions:
- Starting with the string "seven years ago...", show two different ways to put the expected "Four score and " in front of it.

Inputs:
- String "Four score and "
- String "seven years ago..."

Output:
- String "Four score and seven years ago..."
*/

let startWords = "Four score and ";
let famousWords = "seven years ago...";

console.log(startWords + famousWords);
console.log(startWords.concat(famousWords));
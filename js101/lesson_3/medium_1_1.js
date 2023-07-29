/* Practice Problems: Medium 1, question 1

Instructions:
- Write a program that outputs "The Flintstones Rock!" 10 times
- With each line indented 1 space to the right of the line above it

Example:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...

Inputs:
- String: "The Flintstones Rock!"

Outputs:
- The string "The Flintstones Rock!", times 10, progressively indented

Rules:
- Every line is one space more indented than the previous line

Pseudocode:
- Set string: "The Flintstones Rock!"
- Loop for 10 times:
  - Log ' ' times the index number, plus the string
*/

const string = "The Flintstones Rock!";

for (let index = 0; index < 10; index += 1) {
  console.log(' '.repeat(index) + string);
}
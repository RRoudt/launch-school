/* Easy 4.1: Searching 101

Instructions:
- Write a program that solicits six numbers from the user and logs a message that describes whether the sixth number appears among the first five numbers.

Input:
- 6 numbers (via prompts)

Output:
- Message in the console, indicating if the 6th number is among the first 5 inputted numbers

Rules:
- Store the first 5 inputted numbers
- Compare the 6th inputted number against the first 5 inputted number

Data:
- String (input)
- String (processing)
- String (output)

Algorithm:
Set numArr: []
Prompt user for num1 and add it to numArr
Prompt user for num2 and add it to numArr
Prompt user for num3 and add it to numArr
Prompt user for num4 and add it to numArr
Prompt user for num5 and add it to numArr
Prompt user for comparisonNum
If comparisonNum is in NumArr, log to console:
  "The number {comparisonNum} appears in {numArr}"
Else:
  "The number {comparisonNum} does not appear in {numArr}"
Endif
*/

const readline = require("readline-sync");
let numArr = [];

console.log("Enter the 1st number:");
numArr.push(readline.question());

console.log("Enter the 2nd number:");
numArr.push(readline.question());

console.log("Enter the 3rd number:");
numArr.push(readline.question());

console.log("Enter the 4th number:");
numArr.push(readline.question());

console.log("Enter the 5th number:");
numArr.push(readline.question());

console.log("Enter the last (comparison) number:");
let comparisonNum = readline.question();

if (numArr.includes(comparisonNum)) {
  console.log(`The number ${comparisonNum} appears in ${numArr}`);
} else {
  console.log(`The number ${comparisonNum} does not appear in ${numArr}`);
}
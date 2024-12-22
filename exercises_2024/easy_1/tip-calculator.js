/* Easy 1.5: Tip Calculator

Instructions:
- Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.

Input:
- Bill amount
- Tip percentage

Output:
- Tip amount
- Total amount (bill + tip)

Rules:
- Result must be logged to the console
- Input does not have to be validated
  - User will always enter numbers

Data:
- Numbers (input)
  - But also strings, as I'll use readline-sync to prompt for input

Algorithm:
- Get bill amount from user
- Get tip percentage from user
- Show tip as dollar amount
- Show tip amount plus bill amount as dollar amount
*/

const readline = require("readline-sync");

function showPrompt(message) {
  console.log(`${message}`);
}

showPrompt("What is the bill?");
let billAmount = Number(readline.prompt());

showPrompt("What is the tip percentage?");
let tipPercentage = Number(readline.prompt());

let tipAmount = (tipPercentage / 100) * billAmount;
let totalAmount = billAmount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);
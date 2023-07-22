/* Exercise 5: Tip Calculator

Instructions:
- Prompt for an amount
- Prompt for a tip percentage
- Log the tip in dollars
- Log the total amount in dollars
- No need for input validation

Example program:
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

Pseudocode:
GET and SET billDollars from user
GET and SET tipPercentage from user
[x] SET tipDollars = ((tipPercentage + 100) / 100) * billDollars
[x] SET totalDollars = billDollars + tipDollars
[x] PRINT the tip in dollar
[x] PRINT the total in dollars
*/

const readline = require('readline-sync');

function calculateTip() {
  const billDollars = parseFloat(readline.question("What is the bill? $"));
  const tipPercentage = parseFloat(readline.question("What is the tip percentage? "));
  const tipDollars = (tipPercentage / 100) * billDollars;
  const totalDollars = billDollars + tipDollars;

  console.log(`\nThe tip is $${tipDollars.toFixed(2)}`);
  console.log(`The total is $${totalDollars.toFixed(2)}`);
}

// Test case
calculateTip(); // 230 total
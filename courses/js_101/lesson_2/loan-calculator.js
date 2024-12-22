/* JS101 - Lesson 2 - Mortgage / Car Loan Calculator

Instructions:
- Build a mortgage calculator (or car payment calculator -- it's the same thing) that determines the monthly payment assuming that interest is compounded monthly.
- You'll need three pieces of information:
  - the loan amount
  - the Annual Percentage Rate (APR)
  - the loan duration
- From the above, you'll need to calculate the following two things:
  - monthly interest rate (APR / 12)
  - loan duration in months
- The formula:
  let m = p * (j / (1 - Math.pow((1 + j), (-n))));
    - m = monthly payment
    - p = loan amount
    - j = monthly interest rate
    - n = loan duration in months
- Print the payment amount as a dollar and cents amount, e.g., $123.45 or $371.00.

Input:
- Loan amount
- Annual Percentage Rate (APR)
- Loan duration

Output:
- Payment amount per month, in dollars and cents (two decimal places)

Questions:
- Is the input "loan duration" in years?
  - It seems, yes (as the month duration needs to be calclated)
- Is the to be printed amount, the amount per month?
  - Yes, it seems from the formula
- Does the formula take monthly interest rate as whole number or fractional?
  - Turns out from testing, fractional

Data:
- Numbers (input)
- String (output)

Algorithm:
+ Get loan amount as a number
+ Get APR as integer number
+ Get loan duration in number of years
+ Calculate loan duration in number of months
  + loanDurationYears * 12
+ Calculate monthly interest rate
  + APR / 12
+ Calculate monthly payment
  + loanAmount * (monthlyPercentageRate / (1 - Math.pow((1 + monthlyPercentageRate), (-loanDurationMonths))))
+ Return monthly payment as dollar string
*/

const readline = require("readline-sync");

function prompt(message) {
  console.log(`==> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

do {
  prompt("What's the loan amount in dollars?");
  let loanAmount = readline.prompt();
  while (invalidNumber(loanAmount)) {
    prompt("Please enter a valid dollar amount");
    loanAmount = readline.question();
  }

  prompt("What's the Annual Percentage Rate (APR) in whole numbers?");
  let annualPercentageRate = readline.prompt();
  while (invalidNumber(annualPercentageRate)) {
    prompt("Please enter a valid percentage");
    annualPercentageRate = readline.question();
  }

  prompt("What's the loan duration in whole years?");
  let loanDurationYears = readline.prompt();
  while (invalidNumber(loanDurationYears)) {
    prompt("Please enter a valid number of years");
    loanDurationYears = readline.question();
  }

  // Convert inputs to numbers
  loanAmount = Number(loanAmount);
  annualPercentageRate = Number(annualPercentageRate);
  loanDurationYears = Number(loanDurationYears);

  let loanDurationMonths = loanDurationYears * 12;
  let monthlyPercentageRate = (annualPercentageRate / 12) / 100;
  let monthlyPayment = loanAmount * (monthlyPercentageRate / (1 - Math.pow((1 + monthlyPercentageRate), (-loanDurationMonths))));

  console.log(`Your monthly payment is $${monthlyPayment.toFixed(2)}`);
  
  prompt(`Do you want to do another calculation?`);
  continueCalculating = readline.prompt().toLowerCase();
} while (continueCalculating === 'y');
/* Solution to assignment 19 of lesson 2: Mortgage Calculator

Inputs (from user):
- Loan amount
- Annual Percentage Rate (APR)
- Loan duration in years

Calculation:
- Monthly interest rate
- Loan duration in months

Output:
- Monthly payment

Formula:
let discountFactor = Math.pow((1 + monthlyInterestRate), -loanDurationInMonths);

let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - discountFactor));

Pseudocode:
Pseudocode ask the user for another calculation:
WHILE iterator equals true
  GET loanAmount from user
    ("What is the loan amount?")
  GET annualInterestRate from user
    ("What is the annual interest rate? (Example: 5 for 5% or 2.5 for 2.5%)")
  GET loanDurationInYears from user
    ("What is the loan duration (in years)?")
  PRINT monthlyPayment
  GET input from user (continue? y/n)

SET loanDurationInMonths = loanDurationInYears / 12
SET monthlyInterestRate = annualInterestRate / 12
SET discountFactor = Math.pow((1 + monthlyInterestRate), -loanDurationInMonths)
SET monthlyPayment = loanAmount * (monthlyInterestRate / (1 - discountFactor))

PRINT loanDurationInMonths
PRINT monthlyInterestRate
PRINT monthlyPayment
*/

const readline = require('readline-sync');

// Prettier console log when asking questions
function prompt(message) {
  console.log(`=> ${message}`);
}

// Check if inputted number is invalid
function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

// Prompt user for number
function getNumber(promptMessage) {
  prompt(promptMessage);

  let num = readline.question();

  while (invalidNumber(num)) {
    prompt("Hmm... that doesn't look like a valid number.");
    num = readline.question();
  }

  return Number(num);
}

function calculateMonthlyPayment(loanAmount,
  annualInterestRate, loanDurationInYears) {

  // Calculate monthly rates
  let loanDurationInMonths = loanDurationInYears * 12;
  let monthlyInterestRate = annualInterestRate / 100 / 12;
  let monthlyInterestRatePercent = monthlyInterestRate * 100;

  // Calculate monthly dollar payment
  let discountFactor = Math.pow((1 + monthlyInterestRate),
    -loanDurationInMonths);
  let monthlyPayment = loanAmount * (monthlyInterestRate /
    (1 - discountFactor));

  console.log(`Loan duration: ${loanDurationInMonths} months`);
  console.log(`Monthly interest rate: ${monthlyInterestRatePercent.toFixed(2)}%`);
  console.log(`Monthly payment: $${monthlyPayment.toFixed(2)}`);
}

// Ask the user for the numbers and operation
while (true) {
  const loanAmount = getNumber("What is the loan amount?");
  const annualInterestRate = getNumber("What is the annual interest rate? (Example: 5 for 5% or 2.5 for 2.5%)");
  const loanDurationInYears = getNumber("What is the loan duration (in years)?");

  console.log(calculateMonthlyPayment(
    loanAmount, annualInterestRate, loanDurationInYears));

  if (readline.question("Do another calculation? (y/n) ").toLowerCase() === 'n') break;
}

// Test Case 1:
// Loan Amount: $150,000
// Annual Interest Rate: 4.5%
// Loan Duration: 30 years
// calculateMonthlyPayment(150000, 4.5, 30);
// Expected Output:
// Loan duration: 360 months
// Monthly interest rate: 0.38%
// Monthly payment: $760.03

// Test Case 2:
// Loan Amount: $350,000
// Annual Interest Rate: 3.92%
// Loan Duration: 20 years
// calculateMonthlyPayment(350000, 3.92, 20);
// Expected Output:
// Loan duration: 240 months
// Monthly interest rate: 0.33%
// Monthly payment: $2071.84

// Test Case 3:
// Loan Amount: $500,000
// Annual Interest Rate: 2.75%
// Loan Duration: 15 years
// calculateMonthlyPayment(500000, 2.75, 15);
// Expected Output:
// Loan duration: 180 months
// Monthly interest rate: 0.23%
// Monthly payment: $3381.29

// Test Case 4:
// Loan Amount: $250,000
// Annual Interest Rate: 3.25%
// Loan Duration: 10 years
// calculateMonthlyPayment(250000, 3.25, 10);
// Expected Output:
// Loan duration: 120 months
// Monthly interest rate: 0.27%
// Monthly payment: $2432.35
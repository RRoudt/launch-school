/* Small Problems - Easy 2.10: When Will I Retire?

Instructions:
- Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Input:
- Current age
- Retire age

Output:
- Current year
- Retire year
- Amount of years of work to go

Steps:
- Import readline library
- Get currentAge from user: "What is your age? "
  - Convert to number and check if a number and higher than 10, otherwise ask again
- Get retireAge from user: "At what age would you like to retire? "
  - Convert to number and check if a number and higher than current age, otherwise ask again
- Set workYearsToGo: retireAge - currentAge 
- Set currentYear: new Date().getFullYear()
- Set retireYear: currentYear + workYearsToGo
- Print to console:
  - "It's currentYear. You will retire in retireYear"
  - "You have only workYearsToGo years of work to go!"
*/

const readline = require('readline-sync');

// Get and check currentAge
let currentAge = parseInt(readline.question("What is your age? "));
while (Number.isNaN(currentAge) || currentAge <= 10) {
  currentAge = parseInt(readline.question("=> Please enter a positive number higher than 10.\nWhat is your age? "));
}

// Get and check retireAge
let retireAge = parseInt(readline.question("At what age would you like to retire? "));
while (Number.isNaN(retireAge) || retireAge <= currentAge) {
  retireAge = parseInt(readline.question("=> Please enter a number higher than your current age.\nAt what age would you like to retire?  "));
}

// Calculate remaining years to work and retire year
const workYearsToGo = retireAge - currentAge;
const currentYear = new Date().getFullYear();
const retireYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);
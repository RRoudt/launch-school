/* Easy 2.10: When Will I Retire?

Instructions:
- Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Input:
- Age in years (via prompt)
- Wanted retirement in years (via prompt)

Output:
- String: "It's xxxx. You will retire in xxxx."

Rules:
- Show current year
- Show retirement year

Data:
- Numbers (years, via prompt)
- Strings (via prompts and via output)

Algorithm:
Prompt user for currentAge
Prompt user for retirementAge
Get currentYear
Calculate workYearsLeft: retirementAge - age
Calculate retirementYear: currentYear + workYearsLeft
Display string: "It's currentYear. You will retire in retirementYear.
You have only workYearsLeft years of work to go!"
*/

const readline = require("readline-sync");

console.log("What's your age?")
let currentAge = Number(readline.question());

console.log("At what age would you like to retire?");
let retirementAge = Number(readline.question());

let currentYear = new Date().getFullYear();
let workYearsLeft = retirementAge - currentAge;
let retirementYear = currentYear + workYearsLeft;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.
  You have only ${workYearsLeft} years of work to go!`);
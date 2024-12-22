/* Easy 1.4: How Big is the Room?

Instructions:
- Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.
  - Note: 1 square meter == 10.7639 square feet
- Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
- Example:
  Enter the length of the room in meters:
  10
  Enter the width of the room in meters:
  7
  The area of the room is 70.00 square meters (753.47 square feet).

Input:
- Length in meters (number)
- Width in meters (number)

Output:
- Area of room in square meters
- Area of room in square feet

Rules:
- Square meters = length * width
- 1 square meter == 10.7639 square feet
- Input does not have to be validated

Data:
- String (input, via readline-sync)
- String (output)
- Numbers (to calculate area)

Algorithm:
+ Get length from user
+ Get width from user
+ Calculate area in square meters
  + squareMeters = width * length
+ Calculate area in square feet
  + squareFeet = squareMeters * 10.7639
+ Log to console:
  `The area of the room is xx.xx square meters (xxx.xx square feet).`
*/

const readline = require('readline-sync');

function showPrompt(message) {
  console.log(`${message}`);
}

const FEET_IN_METER = 10.7639;

showPrompt("Enter the length of the room:");
let width = Number(readline.prompt());

showPrompt("Enter the length of the room:");
let length = Number(readline.prompt());

let squareMeters = width * length;
squareFeet = squareMeters * FEET_IN_METER;

showPrompt(`The area of the room is ${squareMeters} square meters (${squareFeet.toFixed(2)} square feet).`)
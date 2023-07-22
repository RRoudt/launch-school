/* Exercise 4: How big is the room?

Instructions:
- Ask the length and width of a room in meters
- Log the area of the room to the console in both square meters and square feet
  - 1 square meter == 10.7639 square feet
- Use readlineSync.prompt to collect user input

Example program:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Pseudocode:
SET readline = require readlineSync
GET length of the room in meters
GET width of the room in meters
SET sqMeters = length * width
SET sqFeet = sqMeters 10.7639
PRINT The area of the room is sqMeters square meters (sqFeet square feet).
*/

const readline = require('readline-sync');

readline.setPrompt("Enter the length of the room in meters:\n");
const length = Number(readline.prompt());

readline.setPrompt("Enter the width of the room in meters:\n");
const width = Number(readline.prompt());

const sqMeters = length * width;
const sqFeet = sqMeters * 10.7639;

console.log(`The area of the room is ${sqMeters.toFixed(2)} square meters (${sqFeet.toFixed(2)} square feet).`);
// length = 10
// width = 7
// The area of the room is 70.00 square meters (753.47 square feet).
/* Further Exploration of Exercise 4: How big is the room?

Instructions:
- Ask the user for the input type (meters or feet)
- Ask the length
- Ask the width
- Log the area of the room to the console in both square meters and square feet
  - Log the conversion between parentheses
  - 1 square meter == 10.7639 square feet
  - 1 square feet == 0.092903 square meter
- Use readlineSync.prompt to collect user input

Example program:
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).

Pseudocode:
SET readline = require readlineSync
GET unit
GET length of the room
GET width of the room
SET sqMeters
SET sqFeet
IF unit === meters
  sqMeters = length * width
  sqFeet = sqMeters * 10.7639
  PRINT The area of the room is sqMeters square meters (sqFeet square feet)
ELSE
  sqFeet = length * width
  sqMeters = sqFeet * 0.092903
  PRINT The area of the room is sqFeet square fett (sqMeters square meters)
*/

const readline = require('readline-sync');

function getUnit() {
  readline.setPrompt("Enter the unit type: 1) Meters 2) Feet\n");
  let unit;
  do {
    unit = readline.prompt();
  } while (unit !== '1' && unit !== '2');
  return unit === '1' ? 'meters' : 'feet';
}

function getLength(unit) {
  readline.setPrompt(`Enter the length of the room in ${unit}:\n`);
  return Number(readline.prompt());
}

function getWidth(unit) {
  readline.setPrompt(`Enter the length of the room in ${unit}:\n`);
  return Number(readline.prompt());
}

function calculateRoom() {
  const unit = getUnit();
  const length = getLength(unit);
  const width = getWidth(unit);

  let sqMeters;
  let sqFeet;

  if (unit === 'meters') {
    sqMeters = length * width;
    sqFeet = sqMeters * 10.7639;
    console.log(`The area of the room is ${sqMeters.toFixed(2)} square meters (${sqFeet.toFixed(2)} square feet).`);
  } else {
    sqFeet = length * width;
    sqMeters = sqFeet * 0.092903;
    console.log(`The area of the room is ${sqFeet.toFixed(2)} square feet (${sqMeters.toFixed(2)} square meters).`);
  }
}

calculateRoom();
/* Easy 5.12: After Midnight (Part 2)

Instructions:
- As seen in the previous exercise, the time of day can be represented as the number of minutes before or after midnight.
  - If the number of minutes is positive, the time is after midnight.
  - If the number of minutes is negative, the time is before midnight.
- Write two functions that each take a time of day in 24 hour format, and return the number of minutes before and after midnight, respectively.
- Both functions should return a value in the range 0..1439.
- You may not use javascript's Date class methods.

Input:
- A string in 24 hour format

Output:
- Number of minutes before or after midnight (depending on the function)

Rules:
- Return an integer
- Don't use any Date class methods

Questions:
-

Data:
- String (input)
- Array (processing)
- Numbers (processing)
- Number (integer, output)

Algorithm (after midnight):
Get a time: inputTimeString
Set a constant, containing the number of minutes in an hour (60): MINUTES_IN_HOUR
Set a constant, containing the number of hours in a day (24): HOURS_IN_DAY
Set a constant, containing the number of minutes in a day (MINUTES_IN_HOUR * HOURS_IN_DAY): MINUTES_IN_DAY
Set a variable to 0: outputMinutes
Turn inputTimeString into an array, splitting on ':':
  Assign the first element to a new variable: inputHours
  Assign the second element to a new variable: inputMinutes
  Turn inputHours and inputMinutes into numbers
Multiply inputHours by MINUTES_IN_HOUR and add result to outputMinutes
Add inputMinutes to outputMinutes
Return remainder of outputMinutes / MINUTES_IN_DAY to account for "24:00" and "00:00" as input

Algorithm (before midnight):
Get a time: inputTimeString
Set a constant, containing the number of minutes in an hour (60): MINUTES_IN_HOUR
Set a constant, containing the number of hours in a day (24): HOURS_IN_DAY
Set a constant, containing the number of minutes in a day (MINUTES_IN_HOUR * HOURS_IN_DAY): MINUTES_IN_DAY
Set a variable to MINUTES_IN_DAY: outputMinutes
Turn inputTimeString into an array, splitting on ':':
  Assign the first element to a new variable: inputHours
  Assign the second element to a new variable: inputMinutes
  Turn inputHours and inputMinutes into numbers
Multiply inputHours by MINUTES_IN_HOUR and subtract result from outputMinutes
Subtract inputMinutes from outputMinutes
Return remainder of outputMinutes / MINUTES_IN_DAY to account for "24:00" and "00:00" as input
*/

function afterMidnight(inputTimeString) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
  let outputMinutes = 0;

  let [inputHours, inputMinutes] = inputTimeString.split(':').map(num => Number(num));
  outputMinutes = inputHours * MINUTES_IN_HOUR;
  outputMinutes += inputMinutes;

  return outputMinutes % MINUTES_IN_DAY;
}

function beforeMidnight(inputTimeString) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
  let outputMinutes = MINUTES_IN_DAY;

  let [inputHours, inputMinutes] = inputTimeString.split(':');
  inputHours = Number(inputHours);
  inputMinutes = Number(inputMinutes);

  outputMinutes -= inputHours * MINUTES_IN_HOUR;
  outputMinutes -= inputMinutes;

  return outputMinutes % MINUTES_IN_DAY;
}

// Test cases
console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("24:00") === 0);
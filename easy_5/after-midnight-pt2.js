/* Easy 5.12: After Midight (Part 2)

Instructions:
- Write two functions
  - Each function should take a time of day in 24 hr format
  - One function should return the numbers of minutes before midnight
  - One function should return the numbers of minutes after midnight

Input:
- Time in 24 hour format, as a string

Output:
- Integer with number of minutes before or after midnight

Rules:
- I cannot use any Date class methods

Data:
- Input is a string
- ':' is delimiter between hours and minutes
- An array as intermediate data structure
- Output must be an integer (number of minutes)

Algorithm (afterMidnight):
- Get time in string format
- Split time string into an array
  - Turn hours to: timeHours
  - Assign minutes to: timeMinutes
- Turn timeHours into a number
  - Take remainer of division by 24 to account for time as 24:00
- Turn timeMinutes into a number
- Return (timeHours * 60) + timeMinutes

Algorithm (beforeMidnight):
- Get time in string format
- Get number of minutes in day: MINUTES_IN_DAY
- Split time string into an array
  - Turn hours to: timeHours
  - Assign minutes to: timeMinutes
- Turn timeHours into a number
  - Take remainer of division by 24 to account for time as 24:00
- Turn timeMinutes into a number
- Return (MINUTES_IN_DAY - afterMidnight(time)) % MINUTES_IN_DAY
  - Last remainder is to account for 0
*/

function afterMidnight(time) {
  const HOURS_PER_DAY = 24;
  const MINUTES_PER_HOUR = 60;
  let [ timeHours, timeMinutes ] = time.split(':').map(num => Number(num));

  // Account for 24:00
  timeHours %= HOURS_PER_DAY;
  let totalMinutes = (timeHours * MINUTES_PER_HOUR) + timeMinutes;
  return totalMinutes;
}

function beforeMidnight(time) {
  const MINUTES_PER_DAY = 24 * 60;
  return (MINUTES_PER_DAY - afterMidnight(time)) % MINUTES_PER_DAY;
}

// Test cases
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:05") === 1435);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
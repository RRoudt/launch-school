/* Easy 5.11: After Midnight (Part 1)

Instructions:
- Write a function that takes in an amount of minutes (integer)
- Return the time of day in 24-hour format (hh:mm)
- If the number of minutes is positive, the time is after midnight
- If the number of minutes is negative, the time is before midnight

Input:
- An integer (positive or negative)

Output:
- Time of day in 24-hour format (hh:mm)

Rules:
- Any integer can be an input (positive or negative)
- It's not allowed to use any Date class methods
- Hours and minutes should always be two digits (i.e. 05)

Data:
- Integer as input (negative or positive)
- String as output with time in 24-hour format ('hh:mm')

Algorithm:
- Get input integer: inputMinutes
- Set MINUTES_IN_DAY: 24 * 60
- Set totalMinutes: (MINUTES_IN_DAY + inputMinutes) % MINUTES_IN_DAY
  (the remainder is to account "out of day" numbers)
- If totalMinutes is less than 0:
  - Add totalMinutes and MINUTES_IN_DAY to get the correct number of minutes
- Set outputHours: totalMinutes / 24, rounded down
- Set outputMinutes: totalMinutes % 60
  (The minutes less than 60 remain, so the minutes less than one whole hour)
*/

function timeOfDay(inputMinutes) {
  const MINUTES_IN_DAY = 24 * 60;
  let totalMinutes = (MINUTES_IN_DAY + inputMinutes) % MINUTES_IN_DAY;

  if (totalMinutes < 0) {
    totalMinutes = MINUTES_IN_DAY + totalMinutes;
  }

  const outputHours = Math.floor(totalMinutes / 60);
  const outputMinutes = totalMinutes % 60;

  return `${String(outputHours).padStart(2, '0')}:${String(outputMinutes).padStart(2, '0')}`;
}

// Test cases
console.log(timeOfDay(0) === "00:00");      // true
console.log(timeOfDay(-3) === "23:57");     // true
console.log(timeOfDay(35) === "00:35");     // true
console.log(timeOfDay(-1437) === "00:03");  // true
console.log(timeOfDay(3000) === "02:00");   // true
console.log(timeOfDay(800) === "13:20");    // true
console.log(timeOfDay(-4231) === "01:29");  // true
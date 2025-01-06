/* Easy 5.11: After Midnight (Part 1)

Instructions:
- The time of day can be represented as the number of minutes before or after midnight.
  - If the number of minutes is positive, the time is after midnight.
  - If the number of minutes is negative, the time is before midnight.
- Write a function that takes a time using this minute-based format and returns the time of day in 24 hour format (hh:mm).
- Your function should work with any integer input.
- You may not use javascript's Date class methods.

Input:
- A positive or negative integer (minutes before or after midnight)

Output:
- A string, denoting the time of day in 24 hour format (hh:mm), based on the input integer

Rules:
- Accept any integer, positive or negative
  - If the number of minutes is positive, the time is after midnight.
  - If the number of minutes is negative, the time is before midnight.
- Return the time of day in 24 hour format (hh:mm) as a string
- Do not use JS's Date class methods

Data:
- Number (integer, input)
- Numbers (minutes and hours in day, processing)
- String (time in 24-hour format, output)

Algorithm:
Get an integer: inputMinutes
Set a constant, containing the number of minutes in an hour (60): MINUTES_IN_DAY
Set a constant, containing the number of hours in a day (24): HOURS_IN_DAY
Set a constant, containing the number of minutes in a day (MINUTES_IN_DAY * HOURS_IN_DAY): MINUTES_IN_DAY
Set a variable to 0, to contain the amount of minutes remaining after subtracting the inputMinutes from total number of minutes in a day: remainingMinutes
If inputMinutes is 0 or negative:
  Subtract the absolute value of inputMinutes from MINUTES_IN_DAY, then take the remainder of that divided by minutes in day, and store it in remainingMinutes
  Add the value of inputMinutes to MINUTES_IN_DAY, then take the remainder of that divided by minutes in day, and store it in remainingMinutes
Endif
  Set a variable to remainingMinutes % MINUTES_IN_HOUR: outputMinutes
  Set a variable to remainingMinutes / MINUTES_IN_HOUR, rounded down: outputHours
  Set a variable containing the string value of outputHours, padded with a '0' if necessary: outputHoursString
  Set a variable containing the string value of outputMinutes, padded with a '0' if necessary: outputMinutesString
  Return a string: {outputHoursString}:{outputMinutesString}
*/

function timeOfDay(inputMinutes) {
  const MINUTES_IN_HOUR = 60;
  const HOURS_IN_DAY = 24;
  const MINUTES_IN_DAY = MINUTES_IN_HOUR * HOURS_IN_DAY;
  let remainingMinutes = 0;

  if (inputMinutes <= 0) {
    remainingMinutes = MINUTES_IN_DAY - (Math.abs(inputMinutes) % MINUTES_IN_DAY);
  } else {
    remainingMinutes = MINUTES_IN_DAY + (inputMinutes % MINUTES_IN_DAY);
  }

  let outputMinutes = remainingMinutes % MINUTES_IN_HOUR;
  let outputHours = Math.floor(remainingMinutes / MINUTES_IN_HOUR) % HOURS_IN_DAY;

  let outputHoursString = String(outputHours).padStart(2, '0');
  let outputMinutesString = String(outputMinutes).padStart(2, '0');

  return `${outputHoursString}:${outputMinutesString}`;
}

// Test cases
console.log(timeOfDay(-4231) === "01:29");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(800) === "13:20");
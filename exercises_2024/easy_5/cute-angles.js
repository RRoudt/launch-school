/* Easy 5.1: Cute Angles

Instructions:
- Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds.
- You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

Input:
- A decimal number

Output:
- A string representing degrees, minutes, and seconds

Rules:
- 1 degree (˚) === 60 minutes
- 1 minute (') === 60 seconds
- Second (")
- Minutes and seconds should always have to digits (e.g. 05)

Questions:
Q: What to return when angle is a whole number?
  A: Just the degrees, with the minutes and seconds both 00
Q: What to return when angle === 0?
  A: 0°00'00"
Q: What to return when angle === 360?
  A: 360°00'00" or 0°00'00"
Q: How many digits can there be after the decimal?
  A: 6 or more

Data:
- Number (input)
- String (input)

Algorithm:
Get a number: angle
Set degrees: angle, rounded down
Set minutes: (angle - degrees) * 60, rounded down
Set seconds: (((angle - degrees) * 60) - minutes) * 60, rounded down
Return a string: `${degrees}°${minutes (pad with 0 at the front)}'${seconds (pad with 0 at the front)}""
*/

function dms(angle) {
  let degrees = Math.floor(angle);
  let minutes = Math.floor((angle - degrees) * 60);
  let seconds = Math.floor((((angle - degrees) * 60) - minutes) * 60);

  return `${degrees}°${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
}

// Test cases
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
/* eslint-disable max-len */
/* Easy 5.1: Cute Angles

Instructions:
- Write a function that takes a floating point number representing an angle between 0 and 360 degrees and returns a string representing that angle in degrees, minutes, and seconds.
- You should use a degree symbol (˚) to represent degrees, a single quote (') to represent minutes, and a double quote (") to represent seconds.
- There are 60 minutes in a degree, and 60 seconds in a minute.

Input:
- Decimal number between 0 and 360 (both inclusive)

Output:
- String representing the input number in degrees, minutes, and seconds

Rules:
- Number before the decimal point is the amount of degrees
  - Degrees should be followed by the ° character
- Number after the decimal point needs to be converted to minutes and seconds
  - 1 degree = 60 minutes
    - Minutes should be followed by the ' character
  - 1 minute = 60 seconds
    - Seconds should be followed by the " character

Data:
- Integer or decimal number as input
- String as output
- Output should look like:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Algorithm:
- Get number: inputNum
- Round number down: roundedInputNum
- Check if roundedInputNum is equal to inputNum
  - If yes, return the string as: inputNum°00'00"
- Set restMinutes: (inputNum - roundedInputNum) * 60;
- Set roundedRestMinutes: restMinutes rounded down
- Set roundedRestSeconds: (restMinutes - roundedRestMinutes) * 60 rounded down
- Set restMinutesStr: string version of roundedRestMinutes, padded by '0' at the start if number is one number long
- Set restSecondsStr: string version of roundedRestSeconds, padded by '0' at the start if number is one number long
*/

function dms(inputNum) {
  const roundedInputNum = Math.floor(inputNum);
  if (inputNum === roundedInputNum) {
    return `${inputNum}°00'00"`;
  }
  let restMinutes = (inputNum - roundedInputNum) * 60;
  let roundedRestMinutes = Math.floor(restMinutes);
  let roundedRestSeconds = Math.floor((restMinutes - roundedRestMinutes) * 60);
  let restMinutesStr =  String(roundedRestMinutes).padStart(2, '0');
  let restSecondsStr = String(roundedRestSeconds).padStart(2, '0');

  return `${roundedInputNum}°${restMinutesStr}'${restSecondsStr}"`;
}

// Test cases
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
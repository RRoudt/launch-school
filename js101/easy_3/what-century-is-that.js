/* JS101 Small Problems: Easy 3.10: What Century is That?

Instructions:
- Write a function that takes a year as input and return the century
- The return value should be a string that begins with the century number
- The return value should end with 'st', 'nd', 'rd' or 'th' as appropriate

Inputs:
- Year as integer

Outputs:
- Century number with appropriate 'st', 'nd', 'rd' or 'th' at end

Rules:
- Centuries ending with '1' should return 'st' at end
- Centuries ending with '2' should return 'nd' at end
- Centuries ending with '3' should return 'rd' at end
- All other centuries should return 'th' at end

Pseudocode:
- Set and get: year
- Divide year by 100, rounded up, to get century number: century
- Turn century into string to check last number of century: centuryStr
- Get last digit of centuryStr: centuryLastChar
- Get second to last digit of centuryStr: centurySecondLastChar
- Check last numbers of century to return appropriate string:
  - If centurySecondLastChar equals '1':
    - Return century number + 'th'
  - If centuryLastChar equals '1': Return century number + 'st'
  - If centuryLastChar equals '2': Return century number + 'nd'
  - If centuryLastChar equals '3': Return century number + 'rd'
  - Else: Return century number + 'th'
*/

function century(year) {
  const century = Math.ceil(String(year / 100));
  const centuryStr = century.toString();
  const centuryLastChar = centuryStr[centuryStr.length - 1];
  const centurySecondLastChar = centuryStr[centuryStr.length - 2];

  if (centurySecondLastChar === '1') {
    return centuryStr + 'th';
  } else if (centuryLastChar === '1') {
    return centuryStr + 'st';
  } else if (centuryLastChar === '2') {
    return centuryStr + 'nd';
  } else if (centuryLastChar === '3') {
    return centuryStr + 'rd';
  } else {
    return centuryStr + 'th';
  }
}

// Test cases
console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
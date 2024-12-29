/* Easy 3.10: What Century is That?

Instructions:
- Write a function that takes a year as input and returns the century.
- The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
- New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Input:
- Year

Output:
- Century (indicating what number century it is)

Rules:
-  New centuries begin in years that end with 01
- If century ends in '1', add 'st' to end
- If century ends in '2', add 'nd' to end
- If century ends in '3', add 'rd' to end
- If century ends in any othe rnumber, add 'th' to end

Questions:
Q: Are all years in CE?
  A: Yes, from the test cases this seems to be the case

Data:
- Input:
  - Number
- Processing:
  - Number
  - String
- Output:
  String

Algorithm:
Get year
Set century: year / 100, rounded up and turned into a string
If century ends with '11' OR '12' OR '13':
  Add 'th' to end of century
Else if century ends in '1':
  Add 'st' to end of century
Else if century ends in '2':
  Add 'nd' to end of century
Else if century ends in '3':
  Add 'rd' to end of century
Else:
  Add 'th' to end of century
Endif
Return century
*/

function century(year) {
  let century = String(Math.ceil(year / 100));

  if (century.endsWith('11') || century.endsWith('12') || century.endsWith( '13')) {
    century += 'th';
  } else if (century.endsWith('1')) {
    century += 'st';
  } else if (century.endsWith('2')) {
    century += 'nd';
  } else if (century.endsWith('3')) {
    century += 'rd';
  } else {
    century += 'th';
  }

  return century;
}

// Test cases
console.log(century(2000) === "20th");        // "20th"
console.log(century(2001) === "21st");        // "21st"
console.log(century(1965) === "20th");        // "20th"
console.log(century(256) === "3rd");          // "3rd"
console.log(century(5) === "1st");            // "1st"
console.log(century(10103) === "102nd");      // "102nd"
console.log(century(1052) === "11th");        // "11th"
console.log(century(1127) === "12th");        // "12th"
console.log(century(11201) === "113th");      // "113th"
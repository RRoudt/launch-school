/* JS100 - Arrays - 10. Passcode

Instructions:
+ We generated parts of a passcode and now want to combine them into a string. Write some code that returns a string, with each portion of the passcode separated by a hyphen (-).

Input:
+ Array of strings

Output:
+ String

Rules:
+ New string needs to join array elements with a hyphen

Data:
+ Input: Array
+ Output: String
*/

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

function getPasscode(passcode) {
  return passcode.join('-');
}

// Test case
console.log(getPasscode(passcode));
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'
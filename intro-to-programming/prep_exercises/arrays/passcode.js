/* Exercise 10: Write some code that returns a string, with each portion of the passcode separated by a hyphen (-). */

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
let passcodeString = passcode.join('-');

console.log(passcodeString);
// Expected return value: '11-jZ5-hQ3f*-8!7g3-p3Fs'

// How can you join all elements of an array with no separator character?
let passcodeStringGlued = passcode.join('');

console.log(passcodeStringGlued);
// Expected return value: 11jZ5hQ3f*8!7g3p3Fs
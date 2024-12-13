const rlSync = require('readline-sync');

// Collect input from user (keep asking as long as no integer is entered)
const getNumber = () => {
  let numberToCheck;
  do {
    numberToCheck = Number(rlSync.question("What number?\n"));
  } while (!Number.isInteger(numberToCheck));
  return numberToCheck;
}

// Determine if given number is even or odd
const evenOrOdd = (number = getNumber()) => {
  return number % 2 === 0 ? 'even' : 'odd';
}

console.log(evenOrOdd());
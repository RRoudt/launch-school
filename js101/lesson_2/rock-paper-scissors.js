/* Lesson Exercise 2.28: Rock Paper Scissors

Input:
- User chooses rock, paper, or scissors
- Computer randomly chooses rock, paper, or scissors

Output:
- The winner is displayed

Rules:
- If player a chooses rock and player b chooses scissors, player a wins.
- If player a chooses paper and player b chooses rock, player a wins.
- If player a chooses scissors and player b chooses paper, player a wins.
- If both players choose the same item, neither player wins. It's a tie.

Pseudocode:
- Set readline to be able to collect user input
- Set VALID_CHOICES to array with possible user inputs
- Set CHOICE_KEYS based on VALID_CHOICES array to provide quick input
- While userChoice does not equal 0, 1, or 2:
  - Get userChoice (0. rock, 1. paper, or 2. scissors)
- Generate compChoice, a random number from 0 to 2 (inclusive)
- Compare userChoice and compChoice and display winner
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const CHOICE_KEYS = Object.keys(VALID_CHOICES);

// Clear prompt from computer
function prompt(msg) {
  console.log(`=> ${msg}`);
}

// Winning logic
// 0 = rock, 1 = paper, 2 = scissors
function displayWinner(userChoice, compChoice) {
  prompt(`You chose:  ${VALID_CHOICES[userChoice]}`);
  prompt(`Comp chose: ${VALID_CHOICES[compChoice]}`);
  if (
    (userChoice === 0 && compChoice === 2) ||
    (userChoice === 1 && compChoice === 0) ||
    (userChoice === 2 && compChoice === 1)) {
    prompt("You win!");
  } else if (
    (userChoice === 0 && compChoice === 1) ||
    (userChoice === 1 && compChoice === 2) ||
    (userChoice === 2 && compChoice === 0)) {
    prompt("Comp wins!");
  } else {
    prompt("It's a tie!");
  }
}

// Present possible choices to user
prompt(`Choose one (${CHOICE_KEYS.join(', ')}):`);
for (let index = 0; index < VALID_CHOICES.length; index += 1) {
  prompt(`${index} ${VALID_CHOICES[index]}`);
}

// Collect input from user, and keep asking until a valid input is given
let userChoice = readline.question();
while (!CHOICE_KEYS.includes(userChoice)) {
  prompt(`That's not a valid choice. Please choose ${CHOICE_KEYS.join(', ')}:`);
  userChoice = readline.question();
}

// Turn user input from string into number
userChoice = Number(userChoice);

// Generate computer's choice
let compChoice = Math.floor(Math.random() * VALID_CHOICES.length);

// Invoke funtion to display winner
displayWinner(userChoice, compChoice);
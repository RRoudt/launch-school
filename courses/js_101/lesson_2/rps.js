/* JS101 - Lesson 2.28: Rock Paper Scissors

Algorithm:
- Ask user for a choice: rock, paper, scissors
- Let the computer pick one choice
  - Generate a random number
    - Between 0 (inclusive) and the total number of valid choices (exclusive)
  - Get string version of computer choice
- Show choice of user and computer
*/

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose: ${userChoice}. Computer chose: ${computerChoice}`);

  if ((userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')) {
    prompt(`🥳 You won!`);
  } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
            (userChoice === 'paper' && computerChoice === 'scissors') ||
            (userChoice === 'scissors' && computerChoice === 'rock')) {
    prompt(`🤖 Computer won!`);
  } else {
    prompt(`🧑‍💻 It's a draw!`);
  }
}

while (true) {
  prompt(`Welcome to RPS!`);
  prompt(`Here are your choices:`);
  let userChoice = VALID_CHOICES[readline.keyInSelect(VALID_CHOICES, ('=> Choose one'))];

  if (userChoice === undefined) break;

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(userChoice, computerChoice);

  let stopPlaying = readline.keyInSelect(['PLAY AGAIN'], '=> Press 1 to play again');

  if (stopPlaying !== 0) break;
}
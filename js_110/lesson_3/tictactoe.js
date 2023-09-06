/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* Lesson 3.4: Tic Tac Toe - Step 1 - Set up and display the board

Instructions:
1.  Display the initial empty 3x3 board.
2.  Ask the user to mark a square.
3.  Computer marks a square.
4.  Display the updated board state.
5.  If it's a winning board, display the winner.
6.  If the board is full, display tie.
7.  If neither player won and the board is not full, go to #2
8.  Play again?
9.  If yes, go to #1
10. Goodbye!

Input:
- Game choices by the user

Output:
- Winner (user, computer, or tie)

Rules:
- First the user marks a square
- Second the computer marks a square
- After the user and computer marked a square, the board must update
- After a game finished (there's a winner or a tie), ask user if they want to play again
- Each square is 3 rows in height, and 5 spaces in width

Questions:
-

Data:
- Object to store board data

Algorithm:
Main game loop:
- Initialize an empty board
  - Set every value in the board data object to a space
  - Output the board template to the console: displayBoard
- Ask the user to mark a square
- Let computer mark a square
- Check whether there's a winner
  - If yes,
  - If not, ask the user to mark a square

Helper functions:
- joinOr
  - Get an array of values: arr
  - Get a delimiter: delimiter
  - Get a joining word for the last element: joinerWord
  - Set a new empty string: outputStr
  - Check length of arr
    - If empty, set outputStr to an empty string
    - If one, set outputStr to that value as string
    - If two, set outputStr to those values separated by joinerWord
    - Else:
      - Iterate over arr, until the second to last element
        - Add the current element plus the delimiter to outputStr
      - Add joinerWord plus the last element to the outputStr
  - Return outputStr
*/

const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
  console.clear();
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('     |     |     ');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('     |     |     ');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}  `);
  console.log('     |     |     ');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function joinOr(arr, delimiter = ', ', joinerWord = 'or') {
  let outputStr = '';

  if (arr.length === 0) {
    outputStr = '';
  } else if (arr.length === 1) {
    outputStr = String(arr[0]);
  } else if (arr.length === 2) {
    outputStr = `${arr[0]} ${joinerWord} ${arr[1]}`;
  } else {
    for (let index = 0; index < arr.length - 1; index++) {
      outputStr += arr[index] + delimiter;
    }
    outputStr += joinerWord + ' ' + arr[arr.length - 1];
  }

  return outputStr;
}

function validChoices(board) {
  // Valid choices are the values that are still spaces (the initial marker)
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let choice;

  // Ask user to make a choice until a valid input is given
  while (true) {
    prompt(`Choose a square (${joinOr(validChoices(board))})`);
    prompt(`${board['1'] === ' ' ? '1' : ' '}|${board['2'] === ' ' ? '2' : ' '}|${board['3'] === ' ' ? '3' : ' '}`);
    prompt('-|-|-');
    prompt(`${board['4'] === ' ' ? '4' : ' '}|${board['5'] === ' ' ? '5' : ' '}|${board['6'] === ' ' ? '6' : ' '}`);
    prompt('-|-|-');
    prompt(`${board['7'] === ' ' ? '7' : ' '}|${board['8'] === ' ' ? '8' : ' '}|${board['9'] === ' ' ? '9' : ' '}`);
    choice = readline.question().trim();

    // Check whether the user choice is valid
    if (validChoices(board).includes(choice)) break;
    prompt("Sorry, that's not a valid choice.");
  }

  board[choice] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let remainingValidChoices = validChoices(board);

  // Generate a random number, based on amount of valid choices left
  let randomIndex = Math.floor(Math.random() * remainingValidChoices.length);
  let square = remainingValidChoices[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  // When there are no more valid choices, that means the board is full
  return validChoices(board).length === 0;
}

function detectWinner(board) {
  // Combinations of winning lines
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // columns
    [1, 5, 9], [3, 5, 7]              // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return 'Player';

    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

// Main game loop
while (true) {
  let board = initializeBoard();

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y/n)');
  let playAgain = readline.question().toLowerCase()[0];
  if (playAgain !== 'y') break;
}

console.clear();
prompt('Thanks for playing Tic Tac Toe!');
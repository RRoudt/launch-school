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
- Initialize an empty board
  - Set every value in the board data object to a space
  - Output the board template to the console: displayBoard
- Ask the user to mark a square
- Let computer mark a square
- Check whether there's a winner
  - If yes,
  - If not, ask the user to mark a square
*/

const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMPUTER_MARKER = 'O';

function displayBoard(board) {
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

function initializeBoard(board) {
  for (let square in board) {
    board[square] = INITIAL_MARKER;
  }
}

function prompt(str) {
  console.log(`=> ${str}`);
}

function validChoices(board) {
  // Valid choices are the values that are still spaces (the initial marker)
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let choice;

  // Ask user to make a choice until a valid input is given
  while (true) {
    prompt(`Choose a square (${validChoices(board).join(', ')})`);
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

let boardData = {
  1: ' ',  // top left
  2: ' ',  // top center
  3: ' ',  // top right
  4: ' ',  // middle left
  5: ' ',  // middle center
  6: ' ',  // middle right
  7: ' ',  // bottom left
  8: ' ',  // bottom center
  9: ' ',  // bottom right
};

initializeBoard(boardData);
displayBoard(boardData);
playerChoosesSquare(boardData);
computerChoosesSquare(boardData);
displayBoard(boardData);
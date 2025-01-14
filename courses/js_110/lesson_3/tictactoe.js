/* JS110 - Lesson 3: Tic Tac Toe walkthough

High-level algorithm:
1. Display the initial empty 3x3 board
2. Ask player to mark a square
3. Let computer mark a square
4. Display the updated board
5. If there's a winning board:
    Display winner
6. If the board is full without a winner:
    Display tie
7. If no winner and no tie:
    Go to #2
8. Ask to play again:
    If yes:
      Go to #1
    If no:
      Say goodbye

Algorithm:
Display the initial empty 3x3 board:
  Create empty board values:
    Set an empty object: board
    Start a loop from 1 to 9 (inclusive):
      Add a key-value pair to the board object:
        Key: String version of the current loop number
        Value: ' ' (one space)
    End looping
    Return the generated (empty) board, and store it to a variable
  Display the board, based on the empty board values

Ask player to mark a square:
  Get a board as input: board
  Set an emty variable to store the player choice: square
  While board doesn't have square as a key OR square is not marked by the player or computer:
    Ask user to pick a square
  End while
  Set square on board to player choice

Let computer mark a square:
  Get the available squares
  Pick a random available square:
    Generate a number between 0 and the number of available squares
  Set the square on the board to the picked square
*/
 
const readline = require('readline-sync');
const PLAYER_MARKER = '🆇';
const COMPUTER_MARKER = '🅾';

function prompt(msg) {
  return console.log(`=> ${msg}`);
}

function availableSquares(board) {
  return Object.keys(board)
               .filter(key => {
                 return board[key] !== PLAYER_MARKER && board[key]  !== COMPUTER_MARKER
                });
}

function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = square;
  }

  return board;
}


function playerChoosesSquare(board) {
  let square;

  while (!board[square] || board[square] === PLAYER_MARKER || board[square] === COMPUTER_MARKER) {
    prompt(`Choose an available square
      (${availableSquares(board).join(', ')}):`);
    
    square = readline.question().trim();

    displayBoard(board);

    if (!board[square] || board[square] === PLAYER_MARKER || board[square] === COMPUTER_MARKER) {
      prompt("That's not a valid choice");
    }
  }

  board[square] = PLAYER_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * availableSquares(board).length);

  let square = availableSquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

let board = initializeBoard();

displayBoard(board);
playerChoosesSquare(board);
displayBoard(board);
computerChoosesSquare(board);
displayBoard(board);
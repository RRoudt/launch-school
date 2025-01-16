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

Display the updated board until there's a winner or a tie:
  Ask player to mark a square
  Let computer mark a square
  Display the board
  Check if someone won:
    If there is a winner:
      Return true
    Else:
      Return false
    Endif
  Check if the board is full:
    If the are no more available squares:
      The board is full
    Else:
      The board is not full
    End if

Detect winner:
  Set a constant containing the winning lines: WINNING_LINES
  If the human marker fully occupies a winning line:
    Return "Player"
  Else if the computer marker fully occupies a winning line:
    Return "Computer"
  Else:
    Return null
  Endif

joinOr function:
Get a list of values: inputArr
Get a separator and set it to ", " by default: separator
Get a join word and set it to "or" by default: joinWord
If inputArr is of length 0:
  Return empty string
If inputArr is of length 1:
  Return only value of inputArr
Else if inputArr is of length 2:
  Return first element + separator + second element
Else:
  Return Join the joined together inputArray until the second to last element:
  Use the separator to join the elements together, add the join word and last element

Keep score:
Set a variable to 0: playerScore
Set a variable to 0: computerScope
Set a constant to maximum games in match: MAX_GAMES
Set a constant to games needed to win match ()MAX_GAMES / 2, rounded up): WINNING_SCORE
If player wins:
  Increment playerScore by 1
Else if computer wins:
  Increment computerScore by 1
Else:
  Increment playerScore by 1
  Increment computerScore by 1
End if
If no one meets the winning condition:
  Play again
Else:
  Show winner
*/
 
const readline = require('readline-sync');
const PLAYER_MARKER = '□';
const COMPUTER_MARKER = '■';
const MAX_GAMES = 5;
const WINNING_SCORE = Math.ceil(MAX_GAMES / 2);

function prompt(msg) {
  return console.log(`=> ${msg}`);
}

function delay(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function joinOr(inputArr, separator = ', ', joinWord = 'or') {
  switch (inputArr.length) {
    case 0:
      return '';
    case 1:
      return `${inputArr[0]}`;
    case 2:
      return `${inputArr[0]} ${joinWord} ${inputArr[1]}`;
    default:
      return `${inputArr
        .slice(0, -1)
        .join(separator)} ${joinWord} ${inputArr[inputArr.length - 1]}`;
  }
}

function displayBoard(board, playerScore, computerScore) {
  console.clear();

  console.log(`You are: ${PLAYER_MARKER}. Computer is: ${COMPUTER_MARKER}`);
  console.log(`Your score: ${playerScore}. Computer's score: ${computerScore}`);
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

function availableSquares(board) {
  return Object.keys(board)
               .filter(key => {
                 return board[key] !== PLAYER_MARKER && board[key]  !== COMPUTER_MARKER;
                });
}

function playerChoosesSquare(board, playerScore, computerScore) {
  let square;

  while (!board[square] || board[square] === PLAYER_MARKER || board[square] === COMPUTER_MARKER) {
    prompt(`Choose an available square
   (${joinOr(availableSquares(board))}):`);
    
    square = readline.question().trim();

    displayBoard(board, playerScore, computerScore);

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

function boardFull(board) {
  return availableSquares(board).length === 0;
}

function detectWinner(board) {
  const WINNING_LINES = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],  // Rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9],  // Columns
    [1, 5, 9], [3, 5, 7]              // Diagonals
  ];

  for (let line of WINNING_LINES) {
    let [sq1, sq2, sq3] = line;

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
      board[sq3] === PLAYER_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let board = initializeBoard();

  while (true) {
    displayBoard(board, playerScore, computerScore);

    playerChoosesSquare(board, playerScore, computerScore);
    computerChoosesSquare(board);
    displayBoard(board, playerScore, computerScore);

    if (detectWinner(board) === "Player") {
      playerScore += 1;
      board = initializeBoard();
    } else if (detectWinner(board) === "Computer") {
      computerScore += 1;
      board = initializeBoard();
    } else if (boardFull(board)) {
      playerScore += 1;
      computerScore += 1;
      board = initializeBoard();
    }

    if (playerScore === WINNING_SCORE || computerScore === WINNING_SCORE) break;
  }

  displayBoard(board, playerScore, computerScore);



  if (playerScore === WINNING_SCORE) {
    prompt(`Player won!`);
  } else if (computerScore === WINNING_SCORE) {
    prompt(`Computer won!`);
  } else {
    prompt("It's a tie!");
  }

  prompt("Play again? (y/n)");
  let playAgain = readline.question().toLowerCase()[0];
  if (playAgain !== 'y') break;
}   


prompt("Thanks for playing Tic Tac Toe!");

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

function displayBoard(data) {
  console.log('');
  console.log('     |     |     ');
  console.log(`  ${data['topLeft']}  |  ${data['topCenter']}  |  ${data['topRight']}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('     |     |     ');
  console.log(`  ${data['middleLeft']}  |  ${data['middleCenter']}  |  ${data['middleRight']}  `);
  console.log('     |     |     ');
  console.log('-----|-----|-----');
  console.log('     |     |     ');
  console.log(`  ${data['bottomLeft']}  |  ${data['bottomCenter']}  |  ${data['bottomRight']}  `);
  console.log('     |     |     ');
  console.log('');
}

function initializeBoard(data) {
  for (let square in data) {
    data[square] = ' ';
  }
}

let boardData = {
  topLeft:      ' ',
  topCenter:    ' ',
  topRight:     ' ',
  middleLeft:   ' ',
  middleCenter: ' ',
  middleRight:  ' ',
  bottomLeft:   ' ',
  bottomCenter: ' ',
  bottomRight:  ' ',
};

initializeBoard(boardData);

displayBoard(boardData);
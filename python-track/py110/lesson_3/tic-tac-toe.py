"""
Build a single player Tic Tac Toe game where a user plays against the computer.

Tic Tac Toe is a 2-player game played on a 3x3 grid called the board.
Each player takes a turn and marks a square on the board.
The first player to get 3 squares in a row wins--
horizontally, vertically, or diagonally.
If all 9 squares are filled and neither player has 3 in a row,
the game ends in a tie.

Input:
- User input (via terminal prompt)
- Computer choice (randomly via script)

Output:
- Board (via terminal)
- Winner/tie message (via terminal)

Explicit rules:
- The game has 2 players: a human user and the computer
- The game is played on a board
- The board is a 3x3 grid
- Each player takes a turn each round
- The first player getting 3 squares in a row, wins
- A valid row is horizontal, vertical, or diagonal
- A game is a tie when neither player has filled 3 in a row, 
  and the board is full (all squares are filled)

Implicit rules:

Questions:
- Which player starts?

Examples:

Data:
Input:
Intermediate:
- 
Output:

Algorithm:
Main program:
1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!


Keep track of how many times the player and computer each win,
and report the scores after each game.
The first player to win 5 games wins the overall match
(a series of 2 or more games).
The score should reset to 0 for each player when beginning a new match.
Don't use any global variables.
However, you may want to use a global constant to represent the number of 
games needed to win the match.

1. Determine winner
2. Add 1 to player_games_won or computer_games_won, depending on who won
    - 2A. If it's a tie, give each a point
3. Check if either player or computer have necessary games to win
    - 3A. If both player and computer have necessary games to win match,
   report that it's a tie.


Make the computer defensive-minded so that, when an immediate threat 
exists, it will try to defend the 3rd square.
An immediate threat occurs when the human player has 2 squares in a row with
the 3rd square unoccupied.
If there's no immediate threat, the computer can pick a random square.

find_at_risk_square(board):
- 1. Receive a board
- 2. If any of the lines on the board has two player markers and the
     third square is still empty:
    - 2A. Place computer marker on empty square
- 3. If any of the lines on the board has two computer markers and the
     third square is still empty:
    - 3A. Place computer marker on empty square
"""

import os
import random

PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'
GAMES_NEEDED_TO_WIN_MATCH = 3

def prompt(message):
    print(f'==> {message}')

def display_board(board):
    os.system('clear')

    prompt(f"You are {PLAYER_MARKER}. Computer is {COMPUTER_MARKER}")    
    print('')
    print('     |     |')
    print(f"  {board[1]}  |  {board[2]}  |  {board[3]}")
    print('     |     |')
    print('-----+-----+-----')
    print('     |     |')
    print(f"  {board[4]}  |  {board[5]}  |  {board[6]}")
    print('     |     |')
    print('-----+-----+-----')
    print('     |     |')
    print(f"  {board[7]}  |  {board[8]}  |  {board[9]}")
    print('     |     |')
    print('')

def initialize_board():
    return {square: square for square in range(1, 10)}

def empty_squares(board):
    return [
        key
        for key, value
        in board.items()
        if value != PLAYER_MARKER and value != COMPUTER_MARKER
    ]

def player_chooses_square(board):
    while True:
        prompt('Choose a square (1-9):')
        square = int(input().strip())

        if square in empty_squares(board):
            break

        prompt("Sorry, that's not a valid choice.")

    board[square] = PLAYER_MARKER

def computer_chooses_square(board):
    if len(empty_squares(board)) == 0:
        return
    square = random.choice(empty_squares(board))
    board[square] = COMPUTER_MARKER

def board_full(board):
    return len(empty_squares(board)) == 0

def detect_game_winner(board):
    winning_lines = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],  # rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9],  # columns
        [1, 5, 9], [3, 5, 7]              # diagonals
    ]

    for line in winning_lines:
        sq1, sq2, sq3 = line
        if (board[sq1] == PLAYER_MARKER
                and board[sq2] == PLAYER_MARKER
                and board[sq3] == PLAYER_MARKER):
            return 'Player'
        elif (board[sq1] == COMPUTER_MARKER
                and board[sq2] == COMPUTER_MARKER
                and board[sq3] == COMPUTER_MARKER):
            return 'Computer'
    
    return None

def detect_match_winner(player_score, computer_score):
    if (player_score >= GAMES_NEEDED_TO_WIN_MATCH
        and player_score > computer_score):
        return 'Player'
    elif (computer_score >= GAMES_NEEDED_TO_WIN_MATCH
          and player_score < computer_score):
        return 'Computer'
    elif (computer_score >= GAMES_NEEDED_TO_WIN_MATCH
          and player_score >= GAMES_NEEDED_TO_WIN_MATCH):
        return 'Tie'

    return None


def someone_won_game(board):
    return bool(detect_game_winner(board))

def someone_won_match(player_score, computer_score):
    return bool(detect_match_winner(player_score, computer_score))


def play_tic_tac_toe():
    player_score = 0
    computer_score = 0

    while True:

        board = initialize_board()

        while True:
            prompt(f'Player score: {player_score}')
            prompt(f'Computer score: {computer_score}')
            display_board(board)

            player_chooses_square(board)
            if someone_won_game(board) or board_full(board):
                break

            computer_chooses_square(board)
            if someone_won_game(board) or board_full(board):
                break
            
        display_board(board)

        if someone_won_game(board):
            game_winner = detect_game_winner(board)

            if game_winner == "Player":
                player_score += 1
            else:
                computer_score += 1

            prompt(f"{game_winner} won the game and a point!")
        else:
            player_score += 1
            computer_score += 1
            prompt("The game is a tie! Both earn a point")

        if someone_won_match(player_score, computer_score):
            match_winner = detect_match_winner(player_score, computer_score)

            if match_winner == "Player":
                prompt("Player won match!")
            elif match_winner == "Computer":
                prompt("Computer won match!")
            else:
                prompt("The match is a tie!")

            prompt("Play again? (y/n)")
            answer = input().lower()

            while answer != 'y' and answer != 'n':
                prompt("Sorry, that is not a valid choice. Please choose y/n")
                prompt("Play again? (y/n)")
                answer = input().lower()

            if answer == 'n':
                break

            player_score = 0
            computer_score = 0

    prompt('Thanks for playing Tic Tac Toe!')

play_tic_tac_toe()
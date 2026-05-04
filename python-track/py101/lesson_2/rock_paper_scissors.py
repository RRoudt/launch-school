# build a Rock Paper Scissors game.
# Rock Paper Scissors is a simple game played between two opponents.
# Both opponents choose an item from rock, paper, or scissors.
# The winner is decided according to the following rules:
# If player a chooses rock and player b chooses scissors, player a wins.
# If player a chooses paper and player b chooses rock, player a wins.
# If player a chooses scissors and player b chooses paper, player a wins.
# If both players choose the same item, neither player wins. It's a tie.

# Our version of the game lets the user play against the computer.
# The game flow should go like this:
# The user makes a choice.
# The computer makes a choice.
# The winner is displayed.

import random
player_score = 0
computer_score = 0

VALID_CHOICES = ('rock', 'paper', 'scissors', 'lizard', 'spock')
WINNING_CONDITIONS = {
    'rock':     {'scissors', 'lizard'},
    'paper':    {'rock', 'spock'},
    'scissors': {'paper', 'lizard'},
    'lizard':   {'spock', 'paper'},
    'spock':    {'scissors', 'rock'}
}

def prompt(message):
    print(f"==> {message}")

def calculate_score(player, computer):
    global player_score, computer_score
    if player == computer:
        player_score += 1
        computer_score += 1
    elif computer in WINNING_CONDITIONS[player]:
        player_score += 1
    else:
        computer_score += 1


def display_winner(player, computer):
    prompt(f"You chose {player}, computer chose {computer}")

    if player == computer:
        prompt("It's a tie!")
    elif computer in WINNING_CONDITIONS[player]:
        prompt("Player wins!")
    else:
        prompt("Computer wins!")

def get_player_choice():
    print("--------------------------------------")
    prompt(f"Player score: {player_score} | Computer score: {computer_score}")
    prompt("Choose one:")
    for index, choice in enumerate(VALID_CHOICES):
        prompt(f"{index}: {choice}")

    while True:
        player_choice_input = input()
        try:
            player_choice_input = int(player_choice_input)
        except ValueError:
            prompt("That's not a valid choice. Please choose 0-4:")
            continue
        else:
            if player_choice_input not in range(len(VALID_CHOICES)):
                prompt("That's not a valid choice. Please choose 0-4:")
                continue
        break

    match player_choice_input:
        case 0:
            return VALID_CHOICES[0]
        case 1:
            return VALID_CHOICES[1]
        case 2:
            return VALID_CHOICES[2]
        case 3:
            return VALID_CHOICES[3]
        case 4:
            return VALID_CHOICES[4]

while True:
    player_choice = get_player_choice()

    computer_choice = random.choice(VALID_CHOICES)

    calculate_score(player_choice, computer_choice)
    display_winner(player_choice, computer_choice)

    if ((player_score == 3 or computer_score == 3) and
        (player_score != computer_score and player_score < 6)):
        prompt("Game ended. Final score:")
        prompt(f"Player: {player_score} points")
        prompt(f"Computer: {computer_score} points")

        prompt("Want to play again? y/n")
        continue_choice = input()

        while continue_choice not in ('y', 'n'):
            prompt("That's not a valid choice. Please choose y or n")
            continue_choice = input()

        if continue_choice != 'y':
            break

        player_score = 0
        computer_score = 0
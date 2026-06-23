"""
Build a game called Twenty-One.
x Twenty-One is very similar to Blackjack but stripped down a bit.
  For instance, Twenty-One doesn't have splits, double-downs, 
  and other complex plays.

- Deck: Start with a standard 52-card deck consisting of the 4 suits 
  (Hearts, Diamonds, Clubs, and Spades), and 13 values (2, 3, 4, 5, 6, 7, 8, 9, 
  10, Jack, Queen, King, Ace).
- Goal: The goal of Twenty-One is to try to get as close to 21 as possible 
  without going over. If you go over 21, it's a bust, and you lose.
- Setup:
    - The game consists of a dealer and a player.
    - Both participants are initially dealt a hand of two cards.
    - The player can see their two cards, but can only see one of the
      dealer's cards.
- Card values:
    - The cards with numbers 2 through 10 are worth their face value.
    - The Jack, Queen, and King are each worth 10.
    - The Ace can be worth 1 or 11 depending on circumstances.
        - Its value is determined each time a new card is drawn from the deck.
          For example, if the hand contains a 2, an Ace, and a 5, then the 
          total value of the hand is 18. In this case, the Ace is worth 11
          because the sum of the hand (2 + 11 + 5) doesn't exceed 21.
        - Now, say another card is drawn, and it happens to be an Ace.
          Your program must determine the value of both Aces. If the sum of
          the hand (2 + 11 + 5 + 11) exceeds 21, then one of the Aces must be
          worth 1, resulting in the hand's total value being 19. What happens
          if another card is drawn and it also happens to be an Ace?
            - It can get tricky if there are multiple Aces in a hand, so your
              program must account for that.
- Player turn:
    - The player always goes first, and can decide to either hit or stay.
    - A hit means the player wants to be dealt another card.
        - Remember, if his total exceeds 21, he will bust and lose the game.
    - The decision to hit or stay depends on the player's cards and what the 
      player thinks the dealer has.
        - For example, if the dealer is showing a "10" (the other card
          is hidden), and the player has a "2" and a "4", then the obvious
          choice is for the player to hit.
    - The player can continue to hit as many times as they want.
    - The turn is over when the player either busts or stays.
    - If the player busts, the game is over, and the dealer won.
- Dealer turn: When the player stays, it's the dealer's turn.
    - The dealer must follow a strict rule for determining whether to
    hit or stay: hit until the total is at least 17.
    - If the dealer busts, then the player wins.
- Comparing cards: When both the player and the dealer stay, it's time to
  compare the total value of the cards and see who has the highest value.

Input: hit or stay (via terminal)
Output: Winner

Rules:
- Start with a standard 52-card deck with 4 suits and 13 values for each suit
    - Suits: Hearts, Diamonds, Clubs, Spades
    - Values: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace
        - Numbered cards are worth their number in points
        - Jack, Queen, King are worth 10 points
        - Ace is worth 1 or 11 points (depending on whether it'd burst or not)
            - If an Ace would bust the player or dealer, it should count as 1
- At the start of a round, the player and dealer each get 2 cards
- The player can see both of their starting cards
- The player can see one of the dealer's starting cards
- The person reaching 21 wins
- Going over 21 means you bust (lose)
- The dealer hits until it has at least 17 points
- If the player busts, the dealer wins
- If the dealer busts, the player wins
- Once the player stays, it's the dealer's turn
- Once the dealer stays, the cards of player and dealer are compared
    - The person with the highest value wins

Examples:
Player: 10 and 7 --> 17
Dealer: Ace and Jack --> 21

Player: King and Queen --> 20
Dealer: Ace and Ace --> 12 (because 11 + 11 would bust, so one Ace counts as 1)

Data:
Input: Choice via terminal (hit or stay)
Intermediate:
- string: inputs and outputs via terminal
- integer: value of cards
- list: deck of cards?
    - Would a nested list work? Like: [['10', 'Hearts'], ['Jack', 'Hearts']]
- dict: deck of cards?
- tuple:
- set: 
Output: String (diplaying cards, their worth, and the winner)

Algorithm:
High-level:
x 1. Initialize deck
    x 1A. Generate deck of cards
        x Set a constant to the four suits as string: SUITS
        x Set a constant to the thirteen values as string: VALUES
        x Iterate through SUITS:
            x Iterate through VALUES:
                x Add a sublist to deck: [current value, current suit]
x 2. Deal cards to player and dealer
    x 2A. Randomly pick two cards from deck and add to player's card list
        x Remove dealt cards from deck
    x 2B. Randomly pick two cards from deck and add to dealer's card list
        x Remove dealt cards from deck
    x 2C. Print all player's cards, and first dealer's card to terminal
x 3. Player turn: hit or stay
    x repeat until bust or stay
x 4. If player busts, dealer wins.
x 5. Dealer turn: hit or stay
   x repeat while score < 17
x 6. If dealer busts, player wins.
x 7. Compare cards and declare winner.
"""

import os
import random
from subprocess import call

SUITS = ('Hearts', 'Diamonds', 'Clubs', 'Spades')
VALUES = ('2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack',
          'Queen', 'King', 'Ace')

def clear_display():
    call('clear' if os.name == 'posix' else 'cls')

def generate_deck():
    return [
        [value, suit]
        for suit in SUITS
        for value in VALUES
        ]

def draw_card(deck):
    random_index = int(random.random() * len(deck))
    return deck.pop(random_index)

def join_and(sequence, delimiter=', ', word='and'):
    if len(sequence) == 0:
        return ""

    if len(sequence) == 1:
        return f"{sequence[0]}"

    first_part = f"{delimiter.join([str(elem) for elem in sequence[:-1]])}"
    last_part = f"{word} {sequence[-1]}"
    return f"{first_part} {last_part}"

def is_valid_answer(answer):
    return answer.isalpha() and len(answer) == 1 and answer in ('h', 's')

def calculate_score(cards):
    values = [value for value, suit in cards]
    score = 0

    for value in values:
        if value not in ('Jack', 'Queen', 'King', 'Ace'):
            score += int(value)
        elif value in ('Jack', 'Queen', 'King'):
            score += 10
        else:
            score += 11

    for _ in range(values.count("Ace")):
        if score > 21:
            score -= 10

    return score

def is_busted(cards):
    return calculate_score(cards) > 21

def display_final_score(player_cards, dealer_cards):
    print("\n---------------------------")
    print("+++ Player +++")
    print(f"Cards: {join_and([card[0] for card in player_cards])}")
    print(f"Score: {calculate_score(player_cards)}")

    print("\n+++ Dealer +++")
    print(f"Cards: {join_and([card[0] for card in dealer_cards])}")
    print(f"Score: {calculate_score(dealer_cards)}\n")

def play_game():
    clear_display()

    deck = generate_deck()
    player_cards = [draw_card(deck) for _ in range (2)]
    dealer_cards = [draw_card(deck) for _ in range (2)]
    player_answer = ''

    print("Welcome to Twenty One!")
    print("Dealing cards...\n")
    print(f"Dealer has: {dealer_cards[0][0]} and unknown card")
    print(f"You have: {join_and([card[0] for card in player_cards])}")
    print(f"Score: {calculate_score(player_cards)}")

    while (not is_busted(player_cards)
           and player_answer != 's'
           and calculate_score(player_cards) < 21):
        print("Do you want to [h]it or [s]tay?")
        player_answer = input().lower()

        while not is_valid_answer(player_answer):
            print("Sorry, that's not a correct answer.")
            print("Please choose h to hit, or s to stay.")
            player_answer = input()

        if player_answer == 'h':
            player_cards.append(draw_card(deck))
            print(f"You pull a card and now have: "
                f"{join_and([card[0] for card in player_cards])}")
            print(f"Your score: {calculate_score(player_cards)}")

            if is_busted(player_cards):
                clear_display()
                print("Player busted! Dealer wins!")
                display_final_score(player_cards, dealer_cards)

    if not is_busted(player_cards):
        while calculate_score(dealer_cards) < 17 and not is_busted(dealer_cards):
            dealer_cards.append(draw_card(deck))
            print(f"Dealer pulls a card and now has: "
                f"{join_and([card[0] for card in dealer_cards])}")
            print(f"Dealer's score: {calculate_score(dealer_cards)}")

            if is_busted(dealer_cards):
                clear_display()
                print("Dealer busted! Player wins")
                display_final_score(player_cards, dealer_cards)

        if not is_busted(dealer_cards):
            clear_display()
            player_score = calculate_score(player_cards)
            dealer_score = calculate_score(dealer_cards)

            if player_score > dealer_score:
                print("Player wins!")
            elif player_score < dealer_score:
                print("Dealer wins!")
            else:
                print("It's a tie!")

            display_final_score(player_cards, dealer_cards)

def main():
    while True:
        clear_display()
        play_game()

        print("Do you to play again? y/n")
        play_again = input().lower()

        while play_again not in ('y', 'n'):
            print("Sorry, that's not a valid answer.")
            print("Do you to play again? y/n")
            play_again = input().lower()

        if play_again == 'n':
            break

main()
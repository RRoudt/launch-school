/*

Instructions:
- Build a simple game similar to Blackjack
  - Without splits, double-downs, or other complex plays
- Only hit and stay are given choices

Rules:
- The goal of the game is to get 21 or close
- You're bust (lose) when you have over 21
- The dealer and player are dealt 2 cards at the start
  - The player can see their 2 cards
  - The player can see 1 of the 2 dealer cards
- Number cards  are worth their face value
- Jack, Queen, and King, are worth 10 each
- Ace can be 11 or 1
  - If Ace would make more than 21, it counts as 1
- The player always goes first and decided to hit or stay
- The dealer will hit until it has at least 17
- If the dealer busts, the player wins
- If  player and dealer stay, the one with the most points wins

Data:
Input: Player choice (hit or stay)
Output: Who won
Processing:
- array to hold cards

Algorithm:
Initialize deck
Deal 2 cards (each) to player and dealer
Ask if player wants to hit or stay:
  Repeat until player busts or stays
  If player busts:
    Dealer wins
  Endif
Dealer hits until it reaches 17
  If dealer busts:
    Player wins
  Endif
Compare player and dealer cards to determine winner

Calculate total score:
Get an array with cards: cards
Iterate over cards, checking the value of the card:
  If card is an ace:
    If adding 11 to sum would go over 21:
      Add 1 to sum
    Else:
      Add 11 to sum
    Endif
  Else if card is a Jack, Queen, or King:
    Add 10 to sum
  Else:
    Add the value (as a number) to sum
  Endif
End iterating over cards and return sum

Draw card:
Remove a card from shuffledCards and store it in the hand

*/

const readline = require("readline-sync");
const ALL_CARDS = [
  ['♥', '1'], ['♥', '2'], ['♥', '3'], ['♥', '4'], ['♥', '5'], ['♥', '6'], ['♥', '7'], ['♥', '8'], ['♥', '9'], ['♥', '10'], ['♥', 'J'], ['♥', 'Q'], ['♥', 'K'], ['♥', 'A'],
  ['♦', '1'], ['♦', '2'], ['♦', '3'], ['♦', '4'], ['♦', '5'], ['♦', '6'], ['♦', '7'], ['♦', '8'], ['♦', '9'], ['♦', '10'], ['♦', 'J'], ['♦', 'Q'], ['♦', 'K'], ['♦', 'A'],
  ['♠', '1'], ['♠', '2'], ['♠', '3'], ['♠', '4'], ['♠', '5'], ['♠', '6'], ['♠', '7'], ['♠', '8'], ['♠', '9'], ['♠', '10'], ['♠', 'J'], ['♠', 'Q'], ['♠', 'K'], ['♠', 'A'],
  ['♣', '1'], ['♣', '2'], ['♣', '3'], ['♣', '4'], ['♣', '5'], ['♣', '6'], ['♣', '7'], ['♣', '8'], ['♣', '9'], ['♣', '10'], ['♣', 'J'], ['♣', 'Q'], ['♣', 'K'], ['♣', 'A']
];

function shuffle(array) {
  let outputArray = array.slice();

  for (let index = (outputArray.length - 1); index > 0; index -= 1) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [outputArray[index], outputArray[otherIndex]] =
      [outputArray[otherIndex], outputArray[index]];
  }

  return outputArray;
}

function total(cards) {
  return cards
    .map(card => card[1])
    .reduce((sum, value) => {
      let numberValue = Number(value);

      if (value === "A") {
        return (sum + 11) > 21 ? sum + 1 : sum + 11;
      } else if (['J', 'Q', 'K'].includes(value)) {
        return sum + 10;
      } else {
        return sum + numberValue;
      }
    }, 0);
}

function busted(hand) {
  return total(hand) > 21;
}

function drawCard(array) {
  return array.shift();
}

function getHandString(hand) {
  return hand
    .map(card => {
      return card[0] + card[1];
    })
    .join(" | ");
}

while (true) {
  console.clear();

  let shuffledCards = shuffle(ALL_CARDS);
  let playerHand = [drawCard(shuffledCards), drawCard(shuffledCards)];
  let dealerHand = [drawCard(shuffledCards), drawCard(shuffledCards)];

  while (true) {
    console.clear();

    let playerHandString = getHandString(playerHand);
    let dealerHandString = getHandString(dealerHand.slice(0, 1)) + " | XX";

    console.log(`Your score: ${total(playerHand)}`);
    console.log("Your cards:");
    console.log(playerHandString);

    console.log("Dealer's cards:");
    console.log(dealerHandString);

    console.log("Do you want to [H]it or [S]tay?");

    let answer = readline.question();
    if (answer[0].toLowerCase() === "h") {
      playerHand.push(drawCard(shuffledCards));
    }
    if (answer[0].toLowerCase() === "s" || busted(playerHand)) {
      break;
    }
  }

  while (total(dealerHand) < 17) {
    dealerHand.push(drawCard(shuffledCards));
  }

  console.clear();

  if (busted(playerHand)) {
    console.log("You got busted, dealer won!");
  } else if (busted(dealerHand)) {
    console.log("Dealer got busted, player won!");
  } else if (total(playerHand) === total(dealerHand)) {
    console.log("It's a tie!");
  } else if (total(playerHand) > total(dealerHand)) {
    console.log("Player won!");
  } else {
    console.log("Dealer won.");
  }

  console.log(`Your hand was: ${getHandString(playerHand)} (score: ${total(playerHand)})`);
  console.log(`Dealer's hand was: ${getHandString(dealerHand)} (score: ${total(dealerHand)})`);

  console.log("Do you want to play again? (y/n)");
  let playAgain = readline.question().toLowerCase()[0];

  while (playAgain !== "y" && playAgain !== "n") {
    console.log("Please enter a valid choice: y or n");
    playAgain = readline.question().toLowerCase()[0];
  }

  if (playAgain === "n") break;

}

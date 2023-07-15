const rlSync = require('readline-sync')
let advice = "";

let weather = rlSync.question("What's the weather like?\n").toLowerCase();

switch (weather) {
  case "sunny":
    advice = "It's a beautiful day, enjoy it!";
    break;
  case "rainy":
    advice = "Grab your umbrella.";
    break;
  case "stormy":
    advice = "Fasten the garden furniture!";
    break;
  default:
    advice = "Better stay inside.";
}

console.log(advice);
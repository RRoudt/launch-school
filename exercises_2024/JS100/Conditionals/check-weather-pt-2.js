/*
Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. Feel free to add more cases besides 'sunny' and 'rainy'.

Rules:
+ If weather === "sunny", log "It's a beautiful day!"
+ If weather === "rainy", log "Grab your umbrella."
+ If weather is something else, log "Let's stay inside."
*/

// Set some choices for weather
let weatherChoices = ["sunny", "rainy", "stormy", "hurracaney"]

// Generate weather
let randomWeather = Math.floor(Math.random() * weatherChoices.length);

// Make generated weather human-readable
let weather = weatherChoices[randomWeather];

let weatherAdvice = '';

switch (weather) {
  case "sunny":
    weatherAdvice = "It's a beautiful day!";
    break;
  case "rainy":
    weatherAdvice = "Grab your umbrella.";
    break;
  default: 
    weatherAdvice = "Let's stay inside.";
}

console.log(weatherAdvice);
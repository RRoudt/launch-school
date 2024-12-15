/*
Initialize a variable weather with a string value being "sunny", "rainy", or anything else.

Write an if statement that logs:

"It's a beautiful day!" if weather is assigned to the string "sunny",
"Grab your umbrella." if weather is assigned to the string "rainy", and
"Let's stay inside." otherwise.
Test your code with different values for weather.

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

let weatherAdvice = weather === "sunny" ? "It's a beautiful day!" :
                    weather === "rainy" ? "Grab your umbrella." :
                                "Let's stay inside."

console.log(weatherAdvice);
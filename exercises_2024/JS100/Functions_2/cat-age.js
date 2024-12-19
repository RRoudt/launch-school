/* JS100 - Functions 2 - 5. Calculate Cat Age

Instructions:
- Implement a function catAge that takes a number of human years as input and converts them into cat years. Cat years are calculated as follows:
  - The first human year corresponds to 15 cat years.
  - The second human year corresponds to 9 cat years.
  - Every subsequent human year corresponds to 4 cat years.

Input:
- Number (human years)

Output:
- Number (cat years)

Rules:
- First human year = 15 cat years
- Second human year = 9 cat years
- ALl other human years = 4 cat years

Data:
- Numbers

Algorithm:
- Get human years
  - If number === 0, return 0
  - If number === 1, return 15
  - If number === 2, return 24
  - If number > 2, return result of:
    cat years = 24
    human years -= 2
    cat years += 4 * human years
*/

function catAge(humanYears) {
  switch (humanYears) {
    case 0:
      return 0;
    case 1:
      return 15;
    case 2:
      return 24;
    default:
      humanYears -= 2;
      let catYears = 24 + (humanYears * 4);
      
      return catYears;
  }
}

// Test cases
console.log(catAge(0)); // 0
console.log(catAge(1)); // 15
console.log(catAge(2)); // 24
console.log(catAge(3)); // 28
console.log(catAge(4)); // 32
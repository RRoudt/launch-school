/* Small Problems — Easy 2.9: How Old is Teddy?

Instruction:
- Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between 20 and 120 (inclusive).

(I expanded a bit on the instructions as you can see below. This because they were a bit too easy and also the solution by Launch School turned out to be more sophisticated than their own instructions requested for.)

Input:
- Minimum age
- Maximum age
- Name

Output:
- Console log that says: "name is xxx years old!"
  - name === passed as argument
  - xxx === randomly generated age

Rule:
- Generated age must be between minimum and maximum (inclusive)

Steps:
- Check if both min and max were set
- Check if min is lower than max, if so stop function
- Set max to min if only one argument was passed in
- Set and generate random number to: randomNum
- Set randomAge to: (randomNum * (max - min)) + min, rounded up
- Log randomAge to console, along with the string: "name is randomAge years old!"
*/

function randomAgeBetween(min, max, name = 'Teddy') {
  // Guard clauses
  if (!min && !max) return `Must enter a min and max value!`
  if (min > max) return `Min must be lower than max!`;
  if (!max) max = min; 

  // Generate random age
  const randomNum = Math.random();
  const randomAge = Math.ceil((randomNum * (max - min)) + min);

  // Return name and age in a string
  return `${name} is ${randomAge} years old!`;
}

// Test cases
console.log(randomAgeBetween());  // "Must enter a min and max value!"
console.log(randomAgeBetween(120, 20)); // "Min must be lower than max!"
console.log(randomAgeBetween(50)); // "Teddy is 50 years old!"
console.log(randomAgeBetween(20, 120)); // "Teddy is xxx years old!"
console.log(randomAgeBetween(20, 40, 'Ramses')); // "Ramses is xxx years old!"
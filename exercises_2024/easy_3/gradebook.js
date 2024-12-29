/* Easy 3.8: Grade Book

Instructions:
- Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.

Input:
- Three integers

Output:
- Grade in the form of a letter (A-F)

Rules:
- Passed-in scores are always between 0 and 100

Questions:
Q: Will passed-in scores always be whole numbers?
  A: Let's assume they're always whole numbers
Q: What is the range of the passed-in numbers?
  A: Between 0 and 100 (let's assume both inclusive)

Data:
- Numbers (as input)
- String (as output)

Algorithm:
Get three integers
Get average of the three integers
If average is between 90 (inclusive) and 100 (inclusive), return "A"
If average is between 80 (inclusive) and 90, return "B"
If average is between 70 (inclusive) and 80, return "C"
If average is between 60 (inclusive) and 70, return "D"
If average is below 60, return "F"
*/

function getAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function getGrade(score1, score2, score3) {
  let average = getAverage(score1, score2, score3);

  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test cases
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
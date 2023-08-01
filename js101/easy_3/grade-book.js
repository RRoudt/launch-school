/* JS101 Small Problems: Easy 3.8: Grade Book

Instructions:
- Write a function that determines the averages of three scores
- The function must return the letter associated with the grade

Inputs:
- Three integer scores between 0 and 100

Outputs:
- Return single letter string of average grade

Rules:
- Must accept three positive integer values as arguments
- Arguments will never be less than 0 or more than 100
- Must output a single character string

Pseudocode:
- Set and get three scores: score1, score2, score3
- Sum up all three scores: scoreSum
- Calculate average of three scores: scoreAvg
- Return single character string based on scoreAvg:
  - If score below 60: 'F'
  - If score below 70: 'D'
  - If score below 80: 'C'
  - If score below 90: 'B'
  - Else: 'A'
*/

function getGrade(score1, score2, score3) {
  const scoreSum = score1 + score2 + score3;
  const scoreAvg = scoreSum / 3;

  if (scoreAvg < 60) {
    return 'F';
  } else if (scoreAvg < 70) {
    return 'D';
  } else if (scoreAvg < 80) {
    return 'C';
  } else if (scoreAvg < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

// Test cases
console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
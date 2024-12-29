/* Easy 3.5: Right Triangles

Instructions:
- Write a function that takes a positive integer, n, as an argument and logs a right triangle whose sides each have n stars.
- The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.
- Example:

      *
     **
    ***
   ****
  *****

Input:
- Positive integer

Output:
- Triangle

Rules:
- Triangle should align on right-hand side

Questions:
Q: Should the first console log be an empty string?
  A: From the examples, this seems to be the case: YES

Data:
- Whole number (input)
- String (output)

Algorithm:
Get numLevels
For numLevels of times:
  Log " " times numLevels - current iteration number
  Log "*" times the current iteration number
*/

function triangle(numLevels) {
  for (let iteration = 0; iteration <= numLevels; iteration += 1) {
    console.log(' '.repeat(numLevels - iteration) + '*'.repeat(iteration));
  }
}

// Test cases
triangle(5);
// 
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
// 
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
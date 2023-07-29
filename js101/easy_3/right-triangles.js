/* JS 101 Small Problems: Easy 3.5: Right Triangles

Instructions:
- Write a function that takes a positive integer n as an argument
- The function logs a right triagle, whose sides have n stars
- The slope has to go from broad on the lower left, to narrow on the top right:
    *
   **
  ***
 ****
*****

Inputs:
- Positive integer

Outputs:
- Right-sloped triangle of stars

Rules:
- Triangle is n lines high
- The top line is one star long
- The bottom line is n stars long

Pseudocode:
- Set and get height of lines: height
- Loop for height times (inclusive), starting at one:
  - Set spaces to: ' ' * height - index
  - Set stars to: '*' * index
  - Log: spaces + stars
*/

function triangle(height) {
  for (let index = 1; index <= height; index += 1) {
    let spaces = ' '.repeat(height - index);
    let stars = '*'.repeat(index);
    console.log(spaces + stars);
  }
}

// Test cases
triangle(5);
//     *
//    **
//   ***
//  ****
// *****

triangle(9);
//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
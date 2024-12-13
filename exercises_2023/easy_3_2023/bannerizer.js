/* JS101 — Easy 3.2:  Bannerizer

Instructions:
- Write a function that will take a short line of text.
- Write it to the console log within a box.

Input:
- String

Output:
- String logged to the console, inside a box:

+----------------+
|                |
| Text goes here |
|                |
+----------------+

Pseudocode:
- Set and get str
- Set and get maxLength: defaults to length of str
- If maxLength is lower than length of str: truncate and reassign str
- Set border: '+-' plus '-' times str length plus '-+'
- Set padding: '| ' plus ' ' times str length plus ' |'
- Log to console: border
- Log to console: padding
- Log to console: '| ' plus str plus ' |'
- Log to console: padding
- Log to console: border
*/

function logInBox(str, maxLength = str.length) {
  // Truncate string if longer than max
  if (maxLength < str.length) str = str.substring(0, maxLength);

  const border = '+-' + '-'.repeat(str.length) + '-+';
  const padding = '| ' + ' '.repeat(str.length) + ' |';

  console.log(border);
  console.log(padding);
  console.log('| ' + str + ' |');
  console.log(padding);
  console.log(border);
}

// Test cases
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

// Test cases
logInBox('', 5);
// +--+
// |  |
// |  |
// |  |
// +--+

logInBox('Text goes here', 9);
// +-----------+
// |           |
// | Text goes |
// |           |
// +-----------+

logInBox('Text goes here');
// +----------------+
// |                |
// | Text goes here |
// |                |
// +----------------+

logInBox('To boldly go where no one has gone before.', 18);
// +--------------------+
// |                    |
// | To boldly go where |
// |                    |
// +--------------------+

logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+
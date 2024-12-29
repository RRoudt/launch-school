/* Easy 3.2: Bannerizer

Instructions:
- Write a function that will take a short line of text, and write it to the console log within a box.
- You may assume that the output will always fit in your browser window.

Input:
- A string

Output:
- The string, printed to the console in a box like this:
+--+
|  |
|  |
|  |
+--+

Rules:
- The box should have 1 space padding before and after the input string
- The input will always fit the window

Data:
- String (input)
- Strings (output, to the console)

Algorithm:
Get inputString
Set horizontalRule: "+-" followed by "-" times inputString's length, followed by "-+"
Set emptyLine:  "| " followed by " " times inputString's length, followed by " |"
Print horizontalRule to the console
Print emptyLine to the console
Print "| " to the console, followed by inputString, followed by " |"
Print emptyLine to the console
Print horizontalRule to the console

Further exploration:
- Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself).
- You may assume no maximum if the second argument is omitted.

Further exploration algorithm:
Get inputString
Get maxWidth
If maxWidth is set and inputString.length > maxWidth:
  Truncate inputString to maxWidth
  Set inputString to truncated value plus "..." at the end
Set horizontalRule: "+-" followed by "-" times inputString's length, followed by "-+"
Set emptyLine:  "| " followed by " " times inputString's length, followed by " |"
Print horizontalRule to the console
Print emptyLine to the console
Print "| " to the console, followed by inputString, followed by " |"
Print emptyLine to the console
Print horizontalRule to the console
*/

function logInBox(inputString, maxWidth) {
  if (maxWidth && inputString.length > maxWidth) {
    inputString = inputString.substring(0, maxWidth);
    inputString += '...';
  }

  let horizontalRule = `+-${'-'.repeat(inputString.length)}-+`;
  let emptyLine = `| ${' '.repeat(inputString.length)} |`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${inputString} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

// Test cases
logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+

logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('Hello there', 5);
// +----------+
// |          |
// | Hello... |
// |          |
// +----------+
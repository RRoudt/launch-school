/* Lesson 3. Practice Problems: Easy 2.1

Instruction:
Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

Input:
- String

Output:
- New string

Rule:
- Replace every occurance of the word "important" with the "urgent"

Pseudocode:
- Set and get string
- Call replaceAll() on the string and return its return value
  - Passing "important" as the first argument
  - Passing "urgent" as the second argument
*/

function fromImportantToUrgent(string) {
  return string.replaceAll("important", "urgent");
}

// Test cases
console.log(fromImportantToUrgent("Few things in life are as important as house training your pet dinosaur."));
// "Few things in life are as urgent as house training your pet dinosaur."

console.log(fromImportantToUrgent("Remember that it's important to keep in mind how important keeping things in mind is."));
// "Remember that it's urgent to keep in mind how urgent keeping things in mind is."
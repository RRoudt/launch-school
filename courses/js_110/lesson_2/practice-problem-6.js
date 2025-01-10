/* JS110 - Lesson 2.5: Practice Problem 6

Instructions:
- Given this previously seen family object, print the name, age, and gender of each family member:
- Each output line should follow this pattern:
  (Name) is a (age)-year-old (male or female).

Input:
- Object

Output:
- String logged to the console

Questions:
Q: Should the name be capitalized?
  A: From the template, it seems so yes

Rules:
- Each logged line should read:
  (Name) is a (age)-year-old (male or female).

Data:
- Object (input)
- Nested objects
- String (output, to the console)

Algorithm:
Get an object
Iterate over the object:
  Log:
  {name} is a {age}-year-old {male or female}.
End iterating over object
*/

function displayPersonInfo(obj) {
  Object.entries(obj).forEach(nameDetail => {
    let [name, detail] = nameDetail;
    let nameCapitalized = name[0].toUpperCase() + name.slice(1);

    console.log(`${nameCapitalized} is a ${detail.age}-year-old ${detail.gender}`);
  });
}

// Test object
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

displayPersonInfo(munsters);
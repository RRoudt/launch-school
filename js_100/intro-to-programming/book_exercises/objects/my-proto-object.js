/* Exercise 5: Create a new object named myObj that uses myProtoObj as its prototype. */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);
myObj.qux = 3;

// console.log(myObj.foo); // 1
// console.log(myObj.bar); // 2

/* Exercise 7: Add a qux property with value 3 to the myObj object we created in the previous exercise. 

Now, examine the following code snippets and determine whether these two snippets produce the same output? Why? */

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

/* Produces:
qux

Why? Because Object.keys() only extracts the objects own properties.
*/

for (let key in myObj) {
  console.log(key);
}

/* Produces:
 qux
 foo
 bar

 Why? Because a for...in loop first iterates over an objects own properties and then over the properties from the parent object. */
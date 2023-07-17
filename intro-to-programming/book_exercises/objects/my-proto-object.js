/* Exercise 5: Create a new object named myObj that uses myProtoObj as its prototype. */

let myProtoObj = {
  foo: 1,
  bar: 2,
};

const myObj = Object.create(myProtoObj);

console.log(myObj.foo); // 1
console.log(myObj.bar); // 2
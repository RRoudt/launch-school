/* Exercise 12: Without creating a new function or changing lines 5 or 6, update this code to work as intended. */

function foo(bar) {
  console.log(bar, bar, bar);
}

const bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"
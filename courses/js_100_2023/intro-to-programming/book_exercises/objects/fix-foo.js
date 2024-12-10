/* Exercise 13: Without modifying foo, update this code to print the desired text. */

function foo(bar) {
  console.log(bar());
}

// Added functions as an argument to foo()
foo(() => 'Welcome');    // Should print 'Welcome'
foo(() => 3.1415);    // Should print 3.1415
foo(() => [1, 2, 3]);    // Should print [1, 2, 3]
function doubler(number) {
  console.log(number);

  // Set the debugger break point on the line below (line 5) and keep stepping into every step to see how the call stack develops.
  if (number <= 50) {
    doubler(number * 2);
  }
  console.log(`Frame popped of number: ${number}`);
}

doubler(5); // => 5
            // => 10
            // => 20
            // => 40
            // => 80
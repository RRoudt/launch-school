function doubler(number) {
  console.log(number);

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
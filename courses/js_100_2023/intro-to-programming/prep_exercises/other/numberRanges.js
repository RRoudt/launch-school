const numberRange = (num) => {
  if (num < 0) {
    console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 50`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(1000);
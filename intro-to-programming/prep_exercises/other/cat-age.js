function catAge(humanYears) {
  let catYears = 0;

  for (let i = 0; i < humanYears; i += 1) {
    if (i === 0) {
      catYears += 15;
      continue;
    } else if (i === 1) {
      catYears += 9;
      continue;
    } else {
      catYears += 4;
    }
  }

  console.log(catYears);
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
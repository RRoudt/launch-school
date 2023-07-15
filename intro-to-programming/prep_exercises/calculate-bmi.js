function calculateBMI(heightInCm, weightInKg) {
  return (weightInKg / (heightInCm / 100) ** 2).toFixed(2);
}

console.log(calculateBMI(180, 80)); // "24.69"
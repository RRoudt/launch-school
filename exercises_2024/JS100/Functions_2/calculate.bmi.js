/* JS100 - Functions 2 - 4. Calculate BMI

Instructions:
- Create a function that calculates a person's body mass index (BMI). It should take two parameters: someone's height (in cm) and weight (in kg). The formula for calculating the BMI is as follows:

  bmi = weightInKilograms / heightInMeters**2;

  - Note that formula requires a height in meters, but the function takes the height in centimeters (1 meter is equivalent to 100 centimeters).
- Return the result as a string rounded to two decimals.

Input:
- Two numbers
  - Height in centimeters
  - Weight in kilograms

Output:
- Number as a string (rounded to 2 decimals) (BMI)

Rules:
- Height is input as centimeters
  - BMI formula uses height in meters
- Weight is input as kilograms
- Return BMI as a string, rounded to 2 decimals

Data:
- Numbers (input)
- String (output)

Algorithm:
- Get heightInCentimeters
- Get weightinKilograms
- Set heightInMeters to: heightInCentimeters / 100
- Calculate BMI:
  bmi = weightinKilograms / heightInMeters**2;
*/

function calculateBMI(heightInCentimeters, weightinKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightinKilograms / (heightInMeters**2);

  return bmi.toFixed(2);
}

// Test case
console.log(calculateBMI(180, 80)); // "24.69"
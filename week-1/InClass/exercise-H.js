// My function takes in name and age and returns a string 
function myInfoInTwoYears(name, myAge) {
  let ageCalculation = myAge + 2;
  let output = `Hello my name is ${name}. I am goin to be ${ageCalculation} years old in 2024`;
  return output;
}
console.log(myInfoInTwoYears('Kostia',31))
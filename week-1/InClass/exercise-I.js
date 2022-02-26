function getYearBorn(age) {
  let year = 2022 - age;
  return year;
}

function getSentence(name, age) {
  let ageIwasBorn = getYearBorn(age);
  let message = `My nams is ${name} and I was born in ${ageIwasBorn}`;
  return message;
}
console.log(getSentence("Kostiantyn", 31));

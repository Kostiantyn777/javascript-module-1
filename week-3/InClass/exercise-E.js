function findAge(birthYear) {
  return birthYear.map((element) => {
    let age = 2022 - element;
    return age;
  });
}
const birthArray = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

console.log(findAge(birthArray));

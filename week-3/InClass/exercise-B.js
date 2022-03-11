const peopleArray1 = ["Adam", "Bob", "Ana", "Jack", "Megan"];
const peopleArray2 = ["Bob", "Alejandro", "Cristian", "Miguel"];
const allPeopleArray = peopleArray1.concat(peopleArray2);

console.log(allPeopleArray.sort());

function peopleFunction(name, arrayOfNames) {
  if (arrayOfNames.includes(name)) {
    return `${name} is at the class with ${arrayOfNames.join(", ")}`;
  } else {
    return `${name} is not at the class with ${arrayOfNames.join(", ")}`;
  }
}
console.log(peopleFunction("Bob", peopleArray2));
console.log(peopleFunction("Elena", allPeopleArray));

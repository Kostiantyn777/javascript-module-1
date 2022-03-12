const names = ["Bob", "Mark", "James", "Jose", "Kos"];
const NAME_TO_FIND = "Kos";



function findName(names) {
  if (names.find(name=>name===NAME_TO_FIND)) {
      return `Found me`
  }
  return `Haven't found me`
}

console.log(findName(names));

const birthYearArray = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateIfCanDrive(birthYear) {
  console.log(`These are the birth years of people who can drive:`);
  birthYear.filter((year) => {
    const age = 2022 - year;
    return age >= 17;
  });
}

const filteredArray = calculateIfCanDrive(birthYearArray);
console.log(filteredArray);

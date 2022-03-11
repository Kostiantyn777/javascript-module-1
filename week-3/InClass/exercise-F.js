const birthYearArray = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function calculateIfCanDrive(birthYear) {
  birthYear.map((year) => {
    const age = 2022 - year;
    if (age >= 17) {
      return console.log(`Born in ${year} can drive`);
    } else {
      return console.log(`Born in ${year} can drive in ${17 - age} years`);
    }
  });
}
calculateIfCanDrive(birthYearArray);

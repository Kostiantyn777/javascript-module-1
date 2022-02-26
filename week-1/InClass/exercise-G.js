let numberOfStudents = 20;
let numberOfMentors = 2;
let total = numberOfStudents + numberOfMentors;
let percentageOfStudents = Math.round((numberOfStudents * 100) / total);
let percentageOfMentors = Math.round((numberOfMentors * 100) / total);
console.log(
  `The percentage of students is ${percentageOfStudents} % and the percentage of mentors is ${percentageOfMentors} %`
);

/*The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user. */
console.log(Math.random());

function messageMood(mood) {
  if (mood === "happy") {
    return console.log("Good job, you're doing great!");
  } else if (mood === "sad") {
    return console.log("Every cloud has a silver lining");
  } else if (typeof mood === 'number') {
    return console.log("Beep beep boop");
  } else {
    return console.log("I'm sorry, I'm still learning about feelings!");
  }
}
messageMood('happy');

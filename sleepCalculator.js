function getSleepHours(day) {
  var hours = prompt("How many hours of sleep did you get on " + day + "? ");
  return Number(hours);
}

function getActualSleepHours() {
  getActualSleepHours = getSleepHours("Monday") +
  getSleepHours("Tuesday") +
  getSleepHours("Wednesday") +
  getSleepHours("Thursday") +
  getSleepHours("Friday") +
  getSleepHours("Saturday") +
  getSleepHours("Sunday");
  return getActualSleepHours;
}

function getIdealSleepHours() {
  getIdealSleepHours = Number(prompt("How much sleep is ideal per night? ") * 7);
  return getIdealSleepHours;
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours;
  var idealSleepHours = getIdealSleepHours;
  if (actualSleepHours === idealSleepHours) {
    return "You got the perfect amount of sleep!";
  }
  else if (actualSleepHours > idealSleepHours) {
    return "You got more sleep than needed.";
  }
  else {
    return "You should get more rest.";
  }
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
console.log(calculateSleepDebt());
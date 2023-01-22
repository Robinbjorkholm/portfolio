function getAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  var ageMS = today.getTime() - birthDate.getTime();

  var ageString = ageMS / 31556952000;

  var age = ageString.toString();

  var newage = age.substring(0, 8);

  return newage;
}

export default getAge;

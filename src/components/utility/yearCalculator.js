function getYear(date, decimalNumber) {
  var today = new Date();
  var birthDate = new Date(date);
  var ageMS = today.getTime() - birthDate.getTime();

  var ageString = ageMS / 31556952000;

  var age = ageString.toString();

  var newage = age.substring(0, decimalNumber);

  return newage;
}

export default getYear;

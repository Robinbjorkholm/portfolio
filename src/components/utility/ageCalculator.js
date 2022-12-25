function getAge(date) {
  var today = new Date();
  var birthDate = new Date(date);
  const year = today.getYear() - birthDate.getYear();
  const months = today.getMonth() - birthDate.getMonth();
  const monthDecimal = months / 12;

  const month = monthDecimal.toString();

  const monthString = month.substring(2);

  const month1 = monthString.substring(0, monthString.length - 10);

  const age = year + "." + month1 + " ";
  return age;
}

export default getAge;

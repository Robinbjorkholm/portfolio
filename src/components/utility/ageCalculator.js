function getAge(date) {
  let months = " month ";
  let days = " day ";
  let hours = " hour ";
  let minutes = " minute ";

  var today = new Date();
  var birthDate = new Date(date);
  var YearDiff = today.getYear() - birthDate.getYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff > 1) {
    months = " months ";
  }

  var daysDiff = today.getDate() - birthDate.getDate();
  if (daysDiff > 1) {
    days = " days ";
  }

  var hoursDiff = today.getHours() - birthDate.getHours();
  if (hoursDiff > 1) {
    hours = " hours ";
  }

  var minutDiff = today.getMinutes() - birthDate.getMinutes();
  if (minutDiff > 1) {
    minutes = " minutes ";
  }
  var Age =
    "I Am " +
    YearDiff +
    " years " +
    monthDiff +
    months +
    daysDiff +
    days +
    hoursDiff +
    hours +
    minutDiff +
    minutes;
  return Age;
}

export default getAge;

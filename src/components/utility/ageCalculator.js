function getAge(date) {
  let months = " month ";
  let days = " day ";
  let hours = " hour ";
  let minutes = " minute ";
  let seconds = " second ";

  var today = new Date();
  var birthDate = new Date(date);
  var YearDiff = today.getYear() - birthDate.getYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff > 1) {
    months = " months ";
  }
  var myDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  var testing = myDay + today.getDate();
  var daysDiff = testing - birthDate.getDate();
  if (daysDiff > 1) {
    days = " days ";
  }
  var hoursDiff = today.getHours() - birthDate.getHours();
  if (hoursDiff > 1) {
    hours = " hours ";
  }
  var minDiff = today.getMinutes() - birthDate.getMinutes();
  if (minDiff > 1) {
    minutes = " minutes ";
  }
  var secDiff = today.getSeconds() - birthDate.getSeconds();
  if (secDiff > 1) {
    seconds = " seconds ";
  }

  var Age =
    "i Am " +
    YearDiff +
    " years " +
    monthDiff +
    months +
    daysDiff +
    days +
    hoursDiff +
    hours +
    minDiff +
    minutes +
    secDiff +
    seconds;
  return Age;
}

export default getAge;

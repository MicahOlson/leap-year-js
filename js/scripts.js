function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $(".form-group").submit(function(event) {
    event.preventDefault();
    const year = $("#year").val();
    if (isLeapYear(year)) {
      $("#result").text(year + " is a leap year.");
    } else {
      $("#result").text(year + " is not a leap year.");
    }
  })
})
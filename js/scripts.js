function isLeapYear(year) {
  if (!year || year != parseInt(year, 10)) return null;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

$(document).ready(function () {
  $(".form-group").submit(function (event) {
    event.preventDefault();
    $("#result").empty();
    $("#input-error").empty();
    const currentYear = new Date().getFullYear();
    const inputYear = $("#year").val();
    const result = isLeapYear(inputYear);
    if (result) {
      $("#result").text(inputYear + " is a leap year!");
    } else if (result === null) {
      $("#input-error").text(
        "Enter a year in a format like " + currentYear + "."
      );
    } else {
      $("#result").text(inputYear + " is a regular year.");
    }
    $("#year").val("");
  });
});

function isLeapYear(year) {
  if (typeof year !== "number" || year !== parseInt(year, 10)) return null;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

$(document).ready(function () {
  $(".form-group").submit(function (event) {
    event.preventDefault();
    const year = $("#year").val();
    if (isLeapYear(year)) {
      $("#result").text("Leap year!");
    } else {
      $("#result").text("Regular year.");
    }
  });
});

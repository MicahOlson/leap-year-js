import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import isLeapYear from "./js/leap-year";

$(document).ready(function () {
  $(".form-group").submit(function (event) {
    event.preventDefault();

    $("#result").empty();
    $("#input-error").empty();

    const currentYear = new Date().getFullYear();
    const inputYear = $("#year").val();
    const result = isLeapYear(inputYear);
    if (result) {
      $("#result").text("Leap year!");
    } else if (result === null) {
      $("#input-error").text(
        "Enter a year in a format like " + currentYear + "."
      );
    } else {
      $("#result").text("Regular year.");
    }
  });
});

import isLeapYear from "../src/js/leap-year";

describe("isLeapYear", () => {
  test("is false for years not divisible by 4", () => {
    expect(isLeapYear("2022")).toBe(false);
  });

  test("is true for years divisible by 4 but not 100", () => {
    expect(isLeapYear("2024")).toBe(true);
  });

  test("is false for years divisible by 4 and 100, but not 400", () => {
    expect(isLeapYear("2100")).toBe(false);
  });

  test("is null if the argument is not a number", () => {
    expect(isLeapYear("two-thousand twenty four")).toBeNull();
  });

  test("is null if the argument is not an integer", () => {
    expect(isLeapYear("2024.5")).toBeNull();
  });
});

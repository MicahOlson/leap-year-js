const isLeapYear = (year) => {
  if (!year || year != parseInt(year, 10)) return null;
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export default isLeapYear;

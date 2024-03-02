// Question 02: Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

let ask_user = prompt("Enter an Year: ");

let LeapYear_Finder = (year) => {
  if (isNaN(year) || year == "") {
    return document.write("Dear User ! Please Enter a valid Input");
  } else if (year % 4 == 0 && (year !== 100 || year === 400)) {
    let leap_year = document.write(`${year} is a leap year`);
    return leap_year;
  } else {
    Not_Leap = document.write(`${year} is not a leap year`);
  }
};

LeapYear_Finder(ask_user);

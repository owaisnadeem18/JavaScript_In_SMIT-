// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today

document.write(
  "------------------------------- Write a program that displays a message “It's Fun day” if its Saturday or Sunday today ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 04 -------------------------------------- <br><br>"
);

let days_array = [
  "Sunday",
  "Monday ",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let date = new Date();

let check_day = date.getDay();

let getDay = days_array[check_day].toLowerCase();

if (getDay == "sunday" || getDay == "saturday") {
  alert("It's fun day !!! , Because today is " + getDay);
  document.write("It's fun day !!! , Because today is ", getDay);
} else {
  document.write("Working Day !!! ");
}

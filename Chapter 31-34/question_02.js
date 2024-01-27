// Write a program that alerts the current month in words. For example December

document.write(
  "-------------------------------Write a program that alerts the current month in words. For example December ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 02 -------------------------------------- <br><br>"
);

let months_array = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();

let str_date = date.toString();

console.log(str_date);

let month = date.getMonth();

console.log(month);

console.log(months_array[month]);

// let curr_month = months_array[month];

alert("The Current month is : " + months_array[month]);

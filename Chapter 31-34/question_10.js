// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015

document.write(
  "-------------------------------Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015 ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 10 -------------------------------------- <br><br>"
);

let ref_date = new Date();

let date = new Date();

let beg_of_2015 = new Date("01 January 2015");

let diff = ref_date - beg_of_2015;

let seconds = diff / 1000;

document.write("Refrence Date: ", ref_date, "<br>");
document.write(
  Math.round(seconds),
  " seconds have been passed since beginning of 2015 till today,",
  date
);

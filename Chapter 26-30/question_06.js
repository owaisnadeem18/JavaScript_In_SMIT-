// Write a program that shows a random number between 1 and 100 in your browser.

document.write(
  "------------------------------- Write a program that shows a random number between 1 and 100 in your browser. ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 06 -------------------------------------- <br><br>"
);

let num = Math.round(Math.random() * 100);

document.write("The Random Numbers between 1 & 100 is: ", num);

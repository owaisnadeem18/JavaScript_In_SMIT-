// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser

document.write(
  "------------------------------- Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 04 -------------------------------------- <br><br>"
);

let random_01 = Math.floor(Math.random() * 6) + 1;
let random_02 = Math.floor(Math.random() * 6) + 1;

document.write("The Random Dice Value is: ", random_01, "<br>");
document.write("The Random Dice Value is: ", random_02);

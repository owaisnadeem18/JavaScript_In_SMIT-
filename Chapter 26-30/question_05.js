// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

document.write(
  "------------------------------- Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 05 -------------------------------------- <br><br>"
);

let num_1 = Math.round(Math.random() * 2 + 0.5);

let num_2 = Math.round(Math.random() * 3);

if (num_1 == 1) {
  document.write(num_1, "<br>");
  let toss = "Head";
  document.write("The random coin value is: ", toss);
} else {
  document.write(num_1, "<br>");
  let toss = "Tail";
  document.write("The random coin value is: ", toss);
}

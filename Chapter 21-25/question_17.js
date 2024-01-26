// Write a program to display the last character of a user input.

// // Question # 17

document.write(
  "------------------------------- Write a program to display the last character of a user input ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 17 -------------------------------------- <br><br>"
);

let ask_user = prompt("Enter a number = ");

document.write("User Input: ", ask_user, "<br>");
document.write(
  "Last character of user Input: ",
  ask_user.charAt(ask_user.length - 1)
);

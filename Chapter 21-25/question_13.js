// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// Question # 13

document.write(
  "------------------------------- Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . // Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64 ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 13 -------------------------------------- <br><br>"
);

let ask_user = prompt("Enter Your Username = ");

if (ask_user.includes(String.fromCharCode(33))) {
  alert("Please Enter a Valid User Name");
} else if (ask_user.includes(String.fromCharCode(44))) {
  alert("Please Enter a Valid User Name");
} else if (ask_user.includes(String.fromCharCode(46))) {
  alert("Please Enter a Valid User Name");
} else if (ask_user.includes(String.fromCharCode(64))) {
  alert("Please Enter a Valid User Name");
} else {
  document.write("User Name is = ", ask_user);
}

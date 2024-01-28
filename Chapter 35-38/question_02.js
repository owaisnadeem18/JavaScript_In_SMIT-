// Write a function that takes first & last name and then it greets the user using his full name.

// Question 02

document.write(
  "----------------------------- Question 02 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that takes first & last name and then it greets the user using his full name ----------------------------- <br> "
);

let func = () => {
  let ask_first = prompt("Enter Your First Name: ");
  let ask_second = prompt("Enter Your Last Name: ");
  let full_name = ask_first.concat(ask_second);

  alert("Hello , Dear User !!! " + full_name);
};

func();

// Write a function that take start and end number as inputs & display counting in your browser

// Question # 07

document.write(
  "----------------------------- Question 07 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that take start and end number as inputs & display counting in your browser ----------------------------- <br> "
);

let func = (start, end) => {
  document.write("The starting Number is = ", start, "<br>");
  document.write("The ending Number is = ", end, "<br>");
  document.write();

  for (let i = start; i <= end; i++) {
    document.write(i, " ");
  }
};

let num1 = prompt("Emter the starting number ");
let num2 = prompt("Emter the Ending number ");

num1 = Number(num1);
num2 = Number(num2);

func(num1, num2);

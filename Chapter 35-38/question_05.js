// Write a function that squares its argument

// Question 05

document.write(
  "----------------------------- Question 05 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a function that squares its argument. ----------------------------- <br> "
);

let square = (a) => {
  return a * a;
};

let sq = prompt("Enter the nmumber whose square you want to get = ");

document.write(`The square of ${sq} is = ${square(sq)}`);

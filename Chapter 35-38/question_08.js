// Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse^2 = Base^2 + Perpendicular^2

// Question # 08

document.write(
  "----------------------------- Question 08 ----------------------------- <br> "
);

document.write(
  "----------------------------- Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse^2 = Base^2 + Perpendicular^2 ----------------------------- <br><br> "
);

document.write(
  "<h1> Finding Hypotenuse of a right angle triangle  </h1> <br><br>"
);

let hyp = (base, perp) => {
  let base_func = (a) => {
    return a * a;
    // console.log(base);
  };

  let perp_func = (b) => {
    return b * b;
    // console.log(perp);
  };

  let hyp = base_func(base) + perp_func(perp);
  return hyp * hyp;
};

let base = 2;
let perp = 4;

document.write(
  "The Hypotenus of the right angle triangle is : ",
  hyp(base, perp),
  "<br>"
);

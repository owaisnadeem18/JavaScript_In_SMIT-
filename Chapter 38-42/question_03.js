// Question 03:

// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by:
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

let a = parseFloat(prompt("Enter first side of a triangle "));
let b = parseFloat(prompt("Enter second side of a triangle "));
let c = parseFloat(prompt("Enter third side of a triangle "));

let Find_S = (first, second, third) => {
  let s = (first + second + third) / 2;
  return s;
};

let Find_Area = (s, first, second, third) => {
  let area = s * (s - first) * (s - second) * (s - third);
  return Math.sqrt(area); // Taking the square root to get the actual area
};

let s = Find_S(a, b, c);

console.log("The S of a triangle is = ", s);
console.log("The Area of a triangle is = ", Find_Area(s, a, b, c));

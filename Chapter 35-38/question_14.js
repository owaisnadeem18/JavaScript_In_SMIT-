// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using
// the definitions here.

// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".

// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// Circumference of circle = 2πr
// Area of circle = πr2

document.write(
  "----------------------------- Question 14 ----------------------------- <br> "
);

document.write(
  `----------------------------- The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
    Create a function called calcCircumference:
    • Pass the radius to the function.
    • Calculate the circumference based on the radius, and output
    "The circumference is NN".
    Create a function called calcArea:
    • Pass the radius to the function.
    • Calculate the area based on the radius, and output "The area
    is NN".
    Circumference of circle = 2πr ----------------------------- <br><br> `
);

document.write("<h2>The Geometrizer</h2>");

let calcCircumference = (radius) => {
  return 2 * 3.142 * radius;
};

let ask_radius = prompt("Enter the value of radius of the circle= ");

document.write(
  "<b> The radius of the circle is = </b>",
  ask_radius,
  "<br><br><br>"
);

document.write(
  "<b>The Circumference of the circle is = </b>",
  calcCircumference(ask_radius),
  "<br><br><br>"
);

let Calculate_Area = (radius) => {
  return 3.142 * radius * radius;
};

document.write(
  "<b>The Area of the circle is = </b>",
  Calculate_Area(ask_radius)
);

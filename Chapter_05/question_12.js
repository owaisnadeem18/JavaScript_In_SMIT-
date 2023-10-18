// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write(" ***** The Geometrizer ***** <br>");

let radius_value = 20;

let pie = 3.142;
let circumference_of_circle;

circumference_of_circle = 2 * pie * radius_value;

document.write("The Radius of a circle is : " + radius_value + "<br>");
document.write(
  "The Circumference of the circle is : " + circumference_of_circle + "<br>"
);

let area = pie * (radius_value * radius_value);
area = document.write("The area of a circle is : " + area + "<br>");

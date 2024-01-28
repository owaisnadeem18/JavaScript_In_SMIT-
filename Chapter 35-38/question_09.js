// Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

document.write(
  "----------------------------- Question 09 ----------------------------- <br> "
);

document.write(
  "----------------------------- // Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner: i. Arguments as value ii. Arguments as variables ----------------------------- <br><br> "
);

function area_rectangle(width, height) {
  document.write("The Width of the rectangle is = ", width, "<br>");
  document.write("The Height of the rectangle is = ", height, "<br>");
  area = width * height;
  return area;
}

document.write("The Area of a rectangle is: ", area_rectangle(4, 9));

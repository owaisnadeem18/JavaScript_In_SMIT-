// Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12].

// Question 08:

let A = [24, 53, 78, 91, 12, 45, 98, 56, 859, 842, 345, 234, 904];

document.write(
  "~--------------------------------------------------- A program to find the largest number in an Array ---------------------------------------------------~ "
);

document.write("<br><br>Array Items : ", A, "<br><br>");

let biggest_num = A.reduce((accum, curr) => {
  for (let i = 0; i < A.length; i++) {
    if (accum < curr) {
      return curr;
    } else {
      return accum;
    }
  }
});

document.write("The biggest number in an array is = ", biggest_num);

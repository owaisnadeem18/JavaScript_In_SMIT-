// Write a program to identify the smallest number in the given array.

// Question # 09

let A = [24, 53, 78, 91, 12, 4, 8, 23, 98, 53, 2, 34, 1, 0];

// We have to find the smallest number in this array

// For this purpose I will use the reduce method of array in it

document.write(
  "~--------------------------------------------------- A program to find the Smallest number in an Array ---------------------------------------------------~ "
);

document.write("<br><br>Array items:  ", A);

let smallest_number = A.reduce((accum, curr) => {
  if (accum < curr) {
    return accum;
  } else {
    return curr;
  }
});

document.write(
  "<br><br>The smallest number in this array is = ",
  smallest_number
);

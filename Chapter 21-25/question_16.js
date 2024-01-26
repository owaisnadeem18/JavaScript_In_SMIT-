// // Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

// // Question # 16

document.write(
  "------------------------------- Write a program to convert the following string to an array using the string split method. var university = “University of Karachi”; Display the elements of the array in your browser ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 16 -------------------------------------- <br><br>"
);

let university = "University of Karachi";

university_split = university.split("");

for (let i = 0; i < university_split.length; i++) {
  document.write(university_split[i] + "<br>");
}

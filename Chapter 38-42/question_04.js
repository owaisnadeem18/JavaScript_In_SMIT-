/*Write a function that receives marks obtained by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction.*/

let marks_1 = parseInt(prompt("Enter Marks in subject 01 = "));
let marks_2 = parseInt(prompt("Enter Marks in subject 02 = "));
let marks_3 = parseInt(prompt("Enter Marks in subject 03 = "));

console.log(marks_1, marks_2, marks_3);

total_subjects = 3;
total_marks = 300;

let avgFunc = (a, b, c) => {
  let avg = (a + b + c) / total_subjects;
  return avg;
};

let percentage = (a, b, c) => {
  let percentage = ((a + b + c) * 100) / total_marks;
  return percentage;
};

let main_function = () => {
  //   Calling the average function
  console.log(
    "The Average of student is = ",
    avgFunc(marks_1, marks_2, marks_3)
  );
  console.log(
    "The Percentage of student is = ",
    percentage(marks_1, marks_2, marks_3)
  );
};

// Calling the main function
main_function();

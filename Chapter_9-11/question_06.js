// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

let sub1 = parseInt(prompt("Enter your marks in Subject 01 "));
let sub2 = parseInt(prompt("Enter your marks in Subject 02 "));
let sub3 = parseInt(prompt("Enter your marks in Subject 03 "));

let obtained_marks = sub1 + sub2 + sub3;

let total_marks = 100 * 3;

let percentage = (obtained_marks * 100) / total_marks;

document.write("<h1>Mark Sheet</h1>" + "<br>");

document.write("The Total Marks in the exam are = " + total_marks + "<br>");

document.write(
  "The marks obtained by a student are = " + obtained_marks + "<br>"
);

document.write(
  "The percentage of a student is = " + percentage.toFixed(2) + "%" + "<br>"
);

if (percentage >= 80) {
  document.write("Grade-A1" + "<br>" + "Remarks : Excellent");
} else if (percentage >= 70) {
  document.write("Grade-A" + "<br>" + "Remarks : Good");
} else if (percentage >= 60) {
  document.write("Grade-B" + "<br>" + "Remarks : You need to Improve");
} else if (percentage < 60) {
  document.write("Grade- Fail" + "<br>" + "Remarks : Sorry !!! ");
}

var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarks = 100;

var obtainedMarks1 = parseInt(
  prompt("Enter the obtained marks for " + subject1)
);

var obtainedMarks2 = parseInt(
  prompt("Enter the obtained marks for " + subject2)
);
var obtainedMarks3 = parseInt(
  prompt("Enter the obtained marks for " + subject3)
);

var totalMarks_all_subjects = totalMarks * 3;

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var totalPercentage = (totalObtainedMarks * 100) / totalMarks_all_subjects;

document.write("<h1>Result</h1>");
document.write("<table style='border-collapse: collapse;'>");
document.write(
  "<tr><th style='border: 10px solid black;'>Subject</th><th style='border: 10px solid black;'>Total Marks</th><th style='border: 10px solid black;'>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td style='border: 10px solid black;'>" +
    subject1 +
    "</td><td style='border: 10px solid black;'>" +
    totalMarks +
    "</td><td style='border: 10px solid black;'>" +
    obtainedMarks1 +
    "</td></tr>"
);
document.write(
  "<tr><td style='border: 10px solid black;'>" +
    subject2 +
    "</td><td style='border: 10px solid black;'>" +
    totalMarks +
    "</td><td style='border: 10px solid black;'>" +
    obtainedMarks2 +
    "</td></tr>"
);
document.write(
  "<tr><td style='border: 10px solid black;'>" +
    subject3 +
    "</td><td style='border: 10px solid black;'>" +
    totalMarks +
    "</td><td style='border: 10px solid black;'>" +
    obtainedMarks3 +
    "</td></tr>"
);
document.write(
  "<tr><td style='border: 10px solid black;'>Total</td><td style='border: 10px solid black;'>" +
    totalMarks * 3 +
    "</td><td style='border: 10px solid black;'>" +
    totalObtainedMarks +
    "</td></tr>"
);
document.write(
  "<tr><td style='border: 10px solid black;'>Percentage</td><td colspan='2' style='border: 10px solid black;'>" +
    totalPercentage.toFixed(2) +
    "%</td></tr>"
);
document.write("</table>");

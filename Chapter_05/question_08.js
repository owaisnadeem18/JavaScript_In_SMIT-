// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

total_marks = 200;
marks_obtained = 159;

document.write(" *****Mark Sheet***** " + "<br>");

document.write("The total marks are : " + total_marks + "<br>");

document.write("The obtained marks are : " + marks_obtained + "<br>");

// Now we need to show the results i.e percentage in our browser

let percentage = (marks_obtained * 100) / total_marks;

document.write("The percentage taken by the student is = " + percentage);

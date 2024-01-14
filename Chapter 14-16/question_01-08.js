// Declare Empty Arrays
let arr = [];

// Empty array using object notation
let futureStudentNamesObject = new Array();

// Declare and initialize a strings array.
let array = ["Owais", "45", "hamza", "Ali"];

// Declare and initialize a numbers array.
let Number_Array = [45, 23, 90, 67, 95];

// Declare and initialize a boolean array.
let booleanArray = [true, false, true, true, false, true];

// Declare and initialize a mixed array.
let Mixed_Array = [45, "Owais", "Ali", "Ahmed", true, false, 69];

// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
// Question # 07
document.write(" <br>");
document.write("Question 07 <br>");
document.write(" <br>");
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

for (let i = 0; i <= qualifications.length; i++) {
  if (i == 8) {
    break;
  }
  document.write(i + 1 + ") " + qualifications[i] + "<br>");
}

// question 08:
document.write(" <br>");
document.write("Question 08 <br>");
document.write(" <br>");

let Students_Name_Array = ["Owais", "Hamza", "Anas"];

let Students_Marks_Array = [290, 400, 460];

percentage_01 = (Students_Marks_Array[0] * 100) / 500;

percentage_02 = (Students_Marks_Array[1] * 100) / 500;

percentage_03 = (Students_Marks_Array[2] * 100) / 500;

let percentage_Array = [percentage_01, percentage_02, percentage_03];

for (let i = 0; i < Students_Name_Array.length; i++) {
  document.write(
    `The score of ${Students_Name_Array[i]} is ${Students_Marks_Array[i]}/500. Percentage: ${percentage_Array[i]}% <br> `
  );
}

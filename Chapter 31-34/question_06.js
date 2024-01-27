// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object

document.write(
  "------------------------------- Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object ------------------------------- <br>"
);
document.write(
  "-------------------------------------- Question # 06 -------------------------------------- <br><br>"
);

let date = new Date();

let mili_seconds = date.getTime();

let minutes = mili_seconds / (1000 * 60);

console.log(minutes);

document.write("Current Date: ", date.toString(), "<br>");
document.write(
  "Elapsed Milli seconds since 1st January 1970: ",
  mili_seconds,
  "<br>"
);
document.write(
  "Elapsed minutes since 1st January 1970: ",
  Math.round(minutes),
  "<br>"
);

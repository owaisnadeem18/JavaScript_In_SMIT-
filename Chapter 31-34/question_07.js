// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”

// document.write(
//   "------------------------------- Write a program that tests whether it's before noon and alert “Its AM” else “its PM” ------------------------------- <br>"
// );
// document.write(
//   "-------------------------------------- Question # 07 -------------------------------------- <br><br>"
// );

let date = new Date();

let curr_time = date.getHours();

console.log(curr_time);

if (curr_time < 12 && curr_time >= 0) {
  alert("The current time is: " + date.toLocaleTimeString() + " It's AM");
  document.write("The current time is: ", date.toLocaleTimeString());
} else {
  alert("The current time is: " + date.toLocaleTimeString() + " It's PM");
  document.write("The current time is: ", date.toLocaleTimeString());
}

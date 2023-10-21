// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender : ");

if ((gender == "male") | (gender == "Male")) {
  document.write("Good Morning Sir !!! ");
} else if ((gender == "female") | (gender == "Female")) {
  document.write("Good Morning, Ma'am !!! ");
}

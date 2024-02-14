let obj = {
  firstName: "Owais",
  lastName: "Nadeem",
  roll_number: 4220176743029,
  enroll: true,
  hobbies: ["exercise", "coding", "learning new things"],
};

let user_input = prompt();

console.log("The roll number of the student is = ", obj[user_input]);

// If you want to print the keys of the object then we can use this loop technique
for (var owais in obj) {
  console.log(owais);
}

// If you want to print the values of the object then we can use this loop technique

console.log("------------------------------------------------------");

for (var values in obj) {
  console.log(obj[values]);
}

let obj = {
  firstName: "Owais",
  lastName: "Nadeem",
  roll_number: 29,

  enroll: true,
  hobbies: ["exercise", "coding", "learning new things"],
  students_present: {
    full_Name: "Owais Nadeem",
    roll_number: 20,
  },
  addNumbers: function (a, b) {
    // return `${obj.roll_number} + ${obj.students_present.roll_number} = ${
    //   obj.roll_number + obj.students_present.roll_number
    // }`;

    return `${a} + ${b} = ${a + b}`;
  },
};

console.log(obj.addNumbers(3, 7));

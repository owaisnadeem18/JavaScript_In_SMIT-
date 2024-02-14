// If you wanna check that either the object element is present in an object or not , then:

let obj = {
  firstName: "Owais",
  lastName: "Nadeem",
  roll_number: 4220176743029,
  enroll: true,
  hobbies: ["exercise", "coding", "learning new things"],
  students_present: {
    full_Name: "Owais Nadeem",
    roll_number: 20,
  },
};

console.log(obj);

console.log("enroll" in obj); //it will return true if the key is present or not

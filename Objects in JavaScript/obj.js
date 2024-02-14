// Creating an Object in JavaScript

// let obj = {
//   firstName: "Owais",
//   lastName: "Nadeem",
//   roll_number: 4220176743029,
//   enroll: true,
// };
// console.log(obj);

// let obj = {
//   firstName: "Owais",
//   lastName: "Nadeem",
//   roll_number: 4220176743029,
//   enroll: true,
// };
// console.log(obj.lastName);

let obj = {};

obj.name = "Owais";

console.log(obj);

// To delete an element from the object

delete obj.name;
console.log(obj);

// For example if you wanna delete all the object elements in a single go , then you can use the following technique

let object = {
  firstName: "Owais",
  lastName: "Nadeem",
  roll_number: 4220176743029,
  enroll: true,
};

console.log(object);
object = {}; // all object elemetns have been deleted
console.log(object);

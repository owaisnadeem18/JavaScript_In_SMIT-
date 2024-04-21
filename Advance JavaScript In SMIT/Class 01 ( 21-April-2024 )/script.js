// var is a global scope , except in a function
// let and const are not global scope i.e they do not get save in the body of window

// destructuring concept:

// object of stud

// stud = {
//   Stud_name: "Owais",
//   Roll_num: 20,
//   Dept: "BSCS",
// };

// // object destructuring

// const { Stud_name, Roll_num, Dept } = stud; // here we have object which has been destructured here , So we can only access it writing it's name now:

// console.log(stud.Roll_num); // don't need to write it now , after destructuring

// console.log(Stud_name);
// console.log(Roll_num);
// console.log(Dept);

// Interview Question:

// function foo(a, b) {
//   return a + b;
// }

// console.log(foo(5)); // will return NaN , because (b) is undefined . So, 5 + undefined = NaN

// Rest Operator:

// If we have too many parameters and arguments in a function , then we can just use the REST operator inside it for the purpose of copying it without witing it

// function hy(...rest) {
//   console.log(...rest);
// }

// hy(5, 9, 3, 2, 9);

// Spread Operator

// it is used to merge two objects with each other

// creating copies:
// 1. shallow copy
// 2. deep copy

// Enhanced Object Literals:

// Agar hum log object ko banayein gay or uper walay variable k andar say print krwa lain us ko object k andar , usko boltay hain enhanced object literals

// optional chaining

// Let's talk about hoisting in JavaScript

console.log(addNumbers(4, 2)); // function will run , but variable will not

function addNumbers(a, b) {
  return a / b;
}

// Because Our JS Hoist the entire variable at the top , after declaring it
// Keep this thing in your mind that only variable not the value of variable

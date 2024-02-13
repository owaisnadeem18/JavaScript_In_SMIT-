// Write a JavaScript function to check whether an 'input' is an array or not.

let find_Input = (a) => {
  if (Array.isArray(a)) {
    console.log("The Input entered by the user is ", a, " an array ");
  } else {
    console.log(
      "The Input entered by the user is ",
      a,
      " not an array i.e it's a number "
    );
  }
};

find_Input([877]);

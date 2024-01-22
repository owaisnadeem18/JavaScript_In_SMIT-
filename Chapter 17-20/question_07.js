// You have an array:
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Question # 07:
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

let A = ["cake", "apple pie", "cookie", "chips", "patties"];

let ask_user = prompt("Welcome to Lahore Bakery, What do you want to search? ");

let search_func = () => {
  let index = A.indexOf(ask_user);

  if (A.includes(ask_user)) {
    alert(`${ask_user} is available in our bakery at ${index}`);
  } else {
    alert(`${ask_user} is not available in our bakery`);
  }
};

search_func();

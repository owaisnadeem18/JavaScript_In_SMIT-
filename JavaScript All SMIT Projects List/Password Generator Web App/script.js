// Create a Password here:

let password_ = document.getElementById("password");
const length = 12;
let Upper_Case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let Lower_Case = "abcdefghijklmnopqrstuvwxyz";
let special_characters = "#@!*(^%)+/~|/?}{][";
let number = "0123456789";

let All_Characters = Upper_Case + Lower_Case + special_characters + number;

let generatePassword = () => {
  let Password = "";
  Password += Upper_Case[Math.floor(Math.random() * Upper_Case.length)];
  Password += Lower_Case[Math.floor(Math.random() * Lower_Case.length)];
  Password +=
    special_characters[Math.floor(Math.random() * special_characters.length)];
  Password += number[Math.floor(Math.random() * number.length)];
  while (length > Password.length) {
    Password +=
      All_Characters[Math.floor(Math.random() * All_Characters.length)];
  }
  password_.value = Password;
};

let CopyPassword = () => {
  password_.select();
  document.execCommand("copy");
  alert("Password Copied !!!");
};
function toggleDarkMode() {
  let color = document.querySelector("body");

  // let Dark_Mode = document.querySelector(".credits");
  // Dark_Mode.style.color = "black";
  // let first_span = document.querySelector(".first-span");
  // first_span.style.color = "blue";
  // let span_elements = document.querySelector(".diff-color");
  // span_elements.style.color = "red";
  // let cont_main_heading = document.querySelector(".cont-main-heading");
  // cont_main_heading.style.color = "black";
  // let display_class = document.querySelector(".display");
  // display_class.style.border = "1px solid black";
  // document.body.classList.toggle("dark-mode");
}

// let light_mode_emoji = document.querySelector(".toggle-btn");

// light_mode_emoji.addEventListener("click", () => {
//   let body = document.body; // Define body within the event listener
//   light_mode_emoji.innerHTML = "🌙 ";
//   body.style.backgroundColor = "white";
//   body.classList.toggle("dark-mode");
//   if (!body.classList.contains("dark-mode")) {
//     light_mode_emoji.innerHTML = "Enable Dark Mode 🌙";
//     light_mode_emoji.style.color = "black";
//   }
//   if (body.classList.contains("dark-mode")) {
//     light_mode_emoji.innerHTML = "Enable Dark Mode 🌙";
//     light_mode_emoji.style.color = "color";
//   }
// });

// Enable Dark Mode Functionality:

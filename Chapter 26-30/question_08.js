// let secret_Number = Math.round(Math.random() * 9 + 1);

// let user_guess = prompt("Make a number guess: ");

// let attempts = 0;

// if (user_guess == secret_Number) {
//   alert(
//     "Congratulations ! You guessed the number correctly in ",
//     attempts,
//     "attempts"
//   );
// } else if (user_guess < secret_Number) {
//   alert("You entered a small number ");
//   attempts += 1;
// } else if (user_guess > secret_Number) {
//   alert("You entered a bigger number ");
//   attempts += 1;
// }

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let congrats = document.querySelector(".guessed");

alert("Welcome To the Number Guess Game");

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  while (true) {
    let userGuess = prompt("Make a number guess:");

    if (userGuess === null) {
      // User clicked cancel, exit the game
      break;
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess)) {
      alert("Please enter a valid number.");
      continue;
    }

    attempts++;

    if (userGuess === secretNumber) {
      alert(
        "Congratulations! You guessed the number correctly in " +
          attempts +
          " attempts"
      );

      congrats.style.display = "inline-block";
      break;
    } else if (userGuess < secretNumber) {
      alert("You entered a smaller number.");
    } else {
      alert("You entered a larger number.");
    }
  }
});

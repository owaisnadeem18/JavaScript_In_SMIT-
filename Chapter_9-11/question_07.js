// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var randomNumber = Math.floor(Math.random() * 11); // Generates a number between 0 and 10

let user_guess = parseInt(prompt("Enter your guess number = "));

number_of_attempts = 0;

document.write("Guess a number between 1 to 10 : ");

if (user_guess == randomNumber) {
  document.write("You have guessed the correct number ");
  number_of_attempts += 1;
} else {
  document.write(
    "Try Again another time" + " The secret number was " + randomNumber
  );
}

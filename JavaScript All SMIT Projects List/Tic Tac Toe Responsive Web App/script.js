// alert("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let AudioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";
let isGameOver = false;

// Function to change the turn:

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a winner: (Note: It is a little bit complex , so understand it better )
let checkWinner = () => {
  let box_Text = document.getElementsByClassName("box-text");
  let set_winning = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  set_winning.forEach((e) => {
    if (
      box_Text[e[0]].innerText === box_Text[e[1]].innerText &&
      box_Text[e[2]].innerText === box_Text[e[1]].innerText &&
      box_Text[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        box_Text[e[0]].innerText + " Won";
      isGameOver = true;
      document
        .querySelector(".img-box")
        .getElementsByTagName("img")[0].style.width = "20rem";
      document.querySelector(".info").style.color = "rgb(0, 255, 0)";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw , ${e[4]}vw) rotate(${e[5]}deg)`;

      gameover.play();

      // Now I have to work to improve my line in the responsiveness

      let windowScreen = window.innerWidth;
      document.querySelector(".line").style.width =
        windowScreen <= 975 ? "0vw" : "21vw";
    }
  });
};

// Complete Logic of the game:

// Use click event function first

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((elem) => {
  let boxText = elem.querySelector(".box-text");
  elem.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      AudioTurn.play();
      checkWinner();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});

// Add Event Listener on reset button

reset.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".box-text");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
  document
    .querySelector(".img-box")
    .getElementsByTagName("img")[0].style.width = "0px";
  document.querySelector(".line").style.width = "0vw";
});

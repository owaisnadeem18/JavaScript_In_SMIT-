let tareekh = document.getElementById("date");

let date = new Date();

tareekh.addEventListener("click", () => {
  tareekh.innerHTML = "◌";
  tareekh.style.backgroundColor = "black";
  tareekh.style.color = "white";

  setInterval(() => {
    let currentDate = new Date();
    tareekh.innerText = currentDate.toLocaleString();
  }, 1000);
});

let desired_Date = new Date("10 March 2024 00:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var distance = desired_Date - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);

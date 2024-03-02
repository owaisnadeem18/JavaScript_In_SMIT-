// Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.

let add = document.getElementById("counter");

count = 0;

btn_add.addEventListener("click", () => {
  count++;
  add.innerHTML = count;
});

btn_subtract.addEventListener("click", () => {
  count--;
  add.innerHTML = count;
});

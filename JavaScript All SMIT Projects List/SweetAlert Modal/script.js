const container = document.getElementById("cont");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList += " animate__animated animate__tada";
  container.style.opacity = 1;
  container.style.zIndex = 999;
});

closeBtn.addEventListener("click", () => {
  container.style.opacity = 0;
  container.style.zIndex = -999;
  box.classList = "box";
});

const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");
const menuWindow = document.querySelector(".menu");

open.addEventListener("click", (el) => {
  menuWindow.classList.add("menu-open-anim");
  // menuWindow.classList.remove("hidden");
  menuWindow.style.display = "flex";
});

close.addEventListener("click", (el) => {
  menuWindow.classList.remove("menu-open-anim");
  // close.classList.add("close-menu-btn-anim");
  menuWindow.style.display = "none";

  // menuWindow.classList.add("hidden");
});

const span = document.querySelector(".dyna");
let countdown = 10;

const interval = setInterval(() => {
  countdown--;
  span.textContent = countdown;

  if (countdown === 0) {
    clearInterval(interval);
    window.location.href = "./index.html";
  }
}, 1000);

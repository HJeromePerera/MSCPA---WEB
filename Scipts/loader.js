const loadermanager = () => {
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";
  }, 4500);
};

window.onload = loadermanager();

const loadermanager = () => {
  setTimeout(() => {
    // document.querySelector(".loader").classList.add("hidden");
    document.querySelector(".loader").style.display = "none";
  }, 4500);
};

window.onload = loadermanager();

const particle1 = document.querySelector(".particle-1");
const particleDiv = document.querySelector(".particle-div");

document.addEventListener("pointermove", (e) => {
  let posX = e.pageX;
  let posY = e.pageY;

  particle1.style.top = posY + "px";
  particle1.style.left = posX + "px";
});

particle1.top = "200px";

console.log(particle1);

// let x = 50;
// let arr = [];

// for (let i = 0; i < x; i++) {
//   let newParticle = document.createElement("div");
//   newParticle.classList.add("particle-2");
//   newParticle.classList.add(`particle-2-${i}`);
//   let randNumY = Math.random() * 5000;
//   let topY = Math.trunc(randNumY);
//   let randNumX = Math.random() * 1000;
//   let leftX = Math.trunc(randNumX);

//   newParticle.style.top = topY + "px";
//   newParticle.style.left = leftX + "px";
//   particleDiv.appendChild(newParticle);
//   arr.push(i);
//   console.log(arr);
// }

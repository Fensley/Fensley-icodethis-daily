import data from "./data.js";
const experience = document.querySelector(".exp");
const quality = document.querySelector(".qua");
const design = document.querySelector(".des");

const firstImg = document.querySelector(".first-img");
const firstName = document.querySelector(".first-name");
const firstPara = document.querySelector(".first-para");

const secondImg = document.querySelector(".second-img");
const secondName = document.querySelector(".second-name");
const secondPara = document.querySelector(".second-para");

experience.addEventListener("click", () => {
  //color
  experience.classList.add("active");
  design.classList.remove("active");
  quality.classList.remove("active");
  firstImg.src = data.expImgOne;
  firstName.innerHTML = data.expNameOne;
  firstPara.innerHTML = data.expParaOne;
  secondImg.src = data.expImgTwo;
  secondName.innerHTML = data.expNameTwo;
  secondPara.innerHTML = data.expParaTwo;
});

quality.addEventListener("click", () => {
  //color
  quality.classList.add("active");
  design.classList.remove("active");
  experience.classList.remove("active");

  firstImg.src = data.quaImgOne;
  firstName.innerHTML = data.quaNameOne;
  firstPara.innerHTML = data.quaParaOne;
  secondImg.src = data.quaImgTwo;
  secondName.innerHTML = data.quaNameTwo;
  secondPara.innerHTML = data.quaParaTwo;
});

design.addEventListener("click", () => {
  //color
  design.classList.add("active");
  quality.classList.remove("active");
  experience.classList.remove("active");

  firstImg.src =
    "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  firstName.innerHTML = "Jess Hopkins";
  firstPara.innerHTML =
    "Gorgeous design! Even more responsive than the previeous version. A pleasure to use!";
  secondImg.src =
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  secondName.innerHTML = "Alice Banks";
  secondPara.innerHTML =
    "The devise has a clean design, and the metal housing feels study in my hands. Soft rounded corners make it a pleasure to look at.";
});

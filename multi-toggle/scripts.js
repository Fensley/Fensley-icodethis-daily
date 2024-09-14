const allpara = document.querySelectorAll(".first-row p");
const x = document.querySelector(".ctn-one");
const section = document.querySelector("section");
const buttontwo = document.querySelector(".btn2");

allpara.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

x.addEventListener("click", () => {
  section.classList.add("xstyle");
});

buttontwo.addEventListener("click", () => {
  allpara.forEach((e) => {
    e.classList.remove("active");
  });
});

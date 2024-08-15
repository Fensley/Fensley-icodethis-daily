const exit = document.querySelector(".fa-x");
const open = document.querySelector(".open");
const container = document.querySelector(".container");
const opendata = document.querySelector(".hiddenctn");
console.log(opendata);

exit.addEventListener("click", () => {
  container.style.display = "none";
  opendata.style.display = "block";
});
open.addEventListener("click", () => {
  container.style.display = "block";
  opendata.style.display = "none";
});

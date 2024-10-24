// toggle the monthly and the yearly

const type = document.querySelectorAll(".active-y");
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");

monthly.addEventListener("click", () => {
  if (yearly.classList.contains("testing")) {
    yearly.classList.remove("testing");
    monthly.classList.add("testing");
  }
});

yearly.addEventListener("click", () => {
  if (monthly.classList.contains("testing")) {
    yearly.classList.add("testing");
    monthly.classList.remove("testing");
  }
});

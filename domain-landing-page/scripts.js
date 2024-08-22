const sign = document.querySelector(".signIN");
const hiddenctn = document.querySelector(".secondhidden");

sign.addEventListener("click", () => {
  hiddenctn.classList.toggle("secondhidden");

  if (hiddenctn.classList.contains("secondhidden")) {
    sign.innerHTML = `Sign in <i class="fa-solid fa-chevron-down"></i>`;
  } else {
    sign.innerHTML = `Sign in <i class="fa-solid fa-chevron-up"></i>`;
  }
});

import { data } from "./data.js";

data.forEach((e) => {
  const ul = document.querySelector("#results-list");
  ul.insertAdjacentHTML("beforeend", `<li>${e.spacecraft}</li>`);
});

const input = document.querySelector("#app-search");
input.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const li = document.querySelectorAll("li");
  li.forEach((e) => {
    const to = e.textContent.toLowerCase();
    if (to.includes(query)) {
      e.style.display = "";
    } else {
      e.style.display = "none";
    }
  });
});

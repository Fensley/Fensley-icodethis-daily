const collection = document.querySelector(".col");
const items = document.querySelector(".ite");
const image = document.querySelector(".img");
const api = document.querySelector(".api");
const launch = document.querySelector(".launch");
const name = document.querySelector(".name");
const from = document.querySelector(".from");

collection.addEventListener("click", () => {
  collection.classList.add("default");
  items.classList.remove("default");
  image.classList.remove("default");
  api.classList.remove("default");
  from.innerHTML = "From our Collection";
  launch.innerHTML = "Expanding collection for JCB payment";
  name.innerHTML = "Fensley Rene";
});

items.addEventListener("click", () => {
  items.classList.add("default");
  collection.classList.remove("default");
  image.classList.remove("default");
  api.classList.remove("default");
  from.innerHTML = "From our items";
  launch.innerHTML = "Expanding item for payment";
  name.innerHTML = "Nehemie Fortilus";
});

image.addEventListener("click", () => {
  image.classList.add("default");
  collection.classList.remove("default");
  items.classList.remove("default");
  api.classList.remove("default");
  from.innerHTML = "From our image";
  launch.innerHTML = "Expanding image for payment";
  name.innerHTML = "RUTH Fortilus";
});

api.addEventListener("click", () => {
  api.classList.add("default");
  image.classList.remove("default");
  collection.classList.remove("default");
  items.classList.remove("default");
  from.innerHTML = "From our API";
  launch.innerHTML = "Expanding API for payment";
  name.innerHTML = "Guerdlande Fortilus";
});

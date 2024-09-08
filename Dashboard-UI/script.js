const menu = document.querySelector(".fa-bars");
const Dashboard = document.querySelector(".das");
const project = document.querySelector(".pro");
const user = document.querySelector(".use");
const profileData = document.querySelector(".too-data");
const hiddenpara = document.querySelector(".hiddendata");
const direct = document.querySelector(".direct");
const social = document.querySelector(".social");
const organic = document.querySelector(".organic");
// console.log(direct);
menu.addEventListener("click", () => {
  console.log("here");
  profileData.style.display = "none";
  Dashboard.style.display = "block";
  project.style.display = "block";
  user.style.display = "block";
});
Dashboard.addEventListener("click", () => {
  profileData.style.display = "flex";
  Dashboard.style.display = "none";
  project.style.display = "none";
  user.style.display = "none";
  hiddenpara.style.visibility = "visible";
  hiddenpara.innerHTML = "Dashboard";
  direct.innerHTML = "24% Direct";
  social.innerHTML = "31% Social";
  organic.innerHTML = "45% Organic";
});
project.addEventListener("click", () => {
  profileData.style.display = "flex";
  Dashboard.style.display = "none";
  project.style.display = "none";
  user.style.display = "none";
  hiddenpara.style.visibility = "visible";
  hiddenpara.innerHTML = "Project";
  direct.innerHTML = "10% Direct";
  social.innerHTML = "50% Social";
  organic.innerHTML = "15% Organic";
});
user.addEventListener("click", () => {
  profileData.style.display = "flex";
  Dashboard.style.display = "none";
  project.style.display = "none";
  user.style.display = "none";
  hiddenpara.style.visibility = "visible";
  hiddenpara.innerHTML = "User";
  direct.innerHTML = "71% Direct";
  social.innerHTML = "09% Social";
  organic.innerHTML = "10% Organic";
});
console.log();

const elem = document.getElementById("searchBox");

elem.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  console.log(query);
  const listItems = document.querySelectorAll("#resultList li");

  listItems.forEach(function (item) {
    const text = item.textContent.toLowerCase();
    console.log(item);

    if (text.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

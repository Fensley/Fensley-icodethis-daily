document.getElementById("searchBox").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const listItems = document.querySelectorAll("#resultList li");

  listItems.forEach(function (item) {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
});

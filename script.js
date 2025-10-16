// Filter features by search
const searchInput = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");

searchInput.addEventListener("keyup", () => {
  const searchValue = searchInput.value.toLowerCase();
  const rows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const feature = rows[i].getElementsByTagName("td")[0];
    if (feature) {
      const textValue = feature.textContent || feature.innerText;
      rows[i].style.display = textValue.toLowerCase().includes(searchValue)
        ? ""
        : "none";
    }
  }
});


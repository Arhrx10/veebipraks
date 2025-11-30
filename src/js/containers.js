const selectedContainers = [];

document.querySelectorAll(".icons").forEach((cell) => {
  cell.addEventListener("click", () => {
    const img = cell;
    const alt = img.alt;

    cell.classList.toggle("selected");

    if (cell.classList.contains("selected")) {
      if (!selectedContainers.includes(alt)) {
        selectedContainers.push(alt);
      }
    } else {
      const index = selectedContainers.indexOf(alt);
      if (index > -1) {
        selectedContainers.splice(index, 1);
      }
    }
    localStorage.setItem("containers", JSON.stringify(selectedContainers));
    console.log(localStorage.getItem("containers"));
  });
});

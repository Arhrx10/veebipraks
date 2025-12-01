// Valitud konteinerite nimed salvestatakse antud massiivi
const selectedContainers = [];

// Leiame kõik konteineri ikoonid
document.querySelectorAll(".icons").forEach((cell) => {
  // Lisame igale ikoonile klõpsamise sündmuse
  cell.addEventListener("click", () => {
    const img = cell; //klikitud element
    const alt = img.alt; //konteineri tüüp

    // CSS klassi "selected" sisse/välja lülitamine
    cell.classList.toggle("selected");

    // valitud konteiner lisatakse listi
    if (cell.classList.contains("selected")) {
      // Lisatakse ainult siis, kui seda veel pole
      if (!selectedContainers.includes(alt)) {
        selectedContainers.push(alt);
      }
    } else {
      // Kui konteiner eemaldati, siis eemaldatakse see ka massiivist
      const index = selectedContainers.indexOf(alt);
      if (index > -1) {
        selectedContainers.splice(index, 1);
      }
    }
    // Salvestatakse valikud localStorage'i, et need säiliks järgmisele lehele minnes

    localStorage.setItem("containers", JSON.stringify(selectedContainers));

    // Logitakse kontrolliks brauseri konsooli

    console.log(localStorage.getItem("containers"));
  });
});
// Andreas Rey Hõim poolt tehtud
// Prügiliikide andmebaasi importimine
import { wasteDB } from "./data.js";

// Koht HTML-is, kuhu tulemused kuvatakse
const wrapper = document.getElementById("result-list");

// Kasutaja poolt valitud esemed (salvestatud search.html lehelt)
const items = JSON.parse(localStorage.getItem("selectedItems")) || [];

// Kasutaja valitud konteineritüübid (search.html kastide valikud)
// Kui kasutaja midagi ei vali, vaikimisi on lubatud olmeprügi
const allowedContainers = JSON.parse(localStorage.getItem("containers")) || [
  "olme",
]; // lisa see rida

// Kui ühtegi eset pole valitud, väljastatakse veateade

if (items.length === 0) {
  wrapper.innerHTML = `<p>Viga: ühtegi eset pole lisatud.</p>`;
} else {
  let html = "";

  // Käime läbi kõik kasutaja valitud esemed
  items.forEach((item) => {
    // Otsime wasteDB-st vastava objekti (päris info)
    const foundItem = wasteDB.find((x) => x.name === item.name);

    // Kui eset pole andmebaasis, kuvatakse eraldi teade
    if (!foundItem) {
      html += `
        <div class="result-item">
          <strong>${item.name}</strong><br>
          <em>Ese puudub andmebaasis.</em>
        </div>
      `;
      return; // järgmine ese
    }

    // Kui kasutaja on valinud konteineri, mis vastab eseme tüübi konteinerile,
    // siis kasutame seda, muidu suuname eseme olmeprügisse
    const container = allowedContainers.includes(foundItem.container)
      ? foundItem.container
      : "olme";

    // Kui ese läheb õigesse konteinerisse, kuvame originaaljuhised
    // Kui ese läheb ümber tõstmisel olmeks, kuvame olme juhise
    const instructions =
      container === foundItem.container
        ? foundItem.instructions
        : "Pane olmeprügisse.";

    // Koostame HTML-kasti iga eseme kohta
    html += `
      <div class="result-item">
        <strong>${foundItem.name}</strong><br><br>

        <b>Kategooria:</b>
        <span class="result-container-color">
          ${container}
        </span><br><br>

        <b>Juhised:</b><br>
        ${instructions}<br><br>

      </div>
    `;
  });

  // Paneme kogu tulemuse HTML-i sisse

  wrapper.innerHTML = html;
}

// Andreas Rey Hõimi poolt tehtud, Orm Saaresalu parandas
// Edasised parandused teinud Rickie.

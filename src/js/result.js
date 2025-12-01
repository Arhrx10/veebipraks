import { wasteDB, containerColors } from "./data.js";

const wrapper = document.getElementById("result-list");
const items = JSON.parse(localStorage.getItem("selectedItems")) || [];
const allowedContainers = JSON.parse(localStorage.getItem("containers")) || ["olme"]; // lisa see rida

if (items.length === 0) {
  wrapper.innerHTML = `<p>Viga: ühtegi eset pole lisatud.</p>`;
} else {
  let html = "";

  items.forEach((item) => {
    const foundItem = wasteDB.find(x => x.name === item.name);

    if (!foundItem) {
      html += `
        <div class="result-item">
          <strong>${item.name}</strong><br>
          <em>Ese puudub andmebaasis.</em>
        </div>
      `;
      return; // järgmine ese
    }

    const container = allowedContainers.includes(foundItem.container) ? foundItem.container : "olme";
    const instructions = container === foundItem.container ? foundItem.instructions : "Pane olmeprügisse.";

    html += `
      <div class="result-item">
        <strong>${foundItem.name}</strong><br><br>

        <b>Kategooria:</b>
        <span class="result-container-color" style="color:${containerColors[container]}">
          ${container}
        </span><br><br>

        <b>Juhised:</b><br>
        ${instructions}<br><br>

        <small><em>Märksõnad: ${foundItem.keywords.join(", ")}</em></small>
      </div>
    `;
  });

  wrapper.innerHTML = html;
}
// Andreas Rey Hõimi poolt tehtud, Orm Saaresalu parandas

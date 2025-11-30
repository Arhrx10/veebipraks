import { wasteDB, containerColors } from "./data.js";

const wrapper = document.getElementById("result-list");
const items = JSON.parse(localStorage.getItem("selectedItems")) || [];

if (items.length === 0) {
  wrapper.innerHTML = `<p>Viga: ühtegi eset pole lisatud.</p>`;
} else {
  let html = "";

  items.forEach((item) => {
    const fullItem = wasteDB.find((x) => x.name === item.name);

    if (!fullItem) {
      html += `
        <div class="result-item">
          <strong>${item.name}</strong><br>
          <em>Ese puudub andmebaasis.</em>
        </div>
      `;
    } else {
      html += `
        <div class="result-item">
          <strong>${fullItem.name}</strong><br><br>

          <b>Kategooria:</b>
          <span class="result-container-color" style="color:${containerColors[fullItem.container]}">
            ${fullItem.container}
          </span><br><br>

          <b>Juhised:</b><br>
          ${fullItem.instructions}<br><br>

          <small><em>Märksõnad: ${fullItem.keywords.join(", ")}</em></small>
        </div>
      `;
    }
  });

  wrapper.innerHTML = html;
}

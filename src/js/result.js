import { wasteDB, containerColors } from "./data.js";

const resultBody = document.getElementById("result-body");

const items = JSON.parse(localStorage.getItem("selectedItems")) || [];

const uniqueItems = [];
const seen = new Set();
localStorage.setItem("page", "result");

for (const i of items) {
  if (!seen.has(i.name)) {
    seen.add(i.name);
    uniqueItems.push(i);
  }
}

if (items.length === 0) {
  resultBody.innerHTML = `
    <tr>
      <td colspan="3">Viga: ühtegi eset pole lisatud.</td>
    </tr>`;
} else {
  let html = "";

  items.forEach((item) => {
    const fullItem = wasteDB.find(x => x.name === item.name);

    if (!fullItem) {
      html += `
        <tr>
          <td>${item.name}</td>
          <td colspan="3">Ese puudub andmebaasis.</td>
        </tr>
      `;
    } else {
      html += `
        <tr>
          <td>
            ${fullItem.image ? `<img src="${fullItem.image}" alt="${fullItem.name}" style="width:60px;height:60px;"><br>` : ""}
            <strong>${fullItem.name}</strong>
          </td>

          <td>
            ${fullItem.container}<br>
            <span style="color:${containerColors[fullItem.container] || "black"};">
              ${containerColors[fullItem.container] || ""}
            </span>
          </td>

          <td>
            ${fullItem.instructions}
            ${fullItem.keywords ? `<br><small>Märksõnad: ${fullItem.keywords.join(", ")}</small>` : ""}
          </td>
        </tr>
      `;
    }
  });

  resultBody.innerHTML = html;
}

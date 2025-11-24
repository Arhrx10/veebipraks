import { wasteDB } from "./data.js";

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
          <td colspan="2">Ese puudub andmebaasis.</td>
        </tr>
      `;
    } else {
      html += `
        <tr>
          <td>${fullItem.name}</td>
          <td>${fullItem.container}</td>
          <td>${fullItem.instructions}</td>
        </tr>
      `;
    }
  });

  resultBody.innerHTML = html;
}

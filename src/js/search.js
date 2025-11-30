import { wasteDB } from "./data.js";

// Loeme kasutaja valitud konteinerid avalehelt
const allowedContainers = JSON.parse(localStorage.getItem("containers")) || [];

// Puhastame varasemad valitud tulemused
localStorage.removeItem("selectedItems");
let selectedItems = [];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

// Leiame vasteid + FILTREERIME KONTEINERI ALUSEL
function findMatches(query) {
  const lower = query.toLowerCase();

  return wasteDB.filter((item) =>
    item.name.toLowerCase().includes(lower) &&
    allowedContainers.includes(item.container)   // 🔥 Oluline filter!
  );
}

// Kuvame soovitusi
function showSuggestions(list) {
  suggestionsBox.innerHTML = "";

  if (list.length === 0) {
    suggestionsBox.innerHTML = `<p>Ei leidnud vasteid või sobiv konteiner puudub.</p>`;
    return;
  }

  list.forEach((item) => {
    const div = document.createElement("div");
    div.className = "suggestion";

    const isSelected = selectedItems.some((x) => x.name === item.name);

    div.innerHTML = `
      <span class="checkmark">${isSelected ? "✔️" : "⬜"}</span>
      <div class="suggestion-text">
        <strong>${item.name}</strong><br>
        Kategooria: <em>${item.container}</em>
      </div>
    `;

    // Toggle valitud olekut
    div.addEventListener("click", () => {
      const index = selectedItems.findIndex((x) => x.name === item.name);

      if (index === -1) {
        selectedItems.push(item);
        div.querySelector(".checkmark").textContent = "✔️";
      } else {
        selectedItems.splice(index, 1);
        div.querySelector(".checkmark").textContent = "⬜";
      }

      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    });

    suggestionsBox.appendChild(div);
  });
}

// ENTER -> edasi tulemuste lehele
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.location.href = "result.html";
  }
});

// Reaalajas otsing
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  const matches = findMatches(query);
  showSuggestions(matches);
});

// --------------------------
// NUPP: “Näita tulemusi”
// --------------------------

const goBtn = document.getElementById("go-results");

goBtn.addEventListener("click", () => {
  if (selectedItems.length === 0) {
    alert("Palun vali vähemalt üks ese, et näha tulemusi.");
    return;
  }

  window.location.href = "result.html";
});

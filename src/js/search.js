import { wasteDB } from "./data.js";

// Search lehele tulles puhastame valikud
localStorage.removeItem("selectedItems");
let selectedItems = [];

const searchInput = document.getElementById("search");
const suggestionsBox = document.getElementById("suggestions");

function findMatches(query) {
  const lower = query.toLowerCase();
  return wasteDB.filter((item) => item.name.toLowerCase().includes(lower));
}

function showSuggestions(list) {
  suggestionsBox.innerHTML = "";

  if (list.length === 0) {
    suggestionsBox.innerHTML = `<p>Ei leidnud vasteid.</p>`;
    return;
  }

  list.forEach((item) => {
    const div = document.createElement("div");
    div.className = "suggestion";

    const isSelected = selectedItems.some(x => x.name === item.name);

    div.innerHTML = `
      <span class="checkmark">${isSelected ? "✔️" : "⬜"}</span>
      <div class="suggestion-text">
        <strong>${item.name}</strong><br>
        Kategooria: <em>${item.container}</em>
      </div>
    `;

    // Toggle valitud olekut
    div.addEventListener("click", () => {
      const index = selectedItems.findIndex(x => x.name === item.name);

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

// ENTER → lisa ekraanil olevad tulemused
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
      window.location.href = "result.html";
  }
});

// Input → näita soovitusi
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  const matches = findMatches(query);
  showSuggestions(matches);
});

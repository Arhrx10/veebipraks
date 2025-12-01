// Kõik konteinerid
const containerBoxes = document.querySelectorAll(".container-box");

// Loeme varem salvestatud valikud
let selected = JSON.parse(localStorage.getItem("containers")) || [];

// OLME peab alati olemas olema
if (!selected.includes("olme")) {
    selected.push("olme");
}
localStorage.setItem("containers", JSON.stringify(selected));

// Algseadistus + klikilistener
containerBoxes.forEach(box => {
    const type = box.dataset.type;

    if (selected.includes(type)) {
        box.classList.add("selected");
    }

    if (type === "olme") {
        // Lukustame olme kasti
        box.classList.add("locked");
        box.style.pointerEvents = "none"; // ei lase klikkida
    } else {
        // Lisan klikilisteneri teistele kastidele
        box.addEventListener("click", () => {
            if (selected.includes(type)) {
                selected = selected.filter(x => x !== type);
                box.classList.remove("selected");
            } else {
                selected.push(type);
                box.classList.add("selected");
            }
            localStorage.setItem("containers", JSON.stringify(selected));
        });
    }
});


// "Otsi eset" nupp
const searchBtn = document.getElementById("go-search");

searchBtn.addEventListener("click", () => {
    if (selected.length === 0) {
        alert("Vali vähemalt üks jäätmekonteiner.");
        return;
    }
    window.location.href = "search.html";
});

// Orm Saaresalu tehtud
// Koodi parandused teinud Rickie.
// Kõik konteinerid
const containerBoxes = document.querySelectorAll(".container-box");

// Loeme varem salvestatud valikud
let selected = JSON.parse(localStorage.getItem("containers")) || [];

// Algseadistus — märgime juba valitud konteinerid
containerBoxes.forEach(box => {
    const type = box.dataset.type;
    if (selected.includes(type)) {
        box.classList.add("selected");
    }

    // Klikk — vali või eemalda valik
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

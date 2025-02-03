// Zoznam konšpiračných teórií
const conspiracies = {
    "usa": [
        "Pád dvojčiat (11. september 2001)",
        "Vražda prezidenta Kennedyho",
        "Fenomén UFO v Roswelle",
        "FEMA a koncentračné tábory",
        "Sandy Hook ako fáma",
        "Moon landing ako podvod",
        "JFK Jr. a QAnon",
        "11. september ako vnútorná záležitosť",
        "COVID-19 ako biologická zbraň",
        "Volby v USA 2020 ako podvod"
    ],
    "world": [
        "Smrť princeznej Diany",
        "Cheopsova pyramída a mimozemšťania",
        "Nový svetový poriadok",
        "Ilumináti",
        "HAARP a ovládanie počasia",
        "Prázdna Zem",
        "Fenomén roku 2012",
        "Chemtrails",
        "Bilderbergská skupina",
        "Area 51 a mimozemské technológie"
    ]
};

// Funkcia na zobrazenie konšpiračných teórií
function showConspiracies(type) {
    document.getElementById("main-buttons").style.display = "none";
    const container = document.getElementById("conspiracy-container");
    container.innerHTML = "";

    conspiracies[type].forEach(conspiracy => {
        const btn = document.createElement("div");
        btn.classList.add("sub-button");
        btn.textContent = conspiracy;
        btn.onclick = () => alert(`Vybrali ste: ${conspiracy}`);
        container.appendChild(btn);
    });

    container.style.display = "flex";
    document.getElementById("back-button").style.display = "block";
}

// Funkcia na návrat na hlavnú obrazovku
function showMainMenu() {
    document.getElementById("main-buttons").style.display = "flex";
    document.getElementById("conspiracy-container").style.display = "none";
    document.getElementById("back-button").style.display = "none";
}
// Zoznam konšpiračných teórií
const worldConspiracies = [
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
];

// Funkcia na zobrazenie konšpiračných teórií a skrytie ostatných tlačidiel
function showWorldConspiracies() {
    document.getElementById("main-buttons").style.display = "none";
    const container = document.getElementById("world-conspiracies");
    container.innerHTML = ""; // Vyčistí predchádzajúci obsah

    worldConspiracies.forEach(conspiracy => {
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
    document.getElementById("world-conspiracies").style.display = "none";
    document.getElementById("back-button").style.display = "none";
}

// Funkcia na navigáciu
function navigate(page) {
    switch(page) {
        case 'usa':
            window.location.href = "usa.html";
            break;
        case 'news':
            window.location.href = "news.html";
            break;
        case 'videos':
            window.location.href = "videos.html";
            break;
        default:
            alert("Neznáma stránka!");
    }
}
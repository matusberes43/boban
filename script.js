// Funkcia pre vytvorenie a pridanie boxov
function createBoxes(theories, containerId) {
  const contentBox = document.getElementById(containerId);
  contentBox.innerHTML = ""; // Vyčistiť obsah

  theories.forEach((theory) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `<i class="fas fa-question"></i> ${theory}`; // Pridaná ikona
    contentBox.appendChild(box);
  });
}

// Funkcia pre zobrazenie konšpiračných teórií USA
function showUSA() {
  const usaTheories = [
    "Area 51 a mimozemšťania",
    "11. september 2001",
    "Zavraždenie Johna F. Kennedyho",
    "Pristátie na Mesiaci",
    "Projekt MKUltra",
    "Roswellský incident",
    "Chemtrails",
    "Illumináti a Nový svetový poriadok",
    "Smrť Marilyn Monroe",
    "Smrť Jeffreyho Epsteina",
    "HAARP a manipulácia počasia",
    "QAnon",
    "Denver International Airport a podzemné základne",
    "Paul McCartney je mŕtvy",
    "COVID-19 ako biologická zbraň alebo podvod"
  ];

  createBoxes(usaTheories, "content-box");
  playClickSound();
}

// Funkcia pre zobrazenie konšpiračných teórií sveta
function showWorld() {
  const worldTheories = [
    "Smrť princeznej Diany",
    "Záhada Dyatlovovej výpravy",
    "Zmiznutie letu MH370",
    "Černobyľská katastrofa",
    "Tunguská udalosť",
    "Stonehenge",
    "Nacisti v Antarktíde"
  ];

  createBoxes(worldTheories, "content-box");
  playClickSound();
}

// Funkcia pre zobrazenie náhodnej teórie
function showRandomTheory() {
  const allTheories = [
    "Area 51 a mimozemšťania",
    "11. september 2001",
    "Zavraždenie Johna F. Kennedyho",
    "Smrť princeznej Diany",
    "Záhada Dyatlovovej výpravy",
    "COVID-19 ako biologická zbraň alebo podvod"
  ];

  const randomTheory = allTheories[Math.floor(Math.random() * allTheories.length)];
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = `<div class="box"><i class="fas fa-dice"></i> ${randomTheory}</div>`;
  playClickSound();
}

// Funkcia pre resetovanie obsahu
function resetContent() {
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = "";
  playClickSound();
}

// Funkcia pre prepínanie tmavého režimu
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const button = document.querySelector(".interactive-button");
  if (body.classList.contains("dark-mode")) {
    button.innerHTML = '<span class="icon">☀️</span> Režim svetlého svetla';
  } else {
    button.innerHTML = '<span class="icon">🌙</span> Režim tmavého svetla';
  }
  playClickSound();
}

// Funkcia pre prehratie zvukového efektu
function playClickSound() {
  const clickSound = document.getElementById("click-sound");
  if (clickSound) {
    clickSound.play();
  } else {
    console.error("Zvukový súbor nebol nájdený!");
  }
}

// Pridanie event listenerov pre tlačidlá
document.addEventListener("DOMContentLoaded", function () {
  // Tlačidlá pre teórie
  document.getElementById("usa-box").addEventListener("click", showUSA);
  document.getElementById("world-box").addEventListener("click", showWorld);
  document.getElementById("random-box").addEventListener("click", showRandomTheory);

  // Resetovacie tlačidlo
  document.querySelector(".reset-button").addEventListener("click", resetContent);

  // Tlačidlo pre tmavý režim
  document.querySelector(".interactive-button").addEventListener("click", toggleDarkMode);

  // Kliknutie na boxy
  const contentBox = document.getElementById("content-box");
  contentBox.addEventListener("click", function (event) {
    if (event.target.classList.contains("box")) {
      alert(`Vybrali ste teóriu: ${event.target.textContent}`);
    }
  });
});
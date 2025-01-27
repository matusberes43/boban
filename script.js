// Funkcia pre vytvorenie a pridanie boxov
function createBoxes(theories, containerId) {
  const contentBox = document.getElementById(containerId);
  contentBox.innerHTML = ""; // Vyčistiť obsah

  theories.forEach((theory) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `<i class="${theory.icon}"></i> ${theory.name}`; // Pridaná ikona
    contentBox.appendChild(box);
  });
}

// Zoznam teórií USA s ikonkami
const usaTheories = [
  { name: "Area 51 a mimozemšťania", icon: "fas fa-ufo" },
  { name: "11. september 2001", icon: "fas fa-building" },
  { name: "Zavraždenie Johna F. Kennedyho", icon: "fas fa-user-secret" },
  { name: "Pristátie na Mesiaci", icon: "fas fa-moon" },
  { name: "Projekt MKUltra", icon: "fas fa-brain" },
  { name: "Roswellský incident", icon: "fas fa-space-shuttle" },
  { name: "Chemtrails", icon: "fas fa-cloud" },
  { name: "Illumináti a Nový svetový poriadok", icon: "fas fa-eye" },
  { name: "Smrť Marilyn Monroe", icon: "fas fa-star" },
  { name: "Smrť Jeffreyho Epsteina", icon: "fas fa-skull" },
  { name: "HAARP a manipulácia počasia", icon: "fas fa-bolt" },
  { name: "QAnon", icon: "fas fa-question" },
  { name: "Denver International Airport a podzemné základne", icon: "fas fa-plane" },
  { name: "Paul McCartney je mŕtvy", icon: "fas fa-music" },
  { name: "COVID-19 ako biologická zbraň alebo podvod", icon: "fas fa-virus" }
];

// Zoznam teórií sveta s ikonkami
const worldTheories = [
  { name: "Smrť princeznej Diany", icon: "fas fa-crown" },
  { name: "Záhada Dyatlovovej výpravy", icon: "fas fa-mountain" },
  { name: "Zmiznutie letu MH370", icon: "fas fa-plane" },
  { name: "Černobyľská katastrofa", icon: "fas fa-radiation" },
  { name: "Tunguská udalosť", icon: "fas fa-meteor" },
  { name: "Stonehenge", icon: "fas fa-monument" },
  { name: "Nacisti v Antarktíde", icon: "fas fa-igloo" }
];

// Funkcia pre zobrazenie konšpiračných teórií USA
function showUSA() {
  createBoxes(usaTheories, "content-box");
  playClickSound("click-sound-usa");
}

// Funkcia pre zobrazenie konšpiračných teórií sveta
function showWorld() {
  createBoxes(worldTheories, "content-box");
  playClickSound("click-sound-world");
}

// Funkcia pre zobrazenie náhodnej teórie
function showRandomTheory() {
  const allTheories = [...usaTheories, ...worldTheories];
  const randomTheory = allTheories[Math.floor(Math.random() * allTheories.length)];
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = `<div class="box"><i class="${randomTheory.icon}"></i> ${randomTheory.name}</div>`;
  playClickSound("click-sound-random");
}

// Funkcia pre resetovanie obsahu
function resetContent() {
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = "";
  playClickSound("click-sound-reset");
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
  playClickSound("click-sound-darkmode");
}

// Funkcia pre prehratie zvukového efektu
function playClickSound(soundId) {
  const clickSound = document.getElementById(soundId);
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
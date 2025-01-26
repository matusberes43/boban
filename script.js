// Funkcia pre zobrazenie konšpiračných teórií USA
function showUSA() {
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = ""; // Vyčistiť obsah

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

  usaTheories.forEach((theory) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = theory;
    contentBox.appendChild(box);
  });
}

// Funkcia pre zobrazenie konšpiračných teórií sveta
function showWorld() {
  const contentBox = document.getElementById("content-box");
  contentBox.innerHTML = ""; // Vyčistiť obsah

  const worldTheories = [
    "Smrť princeznej Diany",
    "Záhada Dyatlovovej výpravy",
    "Zmiznutie letu MH370",
    "Černobyľská katastrofa",
    "Tunguská udalosť",
    "Stonehenge",
    "Nacisti v Antarktíde"
  ];

  worldTheories.forEach((theory) => {
    const box = document.createElement("div");
    box.className = "box";
    box.textContent = theory;
    contentBox.appendChild(box);
  });
}
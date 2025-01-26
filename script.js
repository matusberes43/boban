// Dáta pre konšpirácie
const conspiracies = {
  world: [
    "Smrť princeznej Diany (Spojené kráľovstvo)",
    "Černobyľská katastrofa (Ukrajina/Sovietsky zväz)",
    "Roswellský incident v Brazílii (Varghinha)",
    "Záhada Dyatlovovej výpravy (Rusko)",
    "Tunguská udalosť (Rusko)",
    "Smrť Pierra Bérégovoy (Francúzsko)",
    "Sprisahanie okolo Titanicu (Británia)",
    "Záhada zmiznutia letu MH370 (Malajzia)",
    "Projekt Rainbow/Philadelphia"
  ],
  usa: [
    "Area 51 a mimozemšťania",
    "11. september 2001 (9/11)",
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
    "Paul McCartney je mŕtvy (Beatles teória)",
    "COVID-19 ako biologická zbraň alebo podvod"
  ]
};

// Funkcia na zobrazenie konšpirácií
function showConspiracies(category) {
  const container = document.getElementById("content-container");
  container.innerHTML = ""; // Vyčistí obsah
  conspiracies[category].forEach(conspiracy => {
    const box = document.createElement("div");
    box.className = "content-box";
    box.textContent = conspiracy;
    container.appendChild(box);
  });
}
// Dáta pre konšpirácie
const conspiracies = {
  world: [
    { title: "Smrť princeznej Diany", link: "#" },
    { title: "Černobyľská katastrofa", link: "#" },
    { title: "Roswellský incident v Brazílii", link: "#" },
    { title: "Záhada Dyatlovovej výpravy", link: "#" },
    { title: "Tunguská udalosť", link: "#" },
    { title: "Smrť Pierra Bérégovoy", link: "#" },
    { title: "Sprisahanie okolo Titanicu", link: "#" },
    { title: "Záhada zmiznutia letu MH370", link: "#" },
    { title: "Projekt Rainbow/Philadelphia", link: "#" }
  ],
  usa: [
    { title: "Area 51 a mimozemšťania", link: "#" },
    { title: "11. september 2001 (9/11)", link: "#" },
    { title: "Zavraždenie Johna F. Kennedyho", link: "#" },
    { title: "Pristátie na Mesiaci", link: "#" },
    { title: "Projekt MKUltra", link: "#" },
    { title: "Roswellský incident", link: "#" },
    { title: "Chemtrails", link: "#" },
    { title: "Illumináti a Nový svetový poriadok", link: "#" },
    { title: "Smrť Marilyn Monroe", link: "#" },
    { title: "Smrť Jeffreyho Epsteina", link: "#" },
    { title: "HAARP a manipulácia počasia", link: "#" },
    { title: "QAnon", link: "#" },
    { title: "Denver International Airport", link: "#" },
    { title: "Paul McCartney je mŕtvy", link: "#" },
    { title: "COVID-19 ako biologická zbraň alebo podvod", link: "#" }
  ]
};

// Funkcia na zobrazenie konšpirácií
function showConspiracies(category) {
  const container = document.getElementById("content-container");
  container.innerHTML = ""; // Vyčistí obsah
  conspiracies[category].forEach(conspiracy => {
    const box = document.createElement("div");
    box.className = "content-box";
    box.innerHTML = `<a href="${conspiracy.link}">${conspiracy.title}</a>`;
    container.appendChild(box);
  });
}
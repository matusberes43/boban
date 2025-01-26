// Zoznam konšpirácií
const conspiracies = {
  world: [
    { title: "Smrť princeznej Diany", link: "diana.html" },
    { title: "Černobyľská katastrofa", link: "cernobyl.html" },
    { title: "Roswellský incident v Brazílii", link: "roswell-brazil.html" },
    { title: "Záhada Dyatlovovej výpravy", link: "dyatlov.html" },
    { title: "Tunguská udalosť", link: "tunguska.html" },
    { title: "Smrť Pierra Bérégovoy", link: "beregovoy.html" },
    { title: "Sprisahanie okolo Titanicu", link: "titanic.html" },
    { title: "Záhada zmiznutia letu MH370", link: "mh370.html" },
    { title: "Projekt Rainbow/Philadelphia", link: "philadelphia.html" }
  ],
  usa: [
    { title: "Area 51 a mimozemšťania", link: "area-51.html" },
    { title: "11. september 2001", link: "11-september.html" },
    { title: "Zavraždenie Johna F. Kennedyho", link: "jfk.html" },
    { title: "Pristátie na Mesiaci", link: "moon-landing.html" },
    { title: "Projekt MKUltra", link: "mkultra.html" },
    { title: "Roswellský incident", link: "roswell.html" },
    { title: "Chemtrails", link: "chemtrails.html" },
    { title: "Illumináti a Nový svetový poriadok", link: "illuminati.html" },
    { title: "Smrť Marilyn Monroe", link: "marilyn-monroe.html" },
    { title: "Smrť Jeffreyho Epsteina", link: "epstein.html" },
    { title: "HAARP a manipulácia počasia", link: "haarp.html" },
    { title: "QAnon", link: "qanon.html" },
    { title: "Denver International Airport", link: "denver-airport.html" },
    { title: "Paul McCartney je mŕtvy", link: "paul-mccartney.html" },
    { title: "COVID-19 ako biologická zbraň alebo podvod", link: "covid.html" }
  ]
};

// Generovanie zoznamu konšpirácií
const conspiracyList = document.getElementById("conspiracy-list");

// Funkcia na generovanie kategórie
function generateCategory(category, title) {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");

  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = title;
  categoryDiv.appendChild(categoryTitle);

  const list = document.createElement("ul");
  conspiracies[category].forEach(conspiracy => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = conspiracy.link;
    link.textContent = conspiracy.title;
    listItem.appendChild(link);
    list.appendChild(listItem);
  });

  categoryDiv.appendChild(list);
  conspiracyList.appendChild(categoryDiv);
}

// Generovanie kategórií
generateCategory("world", "Svetové konšpirácie");
generateCategory("usa", "Americké konšpirácie");
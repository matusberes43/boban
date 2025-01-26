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
    { title: "Area 51 a mimozemšťania", link: "area-51" },
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

// Články
const articles = {
  "area-51": `
    <div class="article">
      <h2>Area 51 a mimozemšťania</h2>
      <p>Area 51 je jednou z najznámejších tajných vojenských základní na svete, ktorá leží v Nevadskej púšti, približne 135 km severozápadne od Las Vegas. Oficiálne je známa ako Groom Lake alebo Homey Airport, ale pre verejnosť sa stala symbolom tajomstiev a konšpirácií. Základňa bola založená v roku 1955 počas studenej vojny ako testovacie miesto pre vývoj špionážneho lietadla Lockheed U-2. Neskôr slúžila na testovanie pokročilých lietadiel, ako SR-71 Blackbird a F-117 Nighthawk. Dlhoročné utajovanie jej existencie prispelo k množstvu špekulácií, pričom vláda oficiálne potvrdila jej existenciu až v roku 2013.</p>
      <img src="https://i.postimg.cc/R0RgVtYX/IMG-7823.jpg" alt="Obrázok Area 51" class="article-image">
      
      <p>Najpopulárnejšia konšpiračná teória spojená s Area 51 tvrdí, že základňa uchováva mimozemské technológie a telá mimozemšťanov. Tieto tvrdenia často odkazujú na haváriu UFO v Roswelli v roku 1947, po ktorej mali byť trosky a telá prevezené práve do Area 51. Niektorí konšpirátori veria, že tu prebiehajú tajné experimenty spätne analyzujúce (reverse engineering) mimozemské lode, aby ich technológie mohli byť využité vo vojenských projektoch. Medzi ďalšie populárne teórie patrí tvrdenie, že sa tu vykonávajú genetické experimenty, vývoj futuristických zbraní, manipulácia s počasím alebo dokonca experimenty s cestovaním časom.</p>
      <img src="https://i.postimg.cc/VLqGH2Fx/IMG-7824.jpg" alt="Obrázok mimozemšťania" class="article-image">
      
      <p>Jednou z kľúčových postáv, ktorá posilnila tieto teórie, je Bob Lazar. V roku 1989 tvrdil, že pracoval v blízkosti Area 51 na mieste zvanom S-4, kde mal analyzovať mimozemskú technológiu. Tvrdil, že mimozemské lode boli poháňané neznámym prvkom 115 (neskôr pomenovaným Moscovium), ktorý umožňoval gravitačnú manipuláciu. Hoci sú jeho tvrdenia kontroverzné, stali sa základom mnohých ďalších špekulácií.</p>
      <img src="https://i.postimg.cc/pXJCBzWx/IMG-7825.webp" alt="Obrázok Bob Lazar" class="article-image">
      
      <p>Oficiálne vláda tvrdí, že Area 51 slúži na vývoj a testovanie pokročilých vojenských technológií, pričom utajenie je nevyhnutné pre národnú bezpečnosť. Napriek tomu zostáva Area 51 jedným z najväčších symbolov tajomstiev a konšpirácií na svete. Tajomstvá Area 51 pravdepodobne nikdy nebudú úplne odhalené, čo len ďalej živí legendy o tomto ikonickom mieste.</p>
    </div>
  `
};

// Funkcia na zobrazenie zoznamu konšpirácií
function showConspiracies(category) {
  const container = document.getElementById("content-container");
  container.innerHTML = ""; // Vyčistí obsah
  conspiracies[category].forEach(conspiracy => {
    const box = document.createElement("div");
    box.className = "content-box";
    box.innerHTML = `<a href="#" onclick="showArticle('${conspiracy.link}')">${conspiracy.title}</a>`;
    container.appendChild(box);
  });
}

// Funkcia na zobrazenie konkrétneho článku
function showArticle(articleKey) {
  const container = document.getElementById("content-container");
  container.innerHTML = articles[articleKey] || "<p>Článok neexistuje.</p>";
}
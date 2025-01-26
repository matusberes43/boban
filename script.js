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
    { title: "11. september 2001", link: "11-september" },
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
      <img src="https://i.postimg.cc/R0RgVtYX/IMG-7823.jpg" alt="Area 51 základňa" class="article-image">
      
      <p>Najpopulárnejšia konšpiračná teória spojená s Area 51 tvrdí, že základňa uchováva mimozemské technológie a telá mimozemšťanov. Tieto tvrdenia často odkazujú na haváriu UFO v Roswelli v roku 1947, po ktorej mali byť trosky a telá prevezené práve do Area 51. Niektorí konšpirátori veria, že tu prebiehajú tajné experimenty spätne analyzujúce (reverse engineering) mimozemské lode, aby ich technológie mohli byť využité vo vojenských projektoch. Medzi ďalšie populárne teórie patrí tvrdenie, že sa tu vykonávajú genetické experimenty, vývoj futuristických zbraní, manipulácia s počasím alebo dokonca experimenty s cestovaním časom.</p>
      <img src="https://i.postimg.cc/VLqGH2Fx/IMG-7824.jpg" alt="Mimozemšťan" class="article-image">
      
      <p>Jednou z kľúčových postáv, ktorá posilnila tieto teórie, je Bob Lazar. V roku 1989 tvrdil, že pracoval v blízkosti Area 51 na mieste zvanom S-4, kde mal analyzovať mimozemskú technológiu. Tvrdil, že mimozemské lode boli poháňané neznámym prvkom 115 (neskôr pomenovaným Moscovium), ktorý umožňoval gravitačnú manipuláciu. Hoci sú jeho tvrdenia kontroverzné, stali sa základom mnohých ďalších špekulácií.</p>
      <img src="https://i.postimg.cc/pXJCBzWx/IMG-7825.webp" alt="Bob Lazar" class="article-image">
      
      <p>Oficiálne vláda tvrdí, že Area 51 slúži na vývoj a testovanie pokročilých vojenských technológií, pričom utajenie je nevyhnutné pre národnú bezpečnosť. Napriek tomu zostáva Area 51 jedným z najväčších symbolov tajomstiev a konšpirácií na svete. Tajomstvá Area 51 pravdepodobne nikdy nebudú úplne odhalené, čo len ďalej živí legendy o tomto ikonickom mieste.</p>
    </div>
  `,
  "11-september": `
    <div class="article">
      <h2>11. september 2001</h2>
      <p>11. september 2001 sa stal jedným z najtragickejších dní modernej histórie, ktorý navždy zmenil Spojené štáty aj svet. V tento deň teroristická organizácia al-Káida uniesla štyri lietadlá a zasiahla nimi strategické ciele. Dve lietadlá narazili do Dvojičiek Svetového obchodného centra v New Yorku, tretie zasiahlo budovu Pentagónu a štvrté, Let 93, sa zrútilo v Pensylvánii po tom, čo pasažieri bojovali proti únoscom.</p>
      <img src="https://i.postimg.cc/CLTX1C8k/IMG-7828.webp" alt="Dvojičky 11. september" class="article-image">
      
      <p>Napriek oficiálnym výsledkom vyšetrovania, ktoré označili Usámu bin Ládina a al-Káidu za zodpovedných za útoky, 11. september vyvolal množstvo konšpiračných teórií. Najznámejšia z nich tvrdí, že útoky boli „inside job“, teda že ich naplánovala samotná americká vláda alebo iné mocenské skupiny s cieľom získať zámienku na vojny na Blízkom východe a posilnenie kontroly nad občanmi.</p>
      <img src="https://i.postimg.cc/FR0bnSKX/IMG-7829.webp" alt="Pentagon 11. september" class="article-image">
      
      <p>Ďalšou populárnou teóriou je, že Pentagon nezasiahlo lietadlo, ale raketa. Kritici tvrdia, že veľkosť a tvar diery v budove nezodpovedajú poškodeniu spôsobenému lietadlom. Iní poukazujú na podivné správanie americkej armády a vládnych inštitúcií v deň útokov.</p>
      <img src="https://i.postimg.cc/CxWqTKXh/IMG-7830.jpg" alt="Pentagon po útoku" class="article-image">
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
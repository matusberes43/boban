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
    { title: "Zavraždenie Johna F. Kennedyho", link: "jfk" },
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
      <p>Area 51, tajomná vojenská základňa ukrytá v púšti štátu Nevada, je už desaťročia stredobodom pozornosti konšpiračných teórií a záhad. Nachádza sa približne 135 kilometrov severozápadne od Las Vegas a oficiálne je známa ako Groom Lake alebo Homey Airport. Vláda Spojených štátov dlhé roky existenciu tejto základne popierala, až kým ju v roku 2013 oficiálne nepotvrdila.</p>
      <img src="https://i.postimg.cc/R0RgVtYX/IMG-7823.jpg" alt="Area 51 základňa" class="article-image">

      <p>História Area 51 siaha do 50. rokov minulého storočia, kedy bola založená počas vrcholiacej studenej vojny. Jej pôvodným účelom bolo poskytnúť izolované miesto na vývoj a testovanie špionážneho lietadla Lockheed U-2. Po úspechu U-2 sa základňa stala centrom ďalších pokročilých projektov, vrátane vývoja lietadiel SR-71 Blackbird a F-117 Nighthawk.</p>
      <img src="https://i.postimg.cc/VLqGH2Fx/IMG-7824.jpg" alt="Mimozemšťan" class="article-image">

      <p>Jednou z najpopulárnejších konšpiračných teórií je, že Area 51 je miestom, kde sa uchovávajú trosky mimozemskej lode, ktorá údajne havarovala v Roswelli v roku 1947. Táto teória tvrdí, že vláda nielenže ukrýva technológie mimozemského pôvodu, ale aj telá mimozemšťanov, ktoré boli objavené pri havárii.</p>
      <img src="https://i.postimg.cc/pXJCBzWx/IMG-7825.webp" alt="Bob Lazar" class="article-image">

      <p>V roku 2019 Area 51 opäť upútala pozornosť celého sveta, keď sa na sociálnych sieťach objavila výzva „Storm Area 51“, ktorá mala za cieľ preniknúť na základňu a odhaliť jej tajomstvá. Napriek tomu, že nikto základňu neprelomil, udalosť ukázala, aký silný kultúrny fenomén Area 51 predstavuje.</p>
    </div>
  `,
  "11-september": `
    <div class="article">
      <h2>11. september 2001</h2>
      <p>11. september 2001 sa stal jedným z najtragickejších dní modernej histórie, ktorý navždy zmenil Spojené štáty aj svet. V tento deň teroristická organizácia al-Káida uniesla štyri lietadlá a zasiahla nimi strategické ciele. Dve lietadlá narazili do Dvojičiek Svetového obchodného centra v New Yorku, tretie zasiahlo budovu Pentagónu a štvrté, Let 93, sa zrútilo v Pensylvánii po tom, čo pasažieri bojovali proti únoscom.</p>
      <img src="https://i.postimg.cc/CLTX1C8k/IMG-7828.webp" alt="Dvojičky 11. september" class="article-image">

      <p>Ďalšou populárnou teóriou je, že Pentagon nezasiahlo lietadlo, ale raketa. Kritici tvrdia, že veľkosť a tvar diery v budove nezodpovedajú poškodeniu spôsobenému lietadlom. Iní poukazujú na podivné správanie americkej armády a vládnych inštitúcií v deň útokov, ako napríklad na to, že letecké sily zlyhali pri odklonení unesených lietadiel.</p>
      <img src="https://i.postimg.cc/FR0bnSKX/IMG-7829.webp" alt="Pentagon 11. september" class="article-image">

      <p>Útoky z 11. septembra 2001 spustili obrovskú zmenu v bezpečnostnej politike a zvýšili dohľad nad občanmi. Zákony ako Patriot Act umožnili rozsiahle sledovanie a obmedzili niektoré občianske slobody. Táto reakcia spolu s kontroverznými vojnami v Afganistane a Iraku len posilnila podozrenia, že za útokmi mohli byť hlbšie politické a ekonomické záujmy.</p>
    </div>
  `,
  "jfk": `
    <div class="article">
      <h2>Atentát na Johna F. Kennedyho</h2>
      <p>Atentát na Johna Fitzgeralda Kennedyho, 35. prezidenta Spojených štátov amerických, 22. novembra 1963 v Dallase v Texase patrí medzi najdiskutovanejšie a najzáhadnejšie udalosti 20. storočia...</p>
      <img src="https://i.postimg.cc/5jccmkf1/IMG-7832.jpg" alt="JFK a manželka" class="article-image">
      
      <p>Atentát sa odohral počas Kennedyho návštevy Dallasu, kde sa prezident stretával s miestnymi politickými predstaviteľmi...</p>
      <img src="https://i.postimg.cc/2yLRhfR2/IMG-7833.jpg" alt="Dealey Plaza" class="article-image">
      
      <p>Jednou z najznámejších konšpiračných teórií je, že atentát bol výsledkom interného sprisahania v americkej vláde...</p>
      <img src="https://i.postimg.cc/PxRnC5cC/IMG-7834.webp" alt="Kennedy počas prejavu" class="article-image">
      
      <p>Ďalšia významná teória zahŕňa mafiu. Kennedyho rodina, najmä jeho brat Robert Kennedy...</p>
      <img src="https://i.postimg.cc/GpzC1QxJ/IMG-7835.jpg" alt="Mafia teórie" class="article-image">
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
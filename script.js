// Simulácia načítania
window.onload = function () {
    setTimeout(function () {
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2000); // Načítanie trvá maximálne 2 sekundy
};

// Dáta pre konšpiračné teórie
const conspiracies = {
    world: [
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
    ],
    usa: [
        "Pád dvojčiat (11. september 2001)",
        "Vražda prezidenta Kennedyho",
        "Fenomén UFO v Roswelle",
        "FEMA a koncentračné tábory",
        "Sandy Hook ako fáma",
        "Moon landing ako podvod",
        "JFK Jr. a QAnon",
        "11. september ako vnútorná záležitosť",
        "COVID-19 ako biologická zbraň",
        "Volby v USA 2020 ako podvod"
    ]
};

// Funkcia pre zobrazenie teórií
function showConspiracies(type) {
    const listTitle = document.getElementById('list-title');
    const listItems = document.getElementById('list-items');
    const conspiracyList = document.getElementById('conspiracy-list');

    listTitle.textContent = `10 najznámejších konšpiračných teórií: ${type === 'world' ? 'SVET' : 'USA'}`;
    listItems.innerHTML = '';

    conspiracies[type].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        if (item === "Pád dvojčiat (11. september 2001)") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'article.html';
            });
        }
        if (item === "Vražda prezidenta Kennedyho") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'ken.html';
            });
        }
        if (item === "Fenomén UFO v Roswelle") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'ufo.html';
            });
        }
        if (item === "FEMA a koncentračné tábory") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'fema.html';
            });
        }
        if (item === "Sandy Hook ako fáma") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'sandy.html';
            });
        }
        if (item === "Moon landing ako podvod") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'moon.html';
            });
        }
        if (item === "JFK Jr. a QAnon") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'jfk.html';
            });
        }
        if (item === "11. september ako vnútorná záležitosť") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'september.html';
            });
        }
        if (item === "COVID-19 ako biologická zbraň") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'covid.html';
            });
        }
        if (item === "Volby v USA 2020 ako podvod") {
            li.style.cursor = 'pointer';
            li.addEventListener('click', () => {
                window.location.href = 'volby.html';
            });
        }
        listItems.appendChild(li);
    });

    conspiracyList.style.display = 'block'; // Zobrazí zoznam
}

// Event listenery pre tlačidlá
document.getElementById('conspiracy-world').addEventListener('click', () => showConspiracies('world'));
document.getElementById('conspiracy-usa').addEventListener('click', () => showConspiracies('usa'));
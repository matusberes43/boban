window.onload = function () {
    setTimeout(function () {
        let loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.getElementById('content').style.display = 'block';
        }, 1000);
    }, 2000);
};

const conspiracies = {
    world: ["Smrt princeznej Diany", "HAARP", "Iluminati", "Chemtrails"],
    usa: ["11. september", "Roswell", "FEMA tabory", "JFK vrazda"]
};

function playClickSound() {
    document.getElementById('click-sound').play();
}

function showConspiracies(type) {
    playClickSound();
    const listTitle = document.getElementById('list-title');
    const listItems = document.getElementById('list-items');
    const conspiracyList = document.getElementById('conspiracy-list');

    listTitle.textContent = type === 'world' ? "Svetove teorie" : "Teorie USA";
    listItems.innerHTML = '';

    conspiracies[type].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listItems.appendChild(li);
    });

    conspiracyList.style.opacity = '1';
    conspiracyList.style.display = 'block';
}

document.getElementById('conspiracy-world').addEventListener('click', () => showConspiracies('world'));
document.getElementById('conspiracy-usa').addEventListener('click', () => showConspiracies('usa'));
document.getElementById('close-list').addEventListener('click', () => {
    document.getElementById('conspiracy-list').style.opacity = '0';
    setTimeout(() => document.getElementById('conspiracy-list').style.display = 'none', 500);
});
// Funkcia na formátovanie času
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Funkcia na aktualizáciu odpočtu
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEnd - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = "Čas vypršal!";
        document.getElementById('pushups').innerHTML = "Hotovo!";
        clearInterval(countdownInterval);
    } else {
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById('countdown').innerHTML = formatTime(minutes * 60 + Math.floor(distance / 1000) % 60);

        // Zobraziť počet zdvihov
        let pushups = minutes * 10;
        document.getElementById('pushups').innerHTML = pushups === 0 ? "Začnite!" : `${pushups} zdvihov`;
    }
}

// Nastavenie konca odpočtu na 10 minút odo teraz
const countdownEnd = new Date().getTime() + 10 * 60 * 1000;
const countdownInterval = setInterval(updateCountdown, 1000);

// Prvé spustenie
updateCountdown();
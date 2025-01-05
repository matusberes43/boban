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
       ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
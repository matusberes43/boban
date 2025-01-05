let mainTime = 600; // 10 minutes in seconds
const mainTimer = document.getElementById('main-timer');
const miniTimer = document.getElementById('mini-timer');
const battery = document.getElementById('battery');

function updateMainTimer() {
    const minutes = Math.floor(mainTime / 60);
    const seconds = mainTime % 60;
    mainTimer.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function updateBatteryColor() {
    const percentage = mainTime / 600;
    const red = Math.min(255, 255 * (1 - percentage));
    const green = Math.min(255, 255 * percentage);
    battery.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
}

function startMiniTimer() {
    let miniTime = 10;
    miniTimer.textContent = miniTime;
    miniTimer.style.display = 'block';
    const miniInterval = setInterval(() => {
        miniTime--;
        miniTimer.textContent = miniTime;
        if (miniTime === 0) {
            clearInterval(miniInterval);
            miniTimer.style.display = 'none';
        }
    }, 1000);
}

const mainInterval = setInterval(() => {
    mainTime--;
    updateMainTimer();
    updateBatteryColor();

    if (mainTime % 60 === 0) {
        startMiniTimer();
    }

    if (mainTime === 0) {
        clearInterval(mainInterval);
        alert('Čas vypršal!');
    }
}, 1000);
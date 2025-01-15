const video = document.getElementById('video');
const playPauseBtn = document.getElementById('play-pause');
const progressBar = document.getElementById('progress');
const volumeControl = document.getElementById('volume');

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
    if (video.paused || video.ended) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Aktualizácia progress baru
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
});

// Skákanie na čas podľa progress baru
progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * video.duration;
    video.currentTime = time;
});

// Ovládanie hlasitosti
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});
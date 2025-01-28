// Globálna premenná pre stav zvuku
let isMuted = false;

// Funkcia pre resetovanie obsahu
function resetContent() {
  window.location.href = "index.html"; // Presmerovanie na hlavnú stránku
  playClickSound();
}

// Funkcia pre prepínanie tmavého režimu
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const button = document.querySelector(".interactive-button");
  if (body.classList.contains("dark-mode")) {
    button.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    button.innerHTML = '<i class="fas fa-moon"></i>';
  }
  playClickSound();
}

// Funkcia pre prehratie zvukového efektu
function playClickSound() {
  if (!isMuted) {
    const clickSound = document.getElementById("click-sound");
    if (clickSound) {
      clickSound.play();
    } else {
      console.error("Zvukový súbor nebol nájdený!");
    }
  }
}

// Funkcia pre prepínanie zvuku (mute/unmute)
function toggleMute() {
  isMuted = !isMuted;
  const muteButton = document.querySelector(".mute-button");
  if (isMuted) {
    muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
  } else {
    muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
  }
}

// Pridanie event listenerov pre tlačidlá
document.addEventListener("DOMContentLoaded", function () {
  // Resetovacie tlačidlo
  document.querySelector(".reset-button").addEventListener("click", resetContent);

  // Tlačidlo pre tmavý režim
  document.querySelector(".interactive-button").addEventListener("click", toggleDarkMode);

  // Tlačidlo na vypnutie/zapnutie zvuku
  document.querySelector(".mute-button").addEventListener("click", toggleMute);
});
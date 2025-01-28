// Funkcia pre prehratie zvukového efektu
function playClickSound() {
  const clickSound = document.getElementById("click-sound");
  if (clickSound) {
    clickSound.play();
  } else {
    console.error("Zvukový súbor nebol nájdený!");
  }
}

// Funkcia pre návrat na hlavnú stránku
function goBack() {
  window.location.href = "index.html";
  playClickSound();
}

// Pridanie event listenerov pre tlačidlá
document.addEventListener("DOMContentLoaded", function () {
  // Tlačidlo späť
  document.getElementById("back-box").addEventListener("click", goBack);

  // Resetovacie tlačidlo
  document.querySelector(".reset-button").addEventListener("click", function () {
    document.getElementById("article-text").value = "";
    playClickSound();
  });

  // Tlačidlo pre tmavý režim
  document.querySelector(".interactive-button").addEventListener("click", function () {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const button = document.querySelector(".interactive-button");
    if (body.classList.contains("dark-mode")) {
      button.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      button.innerHTML = '<i class="fas fa-moon"></i>';
    }
    playClickSound();
  });

  // Tlačidlo na vypnutie/zapnutie zvuku
  document.querySelector(".mute-button").addEventListener("click", function () {
    const muteButton = document.querySelector(".mute-button");
    const isMuted = muteButton.innerHTML.includes("volume-mute");
    if (isMuted) {
      muteButton.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
      muteButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    playClickSound();
  });
});
document.addEventListener("DOMContentLoaded", function() {
    const skull = document.getElementById("skull");

    setInterval(() => {
        skull.style.opacity = (skull.style.opacity == "0") ? "1" : "0";
    }, 2000);
});
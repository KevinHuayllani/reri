// script.js

// Pantalla de carga
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loadingScreen").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 1500); // 1.5 segundos de carga
});




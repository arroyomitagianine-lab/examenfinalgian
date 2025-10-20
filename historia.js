// --- MENÚ RESPONSIVO ---
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

// --- BOTÓN DE EXPLORAR (Desplaza a la sección de personajes) ---
const explorarBtn = document.getElementById("explorar-btn");
explorarBtn.addEventListener("click", () => {
  document.getElementById("nuestras-historias").scrollIntoView({ behavior: "smooth" });
});

// --- BOTONES "MÁS INFO" (Redirección a las historias) ---
const botonesInfo = document.querySelectorAll(".btn-secundario");

botonesInfo.forEach((boton) => {
  boton.addEventListener("click", () => {
    const personaje = boton.parentElement.querySelector("h3").textContent.toLowerCase();

    // Redirige según el personaje
    if (personaje.includes("kirby")) {
      window.location.href = "kirby.html";
    } else if (personaje.includes("link")) {
      window.location.href = "link.html";
    } else if (personaje.includes("pikachu")) {
      window.location.href = "pikachu.html";
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
// --- 1. Funcionalidad del Menú Hamburguesa (para el modo responsivo) ---
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
if (menuToggle && mainNav) {
menuToggle.addEventListener('click', () => {
mainNav.classList.toggle('open');
});
}
// --- 2. Funcionalidad de los botones principales (Scroll suave) ---
// Ambos botones (EXPLORAR AHORA y ¡ENTRA AHORA!) tienen el mismo propósito: ir a la sección de personajes.
const explorarBtn = document.getElementById('explorar-btn');
const finalBtn = document.getElementById('final-btn');
const destino = document.getElementById('nuestras-historias');
function handleButtonClick(event) {
// Evita que el navegador haga el salto de enlace predeterminado (si tuviera href="#...")
event.preventDefault();
if (destino) {
// Usa scrollIntoView para un desplazamiento suave
destino.scrollIntoView({ behavior: 'smooth' });
} else {
// Mensaje de fallback por si el destino no existe (aunque no debería pasar)
console.log('No se encontró la sección de personajes.');
}
}
// Asigna el listener solo si los elementos existen (solo existen en final.html)
if (explorarBtn) explorarBtn.addEventListener('click', handleButtonClick);
if (finalBtn) finalBtn.addEventListener('click', handleButtonClick);
// --- 3. Actualizar automáticamente el año en el footer ---
// Solo actualiza si existe el span con el ID
const currentYearSpan = document.querySelector('footer p span'); // Busca el span dentro del footer
if (currentYearSpan) {
currentYearSpan.textContent = new Date().getFullYear();
}
});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
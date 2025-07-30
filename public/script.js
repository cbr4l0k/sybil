// script.js
// Este archivo contiene la funcionalidad básica de interacción para la landing page.
// Principalmente gestiona la apertura y cierre del menú de navegación en dispositivos móviles.

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Función para alternar el estado del menú
  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
  }

  // Evento de click en el botón hamburguesa
  menuToggle.addEventListener('click', toggleMenu);

  // Cierra el menú al hacer click en cualquier enlace
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
});

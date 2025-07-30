document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle')!;
    const navLinks = document.getElementById('navLinks')!;

    function toggleMenu() {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('open');
    }

    menuToggle.addEventListener('click', toggleMenu);

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        })
    })



});

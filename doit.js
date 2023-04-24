const links = document.querySelectorAll('.navigation__link');
const navToggle = document.getElementById('navi-toggle');

links.forEach(link => {
  link.addEventListener('click', () => {
    navToggle.checked = false;
  });
});
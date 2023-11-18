// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
// klik di luar sidebar untuk menghilankan navbar
const hamburger = document.querySelector('#humberger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
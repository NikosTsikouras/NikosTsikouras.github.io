const mobileMenu = document.querySelector('.mobile-nav');

mobileMenu.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.open = false;
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

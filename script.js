const mobileMenu = document.querySelector('.mobile-nav');

document.querySelectorAll('.desktop-nav > a:not(.nav-contact)').forEach((link) => {
  const label = link.textContent.trim();
  const letters = document.createDocumentFragment();

  link.setAttribute('aria-label', label);
  [...label].forEach((character, index) => {
    const letter = document.createElement('span');
    letter.className = 'nav-letter';
    letter.setAttribute('aria-hidden', 'true');
    letter.style.setProperty('--delay', `${index * 28}ms`);
    letter.textContent = character === ' ' ? '\u00a0' : character;
    letters.append(letter);
  });

  link.replaceChildren(letters);
});

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

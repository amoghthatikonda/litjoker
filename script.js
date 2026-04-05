const toggleButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const form = document.querySelector('.contact-form');
const message = document.querySelector('.form-message');

if (toggleButton && menu) {
  toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}

if (form && message) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Thanks! Your response has been captured for the project demo.';
    form.reset();
  });
}

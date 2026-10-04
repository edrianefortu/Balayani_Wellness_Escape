const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('#main-nav a');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

navLinks.forEach(link => link.addEventListener('click', () => {
  header.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const form = document.getElementById('bookingForm');
const msg = document.getElementById('formMessage');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  msg.textContent = `Thank you, ${name}! Your inquiry has been recorded for this academic website demonstration. Please contact Balayani Travel & Wellness Desk to confirm availability and payment details.`;
  msg.style.color = '#1b6a6d';
  form.reset();
});

// Dynamic year
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu');
  hamburger.addEventListener('click', () => menu.classList.toggle('show'));

  // Contact form alert
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for contacting Hazel Hardware! We will get back to you soon.');
    contactForm.reset();
  });

  // Login form alert
  const loginForm = document.getElementById('loginForm');
  if (loginForm) loginForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Login attempt submitted. (Demo only, no backend connected)');
    loginForm.reset();
  });
});

(function () {
  'use strict';

  // ---------- Header scroll state ----------
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  // Close mobile nav when clicking a link
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // ---------- Year in footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Scroll reveal ----------
  const revealTargets = document.querySelectorAll(
    '.section-head, .insight, .service, .valor-pillars li, .standards li, .contact-card, .contact-form, .extra-grid > div, .chips'
  );
  revealTargets.forEach((el) => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  // ---------- Contact form (UI feedback only) ----------
  const form = document.getElementById('contactForm');
  const hint = document.getElementById('formHint');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    hint.classList.remove('success', 'error');

    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();

    if (!name || !email) {
      hint.textContent = 'Por favor completa el nombre y el correo.';
      hint.classList.add('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      hint.textContent = 'Verifica el formato del correo.';
      hint.classList.add('error');
      return;
    }

    hint.textContent = 'Gracias. Hemos recibido tu mensaje, te contactaremos pronto.';
    hint.classList.add('success');
    form.reset();
  });
})();

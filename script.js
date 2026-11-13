(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    const setMenu = open => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
    document.addEventListener('click', e => { if (!nav.contains(e.target) && !toggle.contains(e.target)) setMenu(false); });
  }
  const revealItems = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) {entry.target.classList.add('revealed'); observer.unobserve(entry.target);} });
    }, {threshold: 0.08, rootMargin: '0px 0px 35px 0px'});
    revealItems.forEach(el => observer.observe(el));
  } else {revealItems.forEach(el => el.classList.add('revealed'));}
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
  const emailButton = document.querySelector('[data-copy-email]');
  if (emailButton) {
    emailButton.addEventListener('click', async () => {
      const address = emailButton.getAttribute('data-copy-email');
      if (!address) return;
      try {
        await navigator.clipboard.writeText(address);
        const toast = document.querySelector('#toast');
        if (toast) {toast.classList.add('show'); window.setTimeout(() => toast.classList.remove('show'), 2400);}
      } catch (error) {
        window.location.href = 'mailto:' + address;
      }
    });
  }
  const sections = [...document.querySelectorAll('main > section[id]')];
  const anchors = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if ('IntersectionObserver' in window && sections.length && anchors.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, {rootMargin: '-20% 0px -70% 0px', threshold: 0});
    sections.forEach(section => obs.observe(section));
  }
})();

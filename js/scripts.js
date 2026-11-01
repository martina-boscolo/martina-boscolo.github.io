/* Progressive enhancements: all portfolio content works without JavaScript. */
(() => {
  'use strict';
  document.querySelector('#current-year').textContent = new Date().getFullYear();
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#menu');
  const closeMenu = () => {
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.querySelector('span').textContent = '＋';
  };
  toggle.hidden = false;
  header.classList.add('menu-ready');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    header.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.querySelector('span').textContent = open ? '−' : '＋';
  });
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!('IntersectionObserver' in window) || reducedMotion.matches) return;
  const revealItems = document.querySelectorAll('.section-label, .about-copy, .section-top, .project-card, .timeline-item, .education-card, .skill-groups, .achievement');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-pending');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealItems.forEach(item => {
    // Never hide content already visible on initial load or an anchor jump.
    if (item.getBoundingClientRect().top < window.innerHeight) return;
    item.classList.add('reveal', 'is-pending');
    observer.observe(item);
  });
  reducedMotion.addEventListener('change', event => {
    if (!event.matches) return;
    revealItems.forEach(item => item.classList.remove('is-pending'));
    observer.disconnect();
  });
})();

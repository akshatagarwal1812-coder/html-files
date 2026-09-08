/* ==========================================================================
   Akshat Agarwal — Portfolio: interactions
   Works against the original markup (no classes/ids needed in the HTML).
   Script tag can stay in <head> — everything below waits for DOMContentLoaded.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const nav = document.querySelector('header nav');

  /* ---------- Inject a mobile hamburger toggle ---------- */
  if (nav) {
    const toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toggle navigation');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';

    nav.parentNode.insertBefore(toggle, nav);

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  /* ---------- Highlight the current page in the nav ---------- */
  const navLinks = document.querySelectorAll('header nav ul li a');
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.setAttribute('data-current', 'true');
    }
  });

  /* ---------- Always-current footer year ---------- */
  const footerP = document.querySelector('footer p');
  if (footerP) {
    footerP.innerHTML = footerP.innerHTML.replace(/\b(19|20)\d{2}\b/, new Date().getFullYear());
  }

  /* ---------- Gentle one-time entrance for the two main sections ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll('main > section');

  if (!reduceMotion) {
    sections.forEach((el, i) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 500, delay: i * 120, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'both' }
      );
    });
  }

});
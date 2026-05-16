/**
 * BlogController.js
 * Jav's Corp — Controlador del Blog
 * Maneja routing por hash, filtros, dark mode y nav.
 */

const BlogController = (() => {

  const init = () => {
    _setupTheme();
    _setupNav();
    _setupBlobScroll();
    _route();
    window.addEventListener('hashchange', _route);
  };

  /* ════════ ROUTING ════════
     #slug   → artículo
     (vacío) → lista
  ═════════════════════════ */
  const _route = () => {
    const hash  = window.location.hash.slice(1); // sin el #
    const posts = AppModel.get('posts');

    if (hash) {
      const post = posts.find(p => p.slug === hash);
      if (post) {
        const brand = AppModel.get('brand');
        BlogView.renderArticle(post, brand.whatsappLink);
        return;
      }
    }
    // default: lista
    BlogView.renderList(posts, 'Todos');
    _setupFilters();
  };

  /* ════════ FILTERS ════════ */
  const _setupFilters = () => {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const filter = btn.dataset.filter;
      const posts  = AppModel.get('posts');
      BlogView.renderList(posts, filter);
      _setupFilters(); // re-bind after re-render
    }, { once: true });
  };

  /* ════════ STICKY NAV ════════ */
  const _setupNav = () => {
    const nav = document.querySelector('#main-nav');
    let lastY = 0;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('nav--scrolled', y > 60);
      nav.classList.toggle('nav--hidden', y > lastY + 10 && y > 200);
      if (y < lastY) nav.classList.remove('nav--hidden');
      lastY = y;
    }, { passive: true });

    // Mobile menu
    const toggle = document.querySelector('#menu-toggle');
    const drawer = document.querySelector('#nav-drawer');
    toggle?.addEventListener('click', () => {
      const open = drawer.classList.toggle('drawer--open');
      toggle.setAttribute('aria-expanded', open);
      toggle.innerHTML = open ? '✕' : '☰';
    });

    // Theme toggle
    const themeBtn = document.querySelector('#theme-toggle');
    themeBtn?.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('jc-theme', next);
    });
  };

  /* ════════ THEME ════════ */
  const _setupTheme = () => {
    const saved = localStorage.getItem('jc-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
  };

  /* ════════ BLOB SCROLL ════════ */
  const _setupBlobScroll = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const blobs  = document.querySelectorAll('.bg-blob');
    const speeds = [0.04, -0.06, 0.03, -0.05];
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      blobs.forEach((b, i) => { b.style.transform = `translateY(${y * speeds[i]}px)`; });
    }, { passive: true });
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', BlogController.init);

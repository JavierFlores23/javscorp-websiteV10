/**
 * AppController.js
 * Jav's Corp — Controlador: orquesta Modelo ↔ Vista y maneja eventos.
 */

const AppController = (() => {

  /* ════════════════════════════════════════
     INIT — punto de entrada principal
  ════════════════════════════════════════ */
  const init = () => {
    // 1. Renderizar datos desde el Modelo a la Vista
    AppView.renderBrand(AppModel.get('brand'));
    AppView.renderNav(AppModel.get('navLinks'));
    AppView.renderStats(AppModel.get('stats'));
    AppView.renderServices(AppModel.get('services'));
    AppView.renderPortfolio(AppModel.get('portfolio'));

    // 2. Setup de comportamientos
    _setupScrollObserver();
    _setupStickyNav();
    _setupMobileMenu();
    _setupContactForm();
    _animateHero();
    _setupNavActiveLinks();
    _setupBlobScroll();
    _setupThemeToggle();
    _setupCounters();
    _setupWhatsAppRipple();
  };

  /* ════════════════════════════════════════
     SCROLL OBSERVER — fade-up animations
  ════════════════════════════════════════ */
  const _setupScrollObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.style.getPropertyValue('--delay') || '0ms';
          setTimeout(() => el.classList.add('is-visible'), parseInt(delay));
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });
  };

  /* ════════════════════════════════════════
     STICKY NAV — shrink on scroll
  ════════════════════════════════════════ */
  const _setupStickyNav = () => {
    const nav = AppView.$('#main-nav');
    let lastY = 0;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      nav.classList.toggle('nav--scrolled', y > 60);
      nav.classList.toggle('nav--hidden', y > lastY + 10 && y > 200);
      nav.classList.remove('nav--hidden', y < lastY);
      lastY = y;
    }, { passive: true });
  };

  /* ════════════════════════════════════════
     ACTIVE NAV LINKS — highlight on scroll
  ════════════════════════════════════════ */
  const _setupNavActiveLinks = () => {
    const sections = document.querySelectorAll('section[id]');
    const links    = document.querySelectorAll('.nav-link');

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach((s) => io.observe(s));
  };

  /* ════════════════════════════════════════
     MOBILE MENU
  ════════════════════════════════════════ */
  const _setupMobileMenu = () => {
    const toggle = AppView.$('#menu-toggle');
    const drawer = AppView.$('#nav-drawer');

    toggle?.addEventListener('click', () => {
      const open = drawer.classList.toggle('drawer--open');
      toggle.setAttribute('aria-expanded', open);
      toggle.innerHTML = open ? '✕' : '☰';
    });

    // Cerrar al hacer click en un link
    AppView.$$('.nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        drawer.classList.remove('drawer--open');
        toggle.innerHTML = '☰';
      });
    });
  };

  /* ════════════════════════════════════════
     CONTACT FORM — Formspree real integration
  ════════════════════════════════════════ */
  const FORMSPREE_ID = 'xbdwnzro';

  const _setupContactForm = () => {
    const form = AppView.$('#contact-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = form.querySelector('.form-btn');
        const name    = form.querySelector('#f-name').value.trim();
        const email   = form.querySelector('#f-email').value.trim();
        const message = form.querySelector('#f-msg').value.trim();

        // Basic validation
        if (!name || !email || !message) {
          AppView.showToast('Por favor completá todos los campos.', 'error');
          return;
        }

        btn.textContent = 'Enviando…';
        btn.disabled    = true;

        try {
          const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body:    JSON.stringify({ name, email, message }),
          });

          if (res.ok) {
            AppView.showToast('¡Mensaje enviado! Te contactamos pronto. ☕');
            form.reset();
          } else {
            const data = await res.json();
            const msg  = data?.errors?.[0]?.message || 'Error al enviar. Intentá de nuevo.';
            AppView.showToast(msg, 'error');
          }
        } catch (_) {
          AppView.showToast('Sin conexión. Verificá tu internet.', 'error');
        } finally {
          btn.textContent = 'Enviar mensaje';
          btn.disabled    = false;
        }
      });
    }

    // WhatsApp ripple animation
    const waBtn = AppView.$('#whatsapp-btn');
    if (waBtn) {
      waBtn.addEventListener('click', (e) => {
        const ripple = waBtn.querySelector('.wa-ripple');
        if (!ripple) return;
        const rect = waBtn.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top  = `${e.clientY - rect.top}px`;
        ripple.classList.remove('ripple-go');
        void ripple.offsetWidth;
        ripple.classList.add('ripple-go');
      });
    }
  };

  /* ════════════════════════════════════════
     PARALLAX — hero bg shift
  ════════════════════════════════════════ */
  const _setupParallax = () => {
    const hero = AppView.$('#hero');
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.setProperty('--parallax-y', `${y * 0.35}px`);
    }, { passive: true });
  };

  /* ════════════════════════════════════════
     CUSTOM CURSOR
  ════════════════════════════════════════ */
  const _setupCursor = () => {
    if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch
    const dot   = document.createElement('div');
    const ring  = document.createElement('div');
    dot.className  = 'cursor-dot';
    ring.className = 'cursor-ring';
    document.body.append(dot, ring);

    let rx = 0, ry = 0;
    document.addEventListener('mousemove', (e) => {
      dot.style.transform  = `translate(${e.clientX}px, ${e.clientY}px)`;
      rx += (e.clientX - rx) * 0.12;
      ry += (e.clientY - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
    });

    document.querySelectorAll('a, button, .service-card, .portfolio-card').forEach((el) => {
      el.addEventListener('mouseenter', () => ring.classList.add('cursor-ring--large'));
      el.addEventListener('mouseleave', () => ring.classList.remove('cursor-ring--large'));
    });
  };

  /* ════════════════════════════════════════
     HERO ENTRANCE ANIMATION
  ════════════════════════════════════════ */
  const _animateHero = () => {
    const items = document.querySelectorAll('.hero-animate');
    items.forEach((el, i) => {
      el.style.animationDelay = `${i * 160}ms`;
      el.classList.add('hero-animate--play');
    });
  };

  /* ════════════════════════════════════════
     BLOB SCROLL — shift blobs as user scrolls
  ════════════════════════════════════════ */
  const _setupBlobScroll = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const blobs = document.querySelectorAll('.bg-blob');
    if (!blobs.length) return;

    const speeds = [0.04, -0.06, 0.03, -0.05];

    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      blobs.forEach((blob, i) => {
        const shift = y * speeds[i];
        blob.style.transform = `translateY(${shift}px)`;
      });
    }, { passive: true });
  };

  /* ════════════════════════════════════════
     WHATSAPP BUTTON — ripple on click
  ════════════════════════════════════════ */
  const _setupWhatsAppRipple = () => {
    const btn = AppView.$('#whatsapp-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
      btn.classList.remove('is-clicking');
      void btn.offsetWidth; // reflow to restart animation
      btn.classList.add('is-clicking');
      setTimeout(() => btn.classList.remove('is-clicking'), 600);
    });
  };

  /* ════════════════════════════════════════
     THEME TOGGLE — dark / light
  ════════════════════════════════════════ */
  const _setupThemeToggle = () => {
    const btn  = AppView.$('#theme-toggle');
    const root = document.documentElement;

    // Restore saved preference
    const saved = localStorage.getItem('jc-theme');
    if (saved) root.setAttribute('data-theme', saved);

    btn?.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      const next   = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('jc-theme', next);
    });
  };

  /* ════════════════════════════════════════
     COUNTERS — animate stat numbers on scroll
  ════════════════════════════════════════ */
  const _setupCounters = () => {
    const easeOut = (t) => 1 - Math.pow(1 - t, 3); // cubic ease-out

    const animateCounter = (el) => {
      const target   = parseInt(el.dataset.count, 10);
      const suffix   = el.dataset.suffix || '';
      const duration = 1400; // ms
      const start    = performance.now();

      const tick = (now) => {
        const elapsed  = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value    = Math.round(easeOut(progress) * target);
        el.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    // Trigger when stat cards become visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const valueEl = entry.target.querySelector('.stat-value[data-count]');
          if (valueEl) animateCounter(valueEl);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    // Wait for stats to be rendered then observe
    setTimeout(() => {
      document.querySelectorAll('.stat-card').forEach((card) => observer.observe(card));
    }, 100);
  };

  return { init };
})();

// Bootstrap cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', AppController.init);

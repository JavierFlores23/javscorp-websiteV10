/**
 * AppView.js
 * Jav's Corp — Vista: renderiza datos del modelo en el DOM.
 * No contiene lógica de negocio; solo construye HTML.
 */

const AppView = (() => {

  /* ─── helpers ─── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ─── Nav ─── */
  const renderNav = (links) => {
    const nav = $('#nav-links');
    nav.innerHTML = links
      .map(({ href, label }) =>
        `<a href="${href}" class="nav-link">${label}</a>`)
      .join('');
  };

  /* ─── Stats ─── */
  const renderStats = (stats) => {
    const container = $('#stats-container');
    container.innerHTML = stats.map(({ value, label, count, suffix }) => `
      <div class="stat-card" data-animate="fade-up">
        <span class="stat-value" data-count="${count}" data-suffix="${suffix}">0${suffix}</span>
        <span class="stat-label">${label}</span>
      </div>`).join('');
  };

  /* ─── Services ─── */
  const renderServices = (services) => {
    const grid = $('#services-grid');
    grid.innerHTML = services.map((s, i) => `
      <article class="service-card" data-animate="fade-up" style="--delay:${i * 80}ms">
        <span class="service-icon">${s.icon}</span>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.description}</p>
        <div class="card-glow"></div>
      </article>`).join('');
  };

  /* ─── Portfolio ─── */
  const renderPortfolio = (items) => {
    const grid = $('#portfolio-grid');
    grid.innerHTML = items.map((p, i) => `
      <article class="portfolio-card" data-animate="fade-up" style="--delay:${i * 100}ms; --accent:${p.color}">
        <div class="portfolio-accent" style="background:${p.color}"></div>
        <span class="portfolio-category">${p.category}</span>
        <h3 class="portfolio-client">${p.client}</h3>
        <div class="portfolio-result">${p.result}</div>
      </article>`).join('');
  };

  /* ─── Brand info ─── */
  const renderBrand = (brand) => {
    $('#hero-title').textContent   = brand.name;
    $('#hero-tagline').textContent = brand.tagline;
    $('#brand-desc').textContent   = brand.description;
    $('#contact-email').textContent   = brand.email;
    $('#contact-email').href          = `mailto:${brand.email}`;
    $('#contact-whatsapp').textContent= `📱 ${brand.whatsapp}`;
    $('#contact-social').textContent  = `◈ ${brand.social}`;
    $('#footer-year').textContent     = brand.year;
    $('#footer-name').textContent     = brand.name;
    const waBtn = $('#whatsapp-btn');
    if (waBtn) waBtn.href = brand.whatsappLink;
  };

  const showToast = (msg, type = 'success') => {
    const t = document.createElement('div');
    t.className = `toast toast--${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('toast--visible'));
    setTimeout(() => {
      t.classList.remove('toast--visible');
      setTimeout(() => t.remove(), 400);
    }, 3000);
  };

  /* ─── Blog preview (index) ─── */
  const renderBlogPreview = (posts) => {
    const grid = $('#blog-grid');
    if (!grid) return;
    const featured = posts.slice(0, 3);
    grid.innerHTML = featured.map((p, i) => `
      <article class="blog-card ${i === 0 ? 'blog-card--featured' : ''}" data-animate="fade-up" style="--delay:${i * 90}ms">
        <div class="blog-card-meta">
          <span class="blog-tag">${p.tag}</span>
          <span class="blog-read">${p.readTime} lectura</span>
        </div>
        <h3 class="blog-card-title">${p.title}</h3>
        <p class="blog-card-excerpt">${p.excerpt}</p>
        <div class="blog-card-footer">
          <span class="blog-date">${p.dateDisplay}</span>
          <a href="blog.html#${p.slug}" class="blog-link">Leer →</a>
        </div>
      </article>`).join('');
  };

  /* ─── Expose public API ─── */
  return {
    $, $$,
    renderNav,
    renderStats,
    renderServices,
    renderPortfolio,
    renderBrand,
    renderBlogPreview,
    showToast,
  };
})();

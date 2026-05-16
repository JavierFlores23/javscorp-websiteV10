/**
 * BlogView.js
 * Jav's Corp — Vista del Blog
 * Renderiza la lista de posts y el artículo individual.
 */

const BlogView = (() => {

  const $ = (sel) => document.querySelector(sel);

  /* ─── Lista de artículos ─── */
  const renderList = (posts, activeFilter = 'Todos') => {
    const main = $('#blog-main');
    const categories = ['Todos', ...new Set(posts.map(p => p.tag))];

    const filtered = activeFilter === 'Todos'
      ? posts
      : posts.filter(p => p.tag === activeFilter);

    main.innerHTML = `
      <div class="blog-page-header">
        <span class="eyebrow">— Recursos</span>
        <h1 class="section-title">Blog</h1>
        <p style="color:var(--c-muted);margin-top:0.75rem;font-size:0.95rem;">
          Guías, consejos y novedades sobre empleo en call centers.
        </p>
        <div class="blog-filter-bar">
          ${categories.map(cat => `
            <button class="filter-btn ${cat === activeFilter ? 'active' : ''}"
                    data-filter="${cat}">${cat}</button>
          `).join('')}
        </div>
      </div>
      <div class="blog-page-grid">
        ${filtered.map(p => `
          <article class="blog-card">
            <div class="blog-card-meta">
              <span class="blog-tag">${p.tag}</span>
              <span class="blog-read">${p.readTime} lectura</span>
            </div>
            <h2 class="blog-card-title">${p.title}</h2>
            <p class="blog-card-excerpt">${p.excerpt}</p>
            <div class="blog-card-footer">
              <span class="blog-date">${p.dateDisplay}</span>
              <a href="#${p.slug}" class="blog-link">Leer →</a>
            </div>
          </article>
        `).join('')}
      </div>
    `;
  };

  /* ─── Artículo individual ─── */
  const renderArticle = (post, whatsappLink) => {
    const main = $('#blog-main');
    main.innerHTML = `
      <div class="article-wrap">
        <a href="blog.html" class="article-back">← Volver al blog</a>
        <span class="article-tag">${post.tag}</span>
        <h1 class="article-title">${post.title}</h1>
        <div class="article-meta">
          <span>${post.dateDisplay}</span>
          <span>${post.readTime} de lectura</span>
          <span>${post.category}</span>
        </div>
        <div class="article-body">${post.body}</div>
        <div class="article-cta">
          <p>¿Querés aplicar a Teleperformance gratis?</p>
          <a href="${whatsappLink}" target="_blank" rel="noopener" class="btn btn--primary">
            Escribinos por WhatsApp
          </a>
        </div>
      </div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /* ─── Toast ─── */
  const showToast = (msg) => {
    const t = document.createElement('div');
    t.className = 'toast toast--visible';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.classList.remove('toast--visible'); setTimeout(() => t.remove(), 400); }, 3000);
  };

  return { $, renderList, renderArticle, showToast };
})();

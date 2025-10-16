(function () {
  const params = new URLSearchParams(location.search);
  const slug = params.get('m');
  const nameEl = document.getElementById('modelName');
  const descEl = document.getElementById('modelDesc');
  const gallery = document.getElementById('gallery');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (!slug || !Array.isArray(window.MODELS)) {
    nameEl.textContent = 'Modelo não encontrada';
    gallery.innerHTML = '<p>Volte para a página inicial e escolha novamente.</p>';
    return;
  }

  const model = window.MODELS.find((m) => m.slug === slug);
  if (!model) {
    nameEl.textContent = 'Modelo não encontrada';
    gallery.innerHTML = '<p>Volte para a página inicial e escolha novamente.</p>';
    return;
  }

  nameEl.textContent = model.name;
  descEl.textContent = model.description || '';

  const fragment = document.createDocumentFragment();
  (model.photos || []).forEach((src, index) => {
    const a = document.createElement('button');
    a.className = 'gallery__item';
    a.type = 'button';
    a.setAttribute('aria-label', `Abrir foto ${index + 1} de ${model.name}`);
    a.innerHTML = `<img src="${src}" alt="${model.name} foto ${index + 1}">`;
    a.addEventListener('click', () => openLightbox(src));
    fragment.appendChild(a);
  });
  gallery.appendChild(fragment);

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => (lightboxImg.src = ''), 200);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  lightboxClose.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
})();


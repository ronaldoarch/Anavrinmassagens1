(function () {
  const grid = document.getElementById('modelsGrid');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (!grid || !window.MODELS) return;

  const createCard = (model) => {
    const a = document.createElement('a');
    a.className = 'card';
    a.href = `model.html?m=${encodeURIComponent(model.slug)}`;
    a.setAttribute('aria-label', `Abrir perfil de ${model.name}`);

    a.innerHTML = `
      <div class="card__image">
        <img src="${model.thumb}" alt="${model.name}">
      </div>
      <div class="card__info">
        <h3>${model.name}</h3>
        <button class="btn">Ver Fotos</button>
      </div>
    `;

    return a;
  };

  const fragment = document.createDocumentFragment();
  window.MODELS.forEach((m) => fragment.appendChild(createCard(m)));
  grid.appendChild(fragment);
})();


# Site de Galeria de Modelos (estático)

Este projeto é um site simples com:
- Página inicial com lista de modelos (cards);
- Página individual com galeria de fotos por modelo e lightbox.

Funciona 100% estático: basta abrir `index.html` no navegador.

## Como rodar

1. Abra o arquivo `index.html` clicando duas vezes.
2. Clique em uma modelo para abrir a página da galeria.

Opcional (servidor local):
- Se quiser, pode rodar um servidor estático (por exemplo com Python):
```bash
python -m http.server 8080
```
Acesse `http://localhost:8080` e navegue até `index.html`.

## Como cadastrar/editar modelos

Os dados ficam em `assets/data/models.js` no array `window.MODELS`.
Cada modelo tem:
- `id`: número único
- `name`: nome exibido
- `slug`: identificador usado na URL (ex.: `model.html?m=valentina`)
- `description`: texto curto para a página da modelo
- `thumb`: imagem de capa (card da home)
- `photos`: lista de URLs das fotos da galeria

Exemplo de novo item:
```js
{
  id: 5,
  name: "Paula",
  slug: "paula",
  description: "Atendimento diferenciado.",
  thumb: "assets/images/paula/thumb.jpg",
  photos: [
    "assets/images/paula/1.jpg",
    "assets/images/paula/2.jpg",
    "assets/images/paula/3.jpg"
  ]
}
```

Dicas:
- Coloque suas imagens dentro de `assets/images/<slug>/` e atualize os caminhos.
- O link do card é gerado automaticamente para `model.html?m=<slug>`.
- O tamanho/recorte das imagens é ajustado via CSS (aspect-ratio), então foque na qualidade.

## Onde editar o visual

- CSS principal: `assets/css/style.css`
- Ajuste cores em `:root` (variáveis CSS)

## Estrutura

- `index.html`: lista as modelos
- `model.html`: galeria de uma modelo (usa `?m=<slug>`)
- `assets/data/models.js`: dados das modelos
- `assets/js/app.js`: renderização da home
- `assets/js/model.js`: galeria + lightbox
- `assets/css/style.css`: estilos gerais

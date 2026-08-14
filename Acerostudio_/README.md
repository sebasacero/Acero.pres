# AceroPress — versión React

Conversión del sitio original (HTML + CSS + `cart.js`) a React con Vite.

## Instalación

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

Para producción:

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  main.jsx                 → punto de entrada
  App.jsx                  → arma la página completa
  index.css                → todos los estilos (fusión del CSS original)
  context/CartContext.jsx  → estado global del carrito + integración WhatsApp
  data/recipes.js          → las 17 recetas campeonas del WAC (un solo array,
                              en vez de 17 tarjetas + 17 modales duplicados en HTML)
  components/
    Navbar.jsx              NavDrawer.jsx        CartDrawer.jsx
    WhatsAppButton.jsx       CafeHero.jsx         ProductSection.jsx
    Marquee.jsx              ColdBrewHero.jsx     WacBanner.jsx
    RecipeArchive.jsx        RecipeCard.jsx       RecipeModal.jsx
    Footer.jsx
```

## Qué cambió respecto al original

- **Carrito**: toda la lógica de `JS/cart.js` (agregar, quitar, cantidades,
  subtotal, armar el mensaje de WhatsApp) ahora vive en `CartContext.jsx`
  como estado de React (`useState`), en vez de manipular el DOM a mano.
- **Recetas**: las 17 tarjetas + 17 `<dialog>` casi idénticos del HTML se
  reemplazaron por `data/recipes.js` + `<RecipeCard>` + `<RecipeModal>`,
  que se repiten con `.map()`. El filtro por año y el carrusel son estado
  de React, no manipulación directa del DOM.
- **Odómetro**: la barra de segmentos que antes generaba `cart.js` con
  `document.createElement` ahora se calcula con `Array.from(...).map()`
  dentro de `ColdBrewHero.jsx`.
- **Drawers (carrito y menú)**: antes eran overlays inyectados por JS con
  clases `.open`; ahora son componentes controlados por `useState` en
  `App.jsx`.
- **Estilos de modal de receta**: el HTML original usaba clases como
  `.recipe-modal-banner`, `.modal-container`, `.hero-header`, `.modal-grid`,
  `.steps-list`, etc. que no tenían CSS definido en el archivo de estilos
  que compartiste. Les agregué estilos razonables en `index.css` siguiendo
  la estética general del sitio (puedes ajustarlos a tu gusto).

## Assets pendientes

El sitio referencia imágenes y videos que no venían incluidos. Colócalos en
`public/image/` respetando estos nombres (o cambia las rutas en los
componentes):

- `logo_aceropress.png`, `logo.png`, `local.jpg`, `bagsbeans.png`, `cans.mp4`,
  `hero_main1.mp4`, `favicon.png`
- Para cada año de receta: `poster-<año>.jpg` y `video-<año>.mp4`
  (ej. `poster-2025.jpg`, `video-2025.mp4`, ... hasta 2008).

## WhatsApp

Cambia el número en `src/context/CartContext.jsx`:

```js
export const WHATSAPP_NUMBER = '573001112233';
```

## Pendiente / a tu criterio

- La galería de producto (`ProductSection.jsx`) sólo tiene 1 imagen; los
  botones prev/next y los dots están listos visualmente pero no rotan
  variantes todavía (el original tampoco traía datos de variantes, solo
  la estructura HTML).
- El JSON-LD (schema.org) y las meta tags SEO del `<head>` quedaron en
  `index.html`. Si migras a Next.js más adelante convendría moverlas a
  metadata de cada ruta.

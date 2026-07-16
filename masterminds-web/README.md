# MasterMinds — Sitio web

Versión mejorada y **funcional** del sitio de MasterMinds, reconstruida a partir del diseño de Claude Design
(`../dise-o-web-masterminds/`). A diferencia del prototipo original —que usaba un framework interno no ejecutable—,
este es un sitio real en HTML/CSS/JS que se abre y funciona en cualquier navegador.

## Cómo verlo

**Opción rápida:** haz doble clic en `index.html` (se abre en tu navegador).

**Opción servidor local** (recomendada, evita restricciones de archivos locales):

```bash
cd masterminds-web
python3 -m http.server 4599
# luego abre  http://localhost:4599
```

## Qué incluye

- **Bilingüe ES / EN** — botón de idioma arriba a la derecha (cambia toda la página al instante).
- **Totalmente responsive** — escritorio, tablet y móvil (con menú hamburguesa).
- Secciones: Héroe · Contexto · Enfoque (3 miradas) · Nosotros · Métricas · Servicios ·
  **Mirada Panorámica** (iniciativa insignia) · Sectores · Metodología · Cita · Eventos · Equipo · Insights · Contacto.
- Interacciones: barra de progreso de scroll, navegación activa, animaciones de aparición,
  contadores animados, gráfico "lectura de la economía" que se dibuja, y **ventanas de detalle**
  (modales) en Servicios e Insights.
- Accesibilidad: HTML semántico, foco visible, `prefers-reduced-motion`, textos alternativos.

## Cómo editar el contenido

**Todo el texto está en un solo lugar**: dentro de `index.html`, en el objeto `CONTENT`
(hay dos bloques: `es:{…}` y `en:{…}`). Cambia ahí los textos y se actualizan en toda la página.
No necesitas tocar el HTML de cada sección.

Ejemplos frecuentes:
- **Teléfono / email / ubicación** → `contact_rows` (y el `mailto:` en el footer).
- **Servicios** → arreglo `services` (título, descripción, lista "qué entregamos", "ideal para").
- **Eventos, Sectores, Insights, Equipo** → sus respectivos arreglos.
- **Métricas** (44 / 16 / 350+ / 18) → `metrics` y `hero_stats`.

## Cosas que puedes ir agregando

- **Fotos reales de eventos** — hoy usan un marcador con degradado. Colócalas en `assets/`
  y reemplaza el bloque `.event__img` por una `<img>`.
- **Fotos del equipo** — la ficha de Martin Rapp ya usa foto; los perfiles de apoyo usan un avatar
  con inicial. Agrega sus fotos cuando estén disponibles.
- **Teléfono real** — en el prototipo el teléfono era un marcador; se omitió hasta confirmarlo.
- **Artículos de Insights** — los textos actuales son borradores; reemplázalos por los reales.

## Recursos (`assets/`)

- `logo.jpeg` — logo MasterMinds (nudo entrelazado turquesa sobre azul marino).
- `martin-rapp.png`, `martin-rapp-bw.png`, `martin-rapp-color.png` — retratos de Martin Rapp.

## Marca

- **Colores:** papel `#f4f1e9`, azul marino `#0e2b3c`, turquesa `#1c8f92` / `#4bbfc2`.
- **Tipografías:** Fraunces (títulos), IBM Plex Sans (texto), IBM Plex Mono (etiquetas y datos).
- **Tagline:** *Perspectivas que convergen. Decisiones que trascienden.*

---
© 2026 MasterMinds S.R.L. · Bolivia

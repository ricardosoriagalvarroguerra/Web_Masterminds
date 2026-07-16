# MasterMinds — Sitio web (React + TypeScript)

Front-end del sitio de **MasterMinds**, construido con **React + TypeScript + Vite**.
Es la versión oficial y mantenible del sitio. Reemplaza los gráficos "de datos falsos" del
prototipo por **ilustraciones editoriales con significado** e integra una galería de eventos
lista para fotos reales.

## Requisitos

- Node.js 18+ (probado con Node 25). Incluye `npm`.

## Cómo ejecutarlo

```bash
cd masterminds-react
npm install        # solo la primera vez
npm run dev        # servidor de desarrollo → http://localhost:5178
```

Otros comandos:

```bash
npm run build      # valida tipos (tsc) y genera la versión de producción en dist/
npm run preview    # sirve la versión de producción ya construida
```

## Estructura

```
masterminds-react/
├─ index.html               # HTML base (fuentes, meta, favicon)
├─ public/assets/           # logo + retratos de Martin Rapp (+ carpeta events/)
└─ src/
   ├─ main.tsx              # punto de entrada
   ├─ App.tsx               # compone todas las secciones + estado del modal
   ├─ index.css             # sistema de diseño completo (tokens, componentes, responsive)
   ├─ data/content.ts       # ⭐ TODO el texto (ES + EN) — fuente única de verdad
   ├─ i18n/                 # contexto de idioma (ES/EN)
   ├─ hooks/                # reveal al hacer scroll, contadores, progreso, sección activa
   └─ components/           # una pieza por sección + las 2 ilustraciones
      ├─ ConvergenceArt.tsx # "Perspectivas que convergen" (héroe)
      └─ TerrainArt.tsx     # contornos "El terreno" (contexto)
```

## Editar el contenido

**Todo el texto está en `src/data/content.ts`**, en dos bloques: `es` y `en`.
Cambia ahí los textos y se actualizan en toda la página (y en ambos idiomas). No hace falta
tocar los componentes.

Ejemplos frecuentes:
- Teléfono / email / ubicación → `contactRows`.
- Servicios (título, descripción, "qué entregamos", "ideal para") → `services`.
- Métricas 44 / 16 / 350+ / 18 → `metrics` y `heroStats`.
- Eventos, Sectores, Insights, Equipo → sus arreglos respectivos.

## Agregar las fotos de los eventos

La galería de Eventos ya está lista. Cada tarjeta muestra un marcador elegante hasta que
agregues la foto real:

1. Coloca las imágenes en `public/assets/events/` (p. ej. `amcham.jpg`).
2. En `src/data/content.ts`, en el arreglo `events`, añade `img` a cada evento:

```ts
{ meta: 'AMCHAM Bolivia', title: 'AMCHAM Business Forum', img: '/assets/events/amcham.jpg' },
```

La tarjeta cambia automáticamente el marcador por la foto (recorte `object-fit: cover`).
Relación de aspecto recomendada: **3:2** (p. ej. 1200×800).

## Las ilustraciones (reemplazan a los gráficos falsos)

- **ConvergenceArt** — las tres miradas (económica, coyuntural, política) fluyen y
  **convergen** en "una lectura clara". Refuerza el logo y el lema *Perspectivas que convergen*.
- **TerrainArt** — contornos topográficos ("leemos el terreno completo, no un solo indicador").

Ambas son SVG con animación sutil, respetan `prefers-reduced-motion` y se adaptan a ES/EN.

## Características

- **Bilingüe ES/EN** (botón arriba a la derecha) · **responsive** con menú móvil.
- Animaciones al hacer scroll, contadores, barra de progreso, navegación activa, modales.
- Accesibilidad: HTML semántico, foco visible, `prefers-reduced-motion`, textos alternativos.

## Marca

- Colores: papel `#f4f1e9`, azul marino `#0e2b3c`, turquesa `#1c8f92` / `#4bbfc2`.
- Tipografías: Fraunces (títulos), IBM Plex Sans (texto), IBM Plex Mono (etiquetas/datos).
- Tagline: *Perspectivas que convergen. Decisiones que trascienden.*

---
_El prototipo original de Claude Design está en `../dise-o-web-masterminds/`.
La versión anterior en HTML/JS puro está en `../masterminds-web/` (referencia)._

© 2026 MasterMinds S.R.L. · Bolivia

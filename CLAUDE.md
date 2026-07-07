# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es

Sitio corporativo de INNSYSTE (soluciones IT/OT, contenido en español). HTML5 + CSS3 + JavaScript vanilla, **sin build step, sin frameworks, sin dependencias**. Lo que está en el repo es exactamente lo que se sirve.

## Comandos

No hay build, lint ni tests. Desarrollo local = servir archivos estáticos desde la raíz:

```bash
python -m http.server 8080     # o: npx serve -l 8080 .
```

Verificación tras un cambio: abrir la página en el navegador, revisar consola sin errores, navegación del header/footer, responsive (móvil ~375px y escritorio) y que los assets carguen (cuidado con rutas relativas desde `sdm/`, que está un nivel abajo).

## Despliegue

Push a `main` → GitHub Actions (`.github/workflows/azure-static-web-apps-*.yml`) publica automáticamente en **Azure Static Web Apps**. No hay staging: verificar localmente antes de push. Los PRs generan un entorno de preview automático.

`staticwebapp.config.json` controla el routing en Azure (rutas limpias como `/inntime` → `inntime.html`, y `navigationFallback` a `index.html`). **No borrarlo**; toda página nueva con URL limpia necesita su entrada `routes` aquí.

## Arquitectura

- `index.html` — sitio principal one-page (hero, retos, valor, servicios, estándares, experiencia, contacto).
- `inntime.html`, `innseal.html`, `kas-telenet.html` — landings de productos/aliados; comparten `styles.css` y `script.js` con el index.
- `sdm/index.html` — sección independiente un nivel abajo.
- `styles.css` — único stylesheet para todo el sitio. Todos los tokens de diseño (colores, tipografía, sombras, radios) viven como custom properties en `:root`; usar las variables, no hardcodear valores.
- `script.js` — IIFE única: estado del header al hacer scroll, nav móvil, dropdowns, año del footer y scroll-reveal con IntersectionObserver. Asume que existen `#siteHeader`, `#navToggle` y `.nav`; una página que incluya `script.js` sin esos elementos lanzará errores.
- `assets/` — `logo.svg` (navy, fondos claros) y `logo-light.svg` (fondos oscuros), favicons, imágenes.

## Reglas del proyecto

- Paleta oficial: navy `#112e50`, rosa `#ff4575`, blanco. Tipografía: Montserrat. Detalle completo en `.claude/skills/marca-innsyste/SKILL.md` — cargar esa skill antes de cualquier trabajo visual.
- **El README.md está desactualizado** (menciona Inter/Space Grotesk, paleta azul/cyan y GitHub Pages): la fuente de verdad del diseño es `styles.css`, y el deploy real es Azure SWA.
- Mantener el sitio auto-contenido: sin CDNs nuevos ni frameworks. La única dependencia externa permitida es Google Fonts.
- Contenido siempre en español.
- El repo vive en una carpeta OneDrive y `.git` ya se corrompió una vez por la sincronización. Ante errores git raros (`bad object`, `cannot lock ref`, locks huérfanos), la fuente de verdad es `origin` (GitHub): recuperar refs desde `origin/main`, no intentar reparar objetos locales.

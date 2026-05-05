# INNSYSTE — Sitio corporativo

> Tecnología bien pensada para organizaciones exigentes.
> Soluciones y respaldo para líderes de IT/OT.

Sitio web institucional de **INNSYSTE**, basado en el portafolio de Soluciones TIC 2026.

## Stack

- **HTML5** semántico
- **CSS3** moderno (Grid, Flexbox, custom properties, clamp())
- **JavaScript** vanilla (sin dependencias)
- **Google Fonts** — Inter + Space Grotesk

Sin build step, sin frameworks. Listo para desplegar en cualquier hosting estático.

## Estructura

```
insysteweb/
├── index.html       # Estructura completa del sitio
├── styles.css       # Diseño + responsive (4 breakpoints)
├── script.js        # Menú móvil, scroll reveal, validación de form
├── .gitignore
└── README.md
```

## Secciones

1. **Hero** — propuesta de valor + stats (11+ años, 4 líneas, 360° IT/OT)
2. **Retos** — 14 desafíos comunes + 3 insights (Gartner, OnePoll, FinOps)
3. **Valor** — 4 pilares: Planear · Estabilizar · Optimizar · Anticipar
4. **Servicios** — 4 líneas de negocio:
   - Confidencialidad, Integridad & Disponibilidad (Ciberseguridad)
   - Resiliencia Operativa & Continuidad
   - Servicios Gestionados & Soporte
   - Privacidad, Cumplimiento & Gobierno de datos
5. **Estándares** — ISO 27001, SOC 2, NIST CSF, ITIL 4, COBIT, Ley 1581, etc.
6. **Experiencia** — bloque oscuro destacando los 11 años
7. **Contacto** — datos directos + formulario con validación

## Desarrollo local

Cualquier servidor estático sirve. Opciones rápidas:

```bash
# Python
python -m http.server 5173

# Node (npx)
npx serve .

# VS Code
# Extensión "Live Server" → click derecho en index.html
```

Luego abre <http://localhost:5173>.

## Despliegue

### GitHub Pages

1. *Settings → Pages*
2. *Source*: `Deploy from a branch`
3. *Branch*: `main` / `(root)`
4. URL pública: `https://yaimor.github.io/insysteweb/`

### Otros hosts

- **Netlify** / **Vercel** / **Cloudflare Pages**: arrastra la carpeta o conecta el repo. No requiere configuración.

## Diseño

| Token | Valor |
|---|---|
| Primario | `#1e40af` (azul corporativo) |
| Acento | `#06b6d4` (cyan tecnológico) |
| Fondo oscuro | `#0a0e27` (navy profundo) |
| Tipografía cuerpo | Inter |
| Tipografía display | Space Grotesk |

## Responsive

Breakpoints definidos en `styles.css`:

| Breakpoint | Comportamiento |
|---|---|
| `≤ 1100px` | Tablet landscape — padding ajustado |
| `≤ 900px` | Tablet portrait — nav hamburguesa, grids 1 col |
| `≤ 700px` | Móvil — botones full-width, formulario apilado |
| `≤ 480px` | Móvil pequeño — tipografía y padding compactos |

## Accesibilidad

- Skip-link al contenido principal
- ARIA labels en navegación, botones y form
- `prefers-reduced-motion` respetado
- Touch targets mínimos de 44px en pantallas táctiles
- Contraste AA en texto sobre todos los fondos

## Contacto comercial

**Mario Javier Pacheco Machado**
📧 mario@innsyste.com
📞 +57 300 719 1116
🌐 [www.innsyste.com](https://www.innsyste.com)

---

© INNSYSTE — Todos los derechos reservados.

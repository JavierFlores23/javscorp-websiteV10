# Jav's Corp — Agencia de Marketing Digital

Sitio web de Jav's Corp construido con arquitectura **MVC** en Vanilla JS, HTML y CSS puro. Diseño oscuro de lujo con animaciones, cursor personalizado y estructura escalable.

---

## 🗂️ Estructura del proyecto (MVC)

```
javscorp-mvc/
├── index.html              ← Vista principal / punto de entrada
├── model/
│   └── AppModel.js         ← Datos y estado de la app (solo lectura)
├── view/
│   ├── AppView.js          ← Funciones de renderizado del DOM
│   └── style.css           ← Estilos globales
├── controller/
│   └── AppController.js    ← Lógica de eventos y orquestación
└── README.md
```

## 🧠 Arquitectura MVC

| Capa | Archivo | Responsabilidad |
|------|---------|-----------------|
| **Model** | `AppModel.js` | Fuente de verdad de los datos. No toca el DOM ni tiene efectos secundarios. |
| **View** | `AppView.js` + `style.css` | Renderiza datos en HTML. No contiene lógica de negocio. |
| **Controller** | `AppController.js` | Conecta Model y View. Escucha eventos, dispara animaciones, orquesta el flujo. |

### Flujo de datos
```
Controller → Model.get('data') → View.render(data) → DOM
     ↑                                                  ↓
     └──────────────── Eventos del usuario ─────────────┘
```

## ✨ Funcionalidades

- **Diseño dark luxury** con paleta cian + púrpura
- **Cursor personalizado** con seguimiento suave (desktop)
- **Animaciones scroll-based** con `IntersectionObserver`
- **Navbar sticky** que se oculta al hacer scroll hacia abajo
- **Links de navegación activos** por sección visible
- **Parallax** en el hero
- **Menú mobile** con drawer lateral
- **Formulario de contacto** con toast de confirmación
- **Blobs animados** en el hero
- **Grid de servicios y portafolio** generado desde datos
- **Responsive** full (mobile, tablet, desktop)
- Soporte para `prefers-reduced-motion`

## 🚀 Cómo usar

Abre `index.html` en tu navegador. No requiere build tools ni dependencias.

```bash
# Opción simple con servidor local
npx serve .

# o con Python
python -m http.server 8080
```

## 📈 Próximas mejoras sugeridas

- [ ] Conectar formulario a un backend real (Formspree, EmailJS, etc.)
- [ ] Agregar casos de éxito reales en el portafolio
- [ ] Internacionalización (i18n) — el Model ya está preparado
- [ ] Dark/Light mode toggle
- [ ] Animaciones de contadores en las stats
- [ ] Blog / artículos de marketing

---

© 2025 Jav's Corp. Todos los derechos reservados.

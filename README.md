# VICO Travel Group — Landing Page

Landing page moderna y orientada a conversión para la agencia de viajes **VICO Travel Group** (Mendoza, Argentina). Construida con **Next.js 14 (App Router)** y **Tailwind CSS**.

## Objetivo

Generar consultas por **WhatsApp** y filtrar clientes potenciales a través de un formulario de cotización que arma el mensaje y abre WhatsApp.

## Stack

- Next.js 14 (App Router, JavaScript)
- Tailwind CSS 3
- Diseño responsive, animaciones suaves, UX simple

## Estructura

```
vico-travel-group/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Destinos.jsx
│   ├── ComoTrabajamos.jsx
│   ├── FormCotizacion.jsx
│   ├── Testimonios.jsx
│   ├── Nosotros.jsx
│   ├── Footer.jsx
│   └── FloatingWhatsApp.jsx
├── lib/
│   └── config.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.mjs
```

## Secciones

1. **Hero** con título, subtítulo, CTA WhatsApp e imagen de fondo.
2. **Destinos destacados** (Brasil, Caribe, Europa, Mendoza) con CTA "Consultar".
3. **Cómo trabajamos** (4 pasos).
4. **Formulario de cotización** (Nombre, Destino, Fechas, Presupuesto, Personas) → arma mensaje y abre WhatsApp.
5. **Testimonios** (3 simulados).
6. **Sobre nosotros**.
7. **Contacto / Footer** + **botón flotante de WhatsApp** siempre visible.

## Configuración

Editá [lib/config.js](lib/config.js) y reemplazá:

- `whatsappNumber` — número en formato internacional sin signos (ej: `5492611234567`).
- `whatsappDisplay` — número formateado para mostrar.
- `email` — email de contacto real.

> ⚠️ Por seguridad, el repo trae datos **ficticios** de ejemplo. Reemplazalos antes de publicar.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Notas

- Las imágenes usan Unsplash (CDN público). Para producción, descargalas y servilas localmente o usá `next/image` con dominios en `next.config.mjs`.
- Sin dependencias innecesarias: animaciones con Tailwind keyframes, íconos en SVG inline.
# vico-travel-group

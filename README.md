
# Transporte de Carga Chile — Sitio Next.js

Sitio listo para ofrecer **carga consolidada (LTL)** y **full truckload (FTL)** desde **Arica a Punta Arenas**.

## Rápido inicio
```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel (pasos)
1. Sube este proyecto a GitHub.
2. Entra a Vercel → "New Project" → Importa el repo.
3. En **Environment Variables**, define: `MAIL_HOST`, `MAIL_PORT`, `MAIL_USER`, `MAIL_PASS`, `MAIL_TO`, `NEXT_PUBLIC_WHATSAPP`.
4. Deploy.

## Correo de cotizaciones
El formulario envía a `/api/quote` que usa **Nodemailer** con SMTP. Requiere credenciales válidas (idealmente de tu dominio).
- Si Gmail bloquea, usa un SMTP de tu hosting o servicios como SendGrid/Resend (ajusta el transporter).

## Personalización
- Logo: reemplaza `public/logo.svg` y `public/og-image.png`.
- Textos y servicios en `components/*` y `app/page.tsx`.
- Colores en `tailwind.config.ts`.

# Kayla's Haarkunst – Next.js

Minimalistisches, sehr schnelles Next.js‑Projekt (App Router, Tailwind). Schwarz/Weiß mit goldener Akzentfarbe.

## Loslegen
```bash
pnpm i # oder npm i / yarn
pnpm dev
```

## Inhalte ändern
- `lib/site.ts`: Adresse, Telefon, Socials, Services, Galerie.
- Bilder können lokal in `public/` liegen oder remote. Remote-Domains sind in `next.config.mjs` freigegeben.

## SEO
- `app/sitemap.ts`, `app/robots.ts` sind eingerichtet.
- Bitte `public/og.jpg` ersetzen.

## Deployment
- Vercel empfohlen. `next build` → `next start`.

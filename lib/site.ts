export const SITE = {
  name: "Kayla's Haarkunst",
  shortName: "Kayla's Haarkunst",
  tagline: 'Dein Style, unsere Kunst – Herrenfriseur in Bremen Horn‑Lehe. Mit oder ohne Termin willkommen.',
  email: 'kaylashaarkunst@gmail.com',
  phone: { raw: '+491753888285', display: '+49 175 3888285' },
  address: { line: 'Leher-Heerstr 193, 28357 Bremen' },
  social: {
    instagram: 'https://www.instagram.com/issastyle1', // from site link
    tiktok: 'https://www.tiktok.com/@kaylas.haarkunst',
  },
  mapHref: 'https://maps.google.com/?q=Leher-Heerstr+193,+28357+Bremen',
} as const;

export const CONTACT = {
  telHref: `tel:${SITE.phone.raw}`,
  telDisplay: SITE.phone.display,
  whatsApp: `https://wa.me/${SITE.phone.raw.replace(/[^\d]/g,'')}`,
} as const;

export type Service = { title: string; price: string; category: 'Einzelleistungen'|'Bart'|'Extras'|'Kombi-Angebote'; slug: string; subtitle?: string };
export const SERVICES: Service[] = [
  { title: 'Classic Haarschnitt (Schere)', price: '24 €', category: 'Einzelleistungen', slug: 'classic-haarschnitt' },
  { title: 'Haarschnitt + Stylen', price: '17 €', category: 'Einzelleistungen', slug: 'haarschnitt-stylen' },
  { title: 'Haarschnitt + Waschen + Stylen', price: '22 €', category: 'Einzelleistungen', slug: 'haarschnitt-waschen-stylen' },
  { title: 'Schüler-Haarschnitt', price: '14 €', category: 'Einzelleistungen', slug: 'schueler-haarschnitt' },
  { title: 'Kinder unter 12 Jahre', price: '10 €', category: 'Einzelleistungen', slug: 'kinder-unter-12' },
  { title: 'Bart Schnitt', price: '10 €', category: 'Bart', slug: 'bart-schnitt' },
  { title: 'Augenbrauen zupfen', price: '8 €', category: 'Extras', slug: 'augenbrauen-zupfen' },
  { title: 'Waschen', price: '5 €', category: 'Extras', slug: 'waschen' },
  { title: 'Waschen + Stylen', price: '8 €', category: 'Extras', slug: 'waschen-stylen' },
  { title: 'Heißwachs (z. B. Nase, Ohren)', price: '5 €', category: 'Extras', slug: 'heisswachs' },
  { title: 'Haarschnitt + Bart + Stylen', price: '26 €', category: 'Kombi-Angebote', slug: 'haarschnitt-bart-stylen' },
  { title: 'Haarschnitt + Bart + Heißwachs + Waschen + Stylen', price: '31 €', category: 'Kombi-Angebote', slug: 'full-combo' },
];

export const GALLERY = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/688885ba5355280797fd1e1f/3d09d28d-d241-47f0-b862-ccdd46c6da9e/firma2.jpg',
    alt: 'Logo im Salon – Kayla\'s Haarkunst',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/688885ba5355280797fd1e1f/c5aa0b76-abf2-4445-91ba-20501da46f71/WhatsApp%2BBild%2B2025-07-29%2Bum%2B14.32.51_395cf127.jpg',
    alt: 'Logo-Detail – Kayla\'s Haarkunst',
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/688885ba5355280797fd1e1f/d6f66702-01fa-45d8-8aa5-a2d08b71bb5b/WhatsApp%2BBild%2B2025-07-29%2Bum%2B14.27.47_16d2c6c6.jpg',
    alt: 'Preisliste – Services & Preise',
  }
] as const;

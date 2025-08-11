import Image from 'next/image';
import Link from 'next/link';
import { SITE, GALLERY } from '@/lib/site';

// Ein paar elegante Icons für den "Unsere Philosophie"-Abschnitt
const ScissorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M6.333 9.167a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm11.334 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM6.333 9.167L12 14.25l5.667-5.083M12 21.75V14.25" />
  </svg>
);
const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M9.5 2.5l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4zM18.5 13.5l.5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2z" />
  </svg>
);
const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
    <path d="M12 2.25c-4.473 0-8.25 3.06-8.25 7.5 0 4.144 3.28 8.72 7.73 11.72a.75.75 0 001.04 0c4.45-3 7.73-7.576 7.73-11.72 0-4.44-3.777-7.5-8.25-7.5zM9 12.75l2.25 2.25L15 11.25" />
  </svg>
);

export const metadata = { title: 'Über uns' };

export default function AboutPage() {
  const hero = GALLERY?.[1] ?? GALLERY?.[0];

  // Daten für den neuen "Philosophie"-Abschnitt
  const philosophy = [
    {
      icon: ScissorIcon,
      title: 'Handwerk & Präzision',
      description: 'Detailverliebte Schnitte und saubere Übergänge sind unser Markenzeichen.',
    },
    {
      icon: SparkleIcon,
      title: 'Stil & Atmosphäre',
      description: 'Wir schaffen eine moderne, ehrliche Umgebung, in der du dich wohlfühlst.',
    },
    {
      icon: ShieldIcon,
      title: 'Qualität & Hygiene',
      description: 'Kompromisslose Sauberkeit und Zuverlässigkeit für dein Vertrauen.',
    },
  ];

  return (
    <main className="bg-black text-white overflow-x-hidden">
      <div className="container mx-auto px-6 py-24 md:py-32">
        {/* Haupt-Layout: Text links, Bild rechts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          
          {/* Text-Spalte */}
          <div className="py-10 space-y-8 text-center h-[100vh]">
            <h1 className=" text-4xl md:text-6xl font-bold tracking-tighter">
              Unsere Passion: <br />
              <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                Perfektes Handwerk.
              </span>
            </h1>

            <p className="text-lg text-neutral-300 leading-relaxed max-w-prose">
              Unsere Leidenschaft ist die Kunst des Haareschneidens. Mit höchster Präzision und einem Auge für Details bieten wir ein unvergleichliches Erlebnis – modern, freundlich und perfekt auf deinen individuellen Stil zugeschnitten.
            </p>

            {/* CTAs */}
            <div className="flex justify-center md:items-start col md:row flex-wrap gap-4 pt-4">
              
              <Link
                href={SITE?.mapHref ?? '/kontakt'}
                className="w-[80vw] inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold border border-neutral-700 text-neutral-300 transition-colors hover:bg-neutral-900 hover:border-yellow-400 hover:text-white"
              >
                Anfahrt & Kontakt
              </Link>
              <Link
                href={'/appointment'}
                className="w-[80vw] group inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-semibold transition-all bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:shadow-lg hover:shadow-yellow-500/20 hover:scale-105"
              >
                Termin buchen
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Bild-Spalte mit Collage-Effekt */}
          <div className="relative h-[450px] md:h-[600px] lg:-mr-24">
            {/* Hauptbild */}
            <div className="relative w-full h-full aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              {hero?.src ? (
                <Image src={hero.src} alt={hero.alt ?? 'Unser Studio'} fill className="object-cover" priority />
              ) : (
                <div className="h-full w-full bg-neutral-900" />
              )}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>

        {/* Abschnitt: Unsere Philosophie */}
        <div className="mt-32 md:mt-48 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center">
              Unsere Philosophie
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
              Drei Säulen, auf denen unser Service aufbaut. Kein Schnickschnack, nur das, was zählt.
            </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item) => (
              <div key={item.title} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center flex flex-col items-center transition-all hover:bg-neutral-900 hover:border-yellow-400/50">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
        </div>

      </div>
    </main>
  );
}
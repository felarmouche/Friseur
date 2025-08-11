import { CONTACT } from '@/lib/site';

export const metadata = {
  title: 'Termin buchen',
  description:
    'Buche deinen Termin bequem per WhatsApp oder telefonisch. Walk-ins sind jederzeit willkommen.',
};

export default function AppointmentsPage() {
  return (
    <section
      aria-labelledby="appointments-title"
      className="relative min-h-[100vh] flex items-center"
    >
      <div className="container mx-auto max-w-2xl px-4 py-12 flex gap-6 flex-col">
        <header className="mb-8 text-center flex flex-col gap-3">
          <h1
            id="appointments-title"
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-tight text-white leading-none"
          >
            Termin buchen
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-white sm:text-base">
            Buche deinen Termin bequem per WhatsApp oder telefonisch.{' '}
            <span className="whitespace-nowrap">Walk-ins</span> sind jederzeit willkommen.
          </p>
        </header>

        {/* Call-to-Action Card */}
        <div className="rounded-2xl border border-gol bg-white/70 p-6 shadow-sm backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* WhatsApp */}
            <a
              href={CONTACT.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-white shadow-md transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 active:scale-[0.99]"
              aria-label="Per WhatsApp Termin buchen"
              title="Per WhatsApp Termin buchen"
            >
              <WhatsAppIcon className="h-5 w-5 opacity-90 transition group-hover:scale-110" />
              <span className="font-medium">WhatsApp</span>
            </a>

            {/* Telefon */}
            <a
              href={CONTACT.telHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-800 shadow-sm transition hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 active:scale-[0.99]"
              aria-label={`Anrufen: ${CONTACT.telDisplay}`}
              title={`Anrufen: ${CONTACT.telDisplay}`}
            >
              <PhoneIcon className="h-5 w-5 opacity-80" />
              <span className="font-medium">{CONTACT.telDisplay}</span>
            </a>
          </div>

          {/* Zusatzinfos */}
          <ul className="mt-6 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <li className="inline-flex items-center gap-2">
              <Dot className="text-emerald-500" />
              Antwort meistens in wenigen Minuten
            </li>
            <li className="inline-flex items-center gap-2">
              <Dot className="text-amber-600" />
              Kurzfristige Termine nach Verfügbarkeit
            </li>
          </ul>
        </div>

        {/* Walk-in Hinweis */}
        <p className="mt-6 text-center text-xs text-white">
          Hinweis: Standard-Messenger-/Telefongebühren deines Anbieters können anfallen.
        </p>
      </div>
    </section>
  );
}

/* ---- Kleine, dependency-freie SVG-Icons ---- */

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12.02 0C5.4 0 .02 5.37.02 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.19-1.6a11.97 11.97 0 0 0 5.83 1.48h.01c6.62 0 12-5.37 11.99-11.98 0-3.2-1.25-6.2-3.5-8.42ZM12.02 22.03h-.01a9.96 9.96 0 0 1-5.07-1.39l-.36-.21-3.67.95.98-3.58-.23-.37a9.96 9.96 0 0 1-1.6-5.45c0-5.5 4.48-9.97 10.01-9.97 2.67 0 5.18 1.04 7.07 2.92a9.93 9.93 0 0 1 2.93 7.06c0 5.5-4.48 9.98-10.05 9.98Zm5.69-7.45c-.31-.15-1.82-.9-2.1-1-.28-.1-.48-.15-.68.15-.2.31-.78 1-.95 1.21-.17.2-.35.23-.65.08-.31-.16-1.3-.48-2.47-1.53-.91-.8-1.52-1.8-1.7-2.1-.17-.31-.02-.48.13-.63.14-.14.31-.37.46-.56.15-.2.2-.34.31-.56.11-.23.06-.43-.03-.6-.08-.15-.68-1.63-.93-2.24-.25-.6-.5-.52-.68-.52h-.57c-.2 0-.51.07-.77.36-.26.31-1 1-1 2.44 0 1.43 1.02 2.82 1.16 3.02.16.2 2 3.06 4.89 4.29.68.3 1.2.47 1.62.6.68.22 1.3.19 1.79.12.55-.08 1.82-.74 2.08-1.45.26-.71.26-1.32.18-1.45-.08-.12-.28-.2-.59-.35Z" />
    </svg>
  );
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      role="img"
      focusable="false"
    >
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1C10.52 22 2 13.48 2 3a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}

function Dot({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${className}`}
      aria-hidden="true"
    />
  );
}

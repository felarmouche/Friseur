import { SERVICES } from '@/lib/site'
import { Scissors, Sparkles, Star } from 'lucide-react'

export const metadata = { title: 'Services & Preise' }

// --- THEME (lokal, kein globales CSS nötig) ---
const GOLD = '#b08d29'
const GOLD_DARK = '#6b4e06'
const GOLD_LIGHT = '#f3d98b'
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 25%, ${GOLD_LIGHT} 50%, ${GOLD} 75%, ${GOLD_DARK} 100%)`

const goldText = {
  backgroundImage: GOLD_GRADIENT,
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
}
const goldBorder = {
  background: `linear-gradient(#0a0a0a,#0a0a0a) padding-box, ${GOLD_GRADIENT} border-box`,
  border: '1px solid transparent',
}

// Gradient-Border Card (ohne externe CSS-Datei)
function GoldCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-px" style={goldBorder}>
      <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] bg-zinc-950">
        {children}
      </div>
    </div>
  )
}

// Kategorie-Heading mit Icon im Gold-Ring
function CategoryHeading({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  children: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full"
        style={goldBorder}
        aria-hidden="true"
      >
        <Icon className="h-5 w-5" style={{ color: GOLD }} />
      </span>
      <h2 className="h2 m-0 text-[color:var(--fg)]">{children}</h2>
    </div>
  )
}

// Preiszeile mit „Leader-Dots“
function PriceRow({
  title,
  subtitle,
  price,
}: {
  title: string
  subtitle?: string
  price: string
}) {
  return (
    <li className="group flex items-baseline gap-4 py-2">
      <div className="min-w-0">
        <p className="font-medium text-white">{title}</p>
        {subtitle ? (
          <p className="muted text-sm text-zinc-400">{subtitle}</p>
        ) : null}
      </div>

      {/* Leader-Dots */}
      <span
        className="mx-2 h-px flex-1 self-center border-t border-dotted transition-opacity duration-200"
        style={{ borderColor: 'rgba(250,250,250,0.12)' }}
        aria-hidden="true"
      />

      <span className="font-semibold" style={{ color: GOLD }}>
        {price}
      </span>
    </li>
  )
}

export default function ServicesPage() {
  const single = SERVICES.filter((s: any) => s.category === 'Einzelleistungen')
  const beardAndExtras = SERVICES.filter(
    (s: any) => s.category !== 'Einzelleistungen' && s.category !== 'Kombi-Angebote'
  )
  const combos = SERVICES.filter((s: any) => s.category === 'Kombi-Angebote')

  return (
    <section className="section relative">
      <div className="container">
        {/* Page Header */}
        <header className="my-10 text-center">
          <p className="text-xs tracking-widest uppercase text-zinc-400">
            Preisliste
          </p>
          <h1 className="h1 mt-2 mb-3">
            <span style={goldText}>Services</span> & Preise
          </h1>
          <p className="muted max-w-2xl mx-auto text-zinc-400">
            Transparent, präzise, fair. Alle Preise inkl. MwSt.
          </p>
        </header>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Einzelleistungen */}
          <GoldCard>
            <div className="p-6 md:p-8">
              <CategoryHeading icon={Scissors}>Einzelleistungen</CategoryHeading>
              <ul className="divide-y divide-zinc-900/60">
                {single.map((s: any) => (
                  <PriceRow
                    key={s.slug}
                    title={s.title}
                    subtitle={s.subtitle}
                    price={s.price}
                  />
                ))}
              </ul>
            </div>
          </GoldCard>

          {/* Bart & Extras + Kombi */}
          <div className="space-y-6">
            <GoldCard>
              <div className="p-6 md:p-8">
                <CategoryHeading icon={Sparkles}>Bart & Extras</CategoryHeading>
                <ul className="divide-y divide-zinc-900/60">
                  {beardAndExtras.map((s: any) => (
                    <PriceRow key={s.slug} title={s.title} price={s.price} />
                  ))}
                </ul>
              </div>
            </GoldCard>

            <GoldCard>
              <div className="p-6 md:p-8">
                <CategoryHeading icon={Star}>Kombi-Angebote</CategoryHeading>
                <ul className="divide-y divide-zinc-900/60">
                  {combos.map((s: any) => (
                    <PriceRow key={s.slug} title={s.title} price={s.price} />
                  ))}
                </ul>
              </div>
            </GoldCard>
          </div>
        </div>

        {/* Fußnote */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-zinc-500">
          <p>
            * Preise können je nach Haar-/Bartlänge und Aufwand variieren.
          </p>
          <p>
            Stand: {new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </section>
  )
}

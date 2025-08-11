'use client'

import * as React from 'react'
import { motion, useInView } from 'framer-motion'
import { Scissors, Star, Clock, MapPin, Phone, Award, Users, Calendar  } from 'lucide-react'
import { Instagram, Music2 as Tiktok } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'


// --- THEME ---
// Upgraded, darker, shinier gold system
const GOLD = '#b08d29' // base gold (darker than before)
const GOLD_DARK = '#6b4e06'
const GOLD_LIGHT = '#f3d98b'
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 25%, ${GOLD_LIGHT} 50%, ${GOLD} 75%, ${GOLD_DARK} 100%)`

// Little helper styles to apply gold gradients
const goldText = {
  backgroundImage: GOLD_GRADIENT,
  WebkitBackgroundClip: 'text' as const,
  backgroundClip: 'text' as const,
  color: 'transparent',
}
const goldBg = {
  backgroundImage: GOLD_GRADIENT,
}

// --- CONSTANTS & DATA ---
const SITE = {
  name: 'Barber Studio Bremen',
  tagline:
    'Wo Tradition auf moderne Präzision trifft. Erleben Sie Handwerkskunst auf höchstem Niveau.',
  location: 'Bremen · Horn-Lehe',
  locationShort: 'Horn-Lehe, Bremen',
  rating: '5/5 Google Bewertung*',
  openingHours: 'Mo–Sa: 9:00–19:00 Uhr',
}

const CONTACT = {
  whatsApp: 'https://wa.me/4917123456789', // ersetzen
  telHref: 'tel:+4942112345678', // ersetzen
  telDisplay: '+49 421 123 456 78',
}
const SOCIALS = [
  { name: 'Instagram', handle: '@issastyle1', href: 'https://www.instagram.com/issastyle1', Icon: Instagram },
  { name: 'TikTok',    handle: '@kaylas.haarkunst', href: 'https://www.tiktok.com/@kaylas.haarkunst', Icon: Tiktok },
]

type Size = 'sm' | 'md' | 'lg'
type Variant = 'icon' | 'pill' // icon = nur Icon; pill = Icon + Handle


const SERVICES = [
  {
    title: 'Premium Cut',
    subtitle: 'Klassische Herrenschnitte',
    price: '35€',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Beard Styling',
    subtitle: 'Professionelle Bartpflege',
    price: '25€',
    image:
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Hot Towel Shave',
    subtitle: 'Traditionelle Nassrasur',
    price: '40€',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Complete Package',
    subtitle: 'Cut, Bart & Styling',
    price: '55€',
    image:
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Fade Specialist',
    subtitle: 'Moderne Fade-Schnitte',
    price: '38€',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Kids Cut',
    subtitle: 'Für unsere kleinen Gentlemen',
    price: '20€',
    image:
      'https://images.unsplash.com/photo-1516594915697-87eb3b1c6b3c?w=1600&auto=format&fit=crop&q=80',
  },
]

const GALLERY = [
  {
    src: '/images/herrenhaarschnitt.webp',
    alt: 'Professioneller Haarschnitt',
  },
  {
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&auto=format&fit=crop&q=80',
    alt: 'Perfektes Bartstyling',
  },
  {
    src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&auto=format&fit=crop&q=80',
    alt: 'Ambiente des Studios',
  },
  {
    src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200&auto=format&fit=crop&q=80',
    alt: 'Traditionelle Rasur',
  },
]

const STATS = [
  { icon: Users, value: '2500+', label: 'Zufriedene Kunden' },
  { icon: Award, value: '8', label: 'Jahre Erfahrung' },
  { icon: Star, value: '5.0', label: 'Google Bewertung' },
  { icon: Scissors, value: '50+', label: 'Cuts pro Tag' },
]

// --- HELPERS ---
function SectionHeader({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: React.ReactNode
  subtitle?: string
}) {
  return (
    <div className="text-center space-y-4">
      {kicker ? (
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-400">
          <span className="h-px w-8" style={{ backgroundImage: GOLD_GRADIENT }} />
          <span>{kicker}</span>
          <span className="h-px w-8 bg-zinc-800" />
        </div>
      ) : null}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? (
        <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!isInView) return
    const numericValue = parseInt(value.replace(/\D/g, ''))
    if (isNaN(numericValue)) return
    const start = performance.now()
    const duration = 1200

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.floor(p * numericValue))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, value])

  const suffix = value.includes('+') ? '+' : ''
  const hasDecimal = value.includes('.')

  return (
    <span ref={ref} style={goldText} className="inline-block">
      {isInView ? (hasDecimal ? value : count) : 0}
      {suffix}
    </span>
  )
}

// Gold ring wrapper using gradient border (no external CSS)
function GoldCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative rounded-2xl p-px ${className}`}
      style={{
        background: `linear-gradient(#0a0a0a, #0a0a0a) padding-box, ${GOLD_GRADIENT} border-box`,
        border: '1px solid transparent',
      }}
    >
      <div className="rounded-[calc(theme(borderRadius.2xl)-1px)] bg-zinc-950">
        {children}
      </div>
    </div>
  )
}

// Subtle page background accents
function BackgroundOrnaments() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {/* vignette */}
      <div className="absolute inset-0" style={{
        background:
          'radial-gradient(1000px 600px at 20% -10%, rgba(243,217,139,0.08), transparent 60%), radial-gradient(800px 500px at 80% 110%, rgba(176,141,41,0.07), transparent 60%)',
      }} />
      {/* fine grid */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
    </div>
  )
}

// --- LAYOUT SECTIONS ---

function Hero() {
  return (
    <section
      className="relative overflow-hidden py-12 md:py-0 h-[100svh] supports-[height:100dvh]:h-[100dvh] md:h-auto
             bg-cover bg-center bg-no-repeat
             bg-[image:linear-gradient(to_bottom,rgba(0,0,0,.75),rgba(0,0,0,.75)),var(--hero)]
             md:bg-black md:bg-none"
      style={{ ['--hero' as any]: `url(${GALLERY[0].src})` }}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 z-88">
        <div className="flex h-full flex-col justify-center gap-6 py-8 sm:py-10 md:py-24 md:grid md:grid-cols-2 md:items-center md:gap-12">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-6 sm:space-y-8 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-zinc-300 border-zinc-800 mx-auto md:mx-0">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              <span>{SITE.location}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Meisterhafte Schnitte.
              <span className="block" style={goldText}>
                Zeitlos. Präzise. Souverän.
              </span>
            </h1>

            <p className="mx-auto max-w-xl text-base sm:text-lg text-zinc-400 md:mx-0">{SITE.tagline}</p>

            <div className="pt-20 md:pt-0 flex flex-col sm:flex-row gap-3 sm:justify-center md:justify-start">

              <a
                href={CONTACT.telHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold border border-[zinc-800] text-white hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
                aria-label={`Telefon ${CONTACT.telDisplay}`}
              >
                <Phone className="h-5 w-5" /> {CONTACT.telDisplay}
              </a>
              <a
                href={CONTACT.whatsApp}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
                style={goldBg}
                aria-label="Termin via WhatsApp vereinbaren"
              >
                <Calendar className="h-5 w-5" /> Termin via WhatsApp
                {/* soft shine */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                  }}
                />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 pt-2 sm:pt-4 text-sm sm:text-[15px] text-zinc-400">
              <div className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" /> {SITE.openingHours}
              </div>
              <div className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 text-gold" /> {SITE.rating}
              </div>
            </div>
          </motion.div>

          {/* Image column — hidden on phones */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="relative hidden md:block"
            aria-hidden
          >
            <div
              className="aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl"
              style={{
                background: `linear-gradient(#0b0b0b,#0b0b0b) padding-box, ${GOLD_GRADIENT} border-box`,
                border: '1px solid transparent',
              }}
            >
              <img
                src={GALLERY[0].src}
                alt="Barbershop – Präziser Schnitt"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full"
              style={{ border: `1px solid ${GOLD}` }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="bg-black py-8 md:py-0">
      <SectionHeader
        kicker="Unser Barbershop"
        title={<><span style={{ color: GOLD }}>Unser</span> Barbershop</>}
        subtitle="Ein Blick auf unsere Statistiken und unsere Kundenbewertungen."
      />
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="text-center"
            >
              <div
                className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{
                  background: `linear-gradient(#0a0a0a,#0a0a0a) padding-box, ${GOLD_GRADIENT} border-box`,
                  border: '1px solid transparent',
                }}
              >
                <s.icon className="h-6 w-6 text-gold" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter value={s.value} />
              </div>
              <p className="text-sm text-zinc-400 mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" ref={ref} className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 space-y-10 md:space-y-16">
        <SectionHeader
          kicker="Leistungen"
          title={
            <>
              <span style={goldText}>Unsere</span> Services
            </>
          }
          subtitle="Professionelle Barbier-Dienstleistungen für einen souveränen Auftritt. Klar, präzise, persönlich."
        />

        {/* Mobile: horizontal cards with snap; Desktop: grid */}
        <div className="md:hidden -mx-6 px-6">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SERVICES.map((s, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.05 * i }}
                whileHover={{ y: -4 }}
                className="snap-center shrink-0 w-72"
              >
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(#0b0b0b,#0b0b0b) padding-box, ${GOLD_GRADIENT} border-box`,
                    border: '1px solid transparent',
                  }}
                >
                  <figure className="relative">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={(s as any).image}
                        alt={`${s.title} – ${s.subtitle}`}
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <span
                        className="absolute top-3 right-3 rounded-md px-3 py-1 bg-black text-sm font-semibold text-[#e2c044] shadow"
                        style={{ color: GOLD, border: '1px solid #e2c044' }}
                      >
                        {s.price}
                      </span>
                    </div>
                    <figcaption className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-base font-semibold text-white">{s.title}</h3>
                          <p className="text-sm text-zinc-400">{s.subtitle}</p>
                        </div>
                        <div
                          className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full"
                          style={{
                            background: `linear-gradient(#0a0a0a,#0a0a0a) padding-box, ${GOLD_GRADIENT} border-box`,
                            border: '1px solid transparent',
                          }}
                        >
                          <Scissors className="h-4 w-4 text-gold" />
                        </div>
                      </div>
                      <a
                        href={CONTACT.whatsApp}
                        aria-label={`Termin anfragen – ${s.title}`}
                        className="mt-4 inline-flex items-center justify-center rounded-md border border-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:border-zinc-700"
                      >
                        Termin anfragen
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              whileHover={{ y: -6 }}
            >
              <div
                className="group rounded-2xl overflow-hidden relative"
                style={{
                  background: `linear-gradient(#0b0b0b,#0b0b0b) padding-box, ${GOLD_GRADIENT} border-box`,
                  border: '1px solid transparent',
                }}
              >
                <figure className="relative">
                  <div className="relative h-48 md:h-52">
                    <img
                      src={(s as any).image}
                      alt={`${s.title} – ${s.subtitle}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span
                      className="absolute top-3 right-3 rounded-md px-3 py-1 text-sm font-semibold text-black shadow"
                      style={goldBg}
                    >
                      {s.price}
                    </span>
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-2">
                      <div
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                        style={{
                          background: `linear-gradient(#0a0a0a,#0a0a0a) padding-box, ${GOLD_GRADIENT} border-box`,
                          border: '1px solid transparent',
                        }}
                      >
                        <Scissors className="h-4 w-4 text-gold" />
                      </div>
                      <span className="text-sm text-white/90">{s.title}</span>
                    </div>
                  </div>
                  <figcaption className="p-6">
                    <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-zinc-400">{s.subtitle}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <a
                        href={CONTACT.whatsApp}
                        aria-label={`Termin anfragen – ${s.title}`}
                        className="inline-flex items-center justify-center rounded-md border border-zinc-800 px-4 py-2 text-sm font-semibold text-white hover:border-zinc-700"
                      >
                        Termin anfragen
                      </a>
                      <span className="text-sm text-zinc-400">{SITE.locationShort}</span>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="gallery" ref={ref} className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 space-y-16">
        <SectionHeader
          kicker="Galerie"
          title={
            <>
              <span style={goldText}>Unsere</span> Arbeit
            </>
          }
          subtitle="Einblick in präzise Schnitte, gepflegte Bärte und klare Linien."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="group relative overflow-hidden rounded-xl"
              style={{
                background: `linear-gradient(#0b0b0b,#0b0b0b) padding-box, ${GOLD_GRADIENT} border-box`,
                border: '1px solid transparent',
              }}
            >
              <img
                src={g.src}
                alt={g.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {g.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section id="contact" className="bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <GoldCard>
          <div className="p-10 md:p-14">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                Bereit für Ihren nächsten Look?
              </h2>
              <p className="text-zinc-400 md:text-lg">
                Vereinbaren Sie jetzt unkompliziert einen Termin und erleben Sie moderne Präzision im klassischen Ambiente.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={CONTACT.whatsApp}
                  className="relative inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold text-black"
                  style={goldBg}
                >
                  <Calendar className="h-5 w-5" /> WhatsApp Termin
                </a>
                <a
                  href={CONTACT.telHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-semibold border border-zinc-800 text-white hover:border-zinc-700"
                >
                  <Phone className="h-5 w-5" /> {CONTACT.telDisplay}
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-sm text-zinc-400">
                <div className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" /> {SITE.openingHours}
                </div>
                <div className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" /> {SITE.locationShort}
                </div>
                <div className="inline-flex items-center gap-2">
                  <Star className="h-4 w-4 text-gold" /> {SITE.rating}
                </div>
              </div>
            </div>
          </div>
        </GoldCard>
      </div>
    </section>
  )
}

  // Brand colors (icon only)
  const INSTA = '#E4405F';      // Instagram brand red/magenta
  const TIKTOK_PINK = '#EE1D52';
  const TIKTOK_CYAN = '#69C9D0';



 function SocialSection() {
  // ---- Video config ----
  // Swap to type: 'youtube' and set src to an EMBED url (e.g., https://www.youtube.com/embed/VIDEO_ID)
  // Or keep type: 'file' for an uploaded mp4 + poster thumbnail.
  const VIDEO: { type: 'file' | 'youtube'; src: string; poster?: string } = {
    type: 'file',
    src: '/videos/tiktok_vid.mp4', // ← replace with your file path
    poster: '/video/teaser-poster.jpg', // ← replace with your poster image
    // Example YouTube: type: 'youtube', src: 'https://www.youtube.com/embed/XXXXXX?rel=0'
  }

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <section id="social" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 space-y-12 text-white">
        {/* Header */}
        <SectionHeader
          kicker="Folge uns"
          title={
            <>
              <span style={goldText}>Social</span> & Community
            </>
          }
          subtitle="Blick hinter die Kulissen, frische Styles, Angebote – folge uns auf unseren Kanälen."
        />

        {/* Video Spotlight */}
        <div
          className="relative rounded-2xl border overflow-hidden"
          style={{ borderColor: 'rgba(212,175,55,0.35)' }}
        >
          <div className="relative aspect-video bg-zinc-950">
            {VIDEO.type === 'youtube' ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={VIDEO.src}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="absolute inset-0 h-full w-full object-cover"
                  src={VIDEO.src}
                  poster={VIDEO.poster}
                  playsInline
                  preload="metadata"
                  controls={playing}
                  onEnded={() => setPlaying(false)}
                />

                {/* Center play button */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={playing ? 'Video pausieren' : 'Video abspielen'}
                  className={`absolute inset-0 grid place-items-center transition-opacity ${
                    playing ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <span
                    className="grid place-items-center rounded-full border-2 backdrop-blur-sm px-0"
                    style={{
                      width: '5rem',
                      height: '5rem',
                      borderColor: GOLD,
                      background: 'rgba(0,0,0,0.45)',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8"
                      style={{ color: GOLD }}
                    >
                      <path d="M8 5v14l11-7-11-7z" />
                    </svg>
                  </span>
                </button>
              </>
            )}

            {/* Subtle inner ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1"  />

            {/* Bottom gradient & caption */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 md:p-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] md:text-xs uppercase tracking-wider text-white/60">Video</p>
                  <h3 className="text-base md:text-lg font-semibold"><span style={goldText}>Behind the Scenes</span></h3>
                </div>
                {VIDEO.type === 'file' && (
                  <div className="pb-1 pr-1">
                    <span
                      className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm font-medium border"
                      style={{ borderColor: GOLD, color: GOLD }}
                    >
                      {playing ? 'Wird abgespielt' : 'Jetzt ansehen'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal social cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/issastyle1"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border p-8 md:p-10 min-h-[14rem] flex items-center bg-black transition-transform hover:-translate-y-0.5"
            style={{ borderColor: 'rgba(212,175,55,0.35)' }}
          >
            <div className="flex items-start gap-4 md:gap-5">
              <span
                className="inline-grid h-12 w-12 place-items-center "
                aria-hidden
              >
                <Instagram className="h-6 w-6" color={INSTA} />
              </span>

              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Instagram</p>
                  <p className="text-xl font-semibold">@issastyle1</p>
                </div>

                <p className="max-w-[46ch] text-white/70">
                  Tägliche Cuts, Bart-Transformations und Reels direkt aus dem Studio.
                </p>

                <div className="pt-1">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border hover:text-black"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    Profil ansehen
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@kaylas.haarkunst"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl border p-8 md:p-10 min-h-[14rem] flex items-center bg-black transition-transform hover:-translate-y-0.5"
            style={{ borderColor: 'rgba(212,175,55,0.35)' }}
          >
            <div className="flex items-start gap-4 md:gap-5">
              <span
                className="inline-grid h-12 w-12 place-items-center relative"
                aria-hidden
              >
                {/* tri-color effect for icon only */}
                <Tiktok className="absolute h-6 w-6 translate-x-[1.5px] -translate-y-[1.5px]" color={TIKTOK_CYAN} />
                <Tiktok className="absolute h-6 w-6 -translate-x-[1.5px] translate-y-[1.5px]" color={TIKTOK_PINK} />
                <Tiktok className="relative h-6 w-6 text-white" />
              </span>

              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">TikTok</p>
                  <p className="text-xl font-semibold">@kaylas.haarkunst</p>
                </div>

                <p className="max-w-[46ch] text-white/70">
                  Schnelle Before/After-Clips, Trends und Tutorials im Hochformat.
                </p>

                <div className="pt-1">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors border hover:text-black"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    Kanal öffnen
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}


export default function ProfessionalBarbershopLanding() {
  return (
    <div className="min-h-screen bg-black text-white antialiased relative">
      <BackgroundOrnaments />
      <main>
        <Hero />
        <StatsSection />
        <ServicesSection />
        <GallerySection />
        <CtaSection />
        <SocialSection />
      </main>

    </div>
  )
}

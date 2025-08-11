'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { SITE } from '../lib/site'

const GOLD = '#d4af37'
const GOLD_DARK = '#8c6f1a'
const GOLD_LIGHT = '#f3d98b'
const GOLD_GRADIENT = `linear-gradient(135deg, ${GOLD_DARK} 0%, ${GOLD} 35%, ${GOLD_LIGHT} 60%, ${GOLD} 85%)`

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close menu if viewport becomes desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + '/')

  const LOGO_SRC =
    (SITE as any)?.logo ||
    (SITE as any)?.logoUrl ||
    '/images/hero_small.webp' // <— ändere auf deinen Pfad

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = isActive(href)
    return (
      <Link
        href={href}
        onClick={() => setOpen(false)}
        className={[
          'group relative block py-2 text-sm font-medium transition-colors',
          active ? 'text-white' : 'text-zinc-300 hover:text-white',
        ].join(' ')}
      >
        {children}
        {/* animierte Gold-Underline */}
        <span
          aria-hidden
          className={[
            'absolute left-0 -bottom-2 h-[2px] w-full origin-left',
            'transition-transform duration-300',
            active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
          ].join(' ')}
          style={{ backgroundImage: GOLD_GRADIENT }}
        />
      </Link>
    )
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur supports-[backdrop-filter]:bg-black/45"
    >
      {/* feine Goldlinie oben */}
      <div className="h-[2px] w-full" style={{ backgroundImage: GOLD_GRADIENT }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo + Name */}
          <Link
            href="/"
            className="flex items-center gap-3 text-sm sm:text-base font-semibold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 rounded-md"
            onClick={() => setOpen(false)}
          >
            <span
              className="relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full"
              style={{
                background: `linear-gradient(#0b0b0b,#0b0b0b) padding-box, ${GOLD_GRADIENT} border-box`,
                border: '1px solid transparent',
              }}
            >
              <Image
                src={LOGO_SRC}
                alt={`${SITE.name} Logo`}
                width={50}
                height={50}
                className="rounded-full object-cover"
                priority
              />
            </span>
            <span className="truncate max-w-[50vw] sm:max-w-[60vw]">{SITE.shortName ?? SITE.name}</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavItem href="/services">Services</NavItem>
            <NavItem href="/about">Über uns</NavItem>
            <NavItem href="/contact">Kontakt</NavItem>
            <Link
              href="/appointments"
              className="relative rounded-full px-4 py-2 text-sm font-semibold text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              style={{ backgroundImage: GOLD_GRADIENT }}
            >
              Termin buchen
              {/* dezenter Shine */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                }}
              />
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Menü"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden -mr-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d={open ? 'M6 6l12 12M6 18L18 6' : 'M3 6h18M3 12h18M3 18h18'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sheet */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="bg-black/90 backdrop-blur border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
            <div className="grid gap-1">
              <Link
                href="/services"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              >
                Services
              </Link>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              >
                Über uns
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-3 text-base font-medium text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
              >
                Kontakt
              </Link>
              <Link
                href="/appointments"
                onClick={() => setOpen(false)}
                className="mt-2 relative inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-base font-semibold text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600"
                style={{ backgroundImage: GOLD_GRADIENT }}
              >
                Termin buchen
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      'linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)',
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

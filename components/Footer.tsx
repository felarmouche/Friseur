import Link from 'next/link';
import { SITE, CONTACT } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[color:var(--surface)]/60">
      <div className="container py-12 grid md:grid-cols-3 gap-10 text-sm">
        <div>
          <p className="font-semibold text-gold">{SITE.shortName}</p>
          <p className="mt-2 text-[color:var(--muted)]">{SITE.tagline}</p>
        </div>
        <div>
          <p className="font-semibold mb-2 text-[color:var(--fg)]">Kontakt</p>
          <ul className="space-y-1">
            <li><a className="link" href={CONTACT.telHref}>{CONTACT.telDisplay}</a></li>
            <li><a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><Link className="link" href={SITE.mapHref}>{SITE.address.line}</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2 text-[color:var(--fg)]">Rechtliches</p>
          <ul className="space-y-1">
            <li><Link href="/impressum" className="link">Impressum</Link></li>
            <li><a href={SITE.social.instagram} className="link">Instagram</a></li>
            <li><a href={SITE.social.tiktok} className="link">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[color:var(--muted)]">© {new Date().getFullYear()} {SITE.shortName}</div>
    </footer>
  );
}

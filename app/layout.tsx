import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { clsx } from 'clsx';
import { SITE } from '../lib/site';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kaylashaarkunst.de'),
  title: {
    default: `${SITE.name} – Herrenfriseur in Bremen Horn-Lehe`,
    template: `%s – ${SITE.name}`,
  },
  description: SITE.tagline,
  openGraph: {
    title: `${SITE.name} – Herrenfriseur in Bremen Horn-Lehe`,
    description: SITE.tagline,
    url: 'https://www.kaylashaarkunst.de',
    siteName: SITE.name,
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
    locale: 'de_DE',
    type: 'website',
  },
  alternates: { canonical: 'https://www.kaylashaarkunst.de' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={clsx(inter.variable)}>
      <body className="relative overflow-x-hidden">
        {/* Background effects */}
        <div className="pointer-events-none fixed inset-0 -z-10 aurora animate-aurora" />
        <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 -z-10 h-[28rem] w-[28rem] rounded-full blur-3xl" style={{ opacity: 0.2, background: 'radial-gradient(circle, rgba(212,175,55,0.35), transparent 60%)' }} />

        <Nav />
        <main className="min-h-[65vh]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

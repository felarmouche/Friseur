'use client';

import Link from 'next/link';
import { CONTACT, SITE } from '@/lib/site';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center py-20 sm:py-24 lg:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          
          {/* Linke Spalte: Kontaktinfos */}
          <div className="flex flex-col order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gold">
              Nimm Kontakt mit uns auf
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              Schreib uns per WhatsApp oder E-Mail, ruf an oder komm spontan vorbei. Wir freuen uns auf dich!
            </p>
            
            {/* Kontaktmethoden mit Icons */}
            <div className="space-y-4 sm:space-y-6">
              <a href={CONTACT.whatsApp} className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg hover:bg-gray-800/30 transition-all">
                <div className="bg-green-500 p-2 sm:p-3 rounded-full group-hover:bg-green-600 transition-colors flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">WhatsApp</h3>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-gold transition-colors block">Direkt im Chat erreichen</span>
                </div>
              </a>

              <a href={CONTACT.telHref} className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg hover:bg-gray-800/30 transition-all">
                <div className="bg-gray-700 p-2 sm:p-3 rounded-full group-hover:bg-gold transition-colors flex-shrink-0">
                  <Phone className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">Telefon</h3>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-gold transition-colors block">{CONTACT.telDisplay}</span>
                </div>
              </a>

              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg hover:bg-gray-800/30 transition-all">
                <div className="bg-gray-700 p-2 sm:p-3 rounded-full group-hover:bg-gold transition-colors flex-shrink-0">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">E-Mail</h3>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-gold transition-colors block break-all">{SITE.email}</span>
                </div>
              </a>
              
              <Link href={SITE.mapHref} className="flex items-center gap-3 sm:gap-4 group p-2 sm:p-0 rounded-lg hover:bg-gray-800/30 transition-all">
                <div className="bg-gray-700 p-2 sm:p-3 rounded-full group-hover:bg-gold transition-colors flex-shrink-0">
                  <MapPin className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg">Adresse</h3>
                  <span className="text-sm sm:text-base text-gray-400 group-hover:text-gold transition-colors block">{SITE.address.line}</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: Kontaktformular */}
          <div className="order-1 lg:order-2">
            <form 
              className="bg-gray-800/50 border border-gold/30 rounded-xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6"
              onSubmit={(e) => { e.preventDefault(); alert('Danke! Wir melden uns.'); }}
            >
              <h2 className="text-xl text-gold sm:text-2xl font-semibold mb-2">Schreib uns direkt</h2>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition-all" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-Mail</label>
                <input 
                  id="email"
                  name="email"
                  type="email" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition-all" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Nachricht</label>
                <textarea 
                  id="message"
                  name="message"
                  className="w-full bg-transparent border border-white/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gold/80 focus:border-gold/80 transition-all resize-vertical" 
                  rows={4} 
                  required 
                />
              </div>
              
              <button 
                className="btn btn-accent w-full py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-lg transition-all" 
                type="submit"
              >
                Absenden
              </button>
              
              <p className="text-xs text-gray-500 pt-2 text-center leading-relaxed">
                Für den produktiven Einsatz kann hier ein E-Mail-Service angebunden werden.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
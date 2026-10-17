import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, MapPin, Phone, ExternalLink, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0B1215] text-stone-300 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 -z-10 h-80 w-80 rounded-full bg-emerald-950/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-80 w-80 rounded-full bg-amber-950/30 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-stone-800">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-2xl font-display font-bold text-white tracking-tight"
            >
              <span>Declare Groceries UK</span>
              <span className="h-2 w-2 rounded-full bg-[#84CC16]" />
            </Link>

            <p className="text-sm text-stone-400 max-w-md leading-relaxed">
              Your international neighbourhood hub in Moston, Manchester. Sourcing the
              truest tastes of West Africa, the Caribbean, and Italy. 100% Halal
              butchery and fresh market goods daily.
            </p>

            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>Open 7 days a week · 9:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-display">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#regions" className="hover:text-white transition-colors">
                  Shop by Region (Africa, Caribbean, Italy)
                </a>
              </li>
              <li>
                <a href="/#halal-fresh" className="hover:text-white transition-colors">
                  Halal & Fresh Butchery
                </a>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-display">
              Store Information
            </div>

            <div className="space-y-2 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="hover:text-emerald-400 transition-colors font-mono"
                >
                  {SITE_CONFIG.contact.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 border border-stone-800 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-800 transition-colors"
              >
                <span>Follow @declare.shop on TikTok</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Oversized Wordmark Outline */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <span
            className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl tracking-tighter text-transparent"
            style={{
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.12)',
            }}
          >
            DECLARE
          </span>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {currentYear} Declare Groceries UK. All rights reserved. Manchester,
            United Kingdom.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
          >
            <span>Back to top</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-stone-900 border border-stone-800 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
              <ArrowUp className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

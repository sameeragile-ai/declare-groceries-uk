import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 sm:hidden flex items-center justify-between gap-2 p-1.5 rounded-2xl bg-stone-900/95 backdrop-blur-md border border-stone-800 shadow-2xl">
      {/* Real phone link, min-h-[48px], no-wrap */}
      <a
        href={SITE_CONFIG.contact.phoneTel}
        aria-label={`Call Declare Groceries at ${SITE_CONFIG.contact.phoneFormatted}`}
        className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-xs whitespace-nowrap shadow-sm active:scale-98 transition-transform"
      >
        <Phone className="h-4 w-4 shrink-0" />
        <span>Call Store</span>
      </a>

      {/* WhatsApp chat link, min-h-[48px], no-wrap */}
      <a
        href={SITE_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex-1 inline-flex items-center justify-center gap-2 min-h-[48px] px-3 rounded-xl bg-[#25D366] text-white font-semibold text-xs whitespace-nowrap shadow-sm active:scale-98 transition-transform"
      >
        <MessageCircle className="h-4 w-4 shrink-0" />
        <span>WhatsApp</span>
      </a>

      {/* Map Pin button, 48px touch target */}
      <a
        href={SITE_CONFIG.contact.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Directions in Google Maps"
        className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-xl bg-stone-800 text-stone-300 hover:text-white border border-stone-700 active:scale-98 transition-transform shrink-0"
      >
        <MapPin className="h-4 w-4 shrink-0" />
      </a>
    </div>
  );
};

import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const FloatingMobileBar: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center justify-between gap-2.5 p-2 rounded-2xl bg-stone-900/90 backdrop-blur-xl border border-stone-800 shadow-2xl">
      <a
        href={SITE_CONFIG.contact.phoneTel}
        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold text-xs shadow-sm active:scale-95 transition-transform"
      >
        <Phone className="h-4 w-4" />
        <span>Call Store</span>
      </a>

      <a
        href={SITE_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 h-11 rounded-xl bg-[#25D366] text-white font-semibold text-xs shadow-sm active:scale-95 transition-transform"
      >
        <MessageCircle className="h-4 w-4" />
        <span>WhatsApp</span>
      </a>

      <a
        href={SITE_CONFIG.contact.mapsDirectionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-800 text-stone-300 hover:text-white border border-stone-700 active:scale-95 transition-transform"
        aria-label="Directions in Maps"
      >
        <MapPin className="h-4 w-4" />
      </a>
    </div>
  );
};

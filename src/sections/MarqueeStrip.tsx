import React from 'react';
import { SITE_CONFIG } from '../config/site';

export const MarqueeStrip: React.FC = React.memo(() => {
  // Quadruplicate items to ensure seamless infinite looping on ultra-wide screens
  const row1 = [
    ...SITE_CONFIG.marqueeItemsRow1,
    ...SITE_CONFIG.marqueeItemsRow1,
    ...SITE_CONFIG.marqueeItemsRow1,
    ...SITE_CONFIG.marqueeItemsRow1,
  ];

  const row2 = [
    ...SITE_CONFIG.marqueeItemsRow2,
    ...SITE_CONFIG.marqueeItemsRow2,
    ...SITE_CONFIG.marqueeItemsRow2,
    ...SITE_CONFIG.marqueeItemsRow2,
  ];

  return (
    <section
      id="marquee"
      className="marquee-container py-9 bg-white border-y border-stone-200/80 overflow-hidden relative select-none"
    >
      {/* Side gradient mask for fade-out edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Row 1: Hardware-Accelerated Pure CSS Leftward Marquee */}
      <div className="overflow-hidden py-1">
        <div className="animate-marquee-left flex items-center gap-6">
          {row1.map((item, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-sm sm:text-base font-semibold tracking-wide text-stone-800 font-display">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#84CC16]" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Hardware-Accelerated Pure CSS Rightward Marquee */}
      <div className="overflow-hidden py-1 mt-2">
        <div className="animate-marquee-right flex items-center gap-6">
          {row2.map((item, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-6 shrink-0">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-stone-500 font-sans">
                {item}
              </span>
              <span className="h-1 w-1 rounded-full bg-stone-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const MarqueeStrip: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items for continuous loop
  const row1 = [...SITE_CONFIG.marqueeItemsRow1, ...SITE_CONFIG.marqueeItemsRow1];
  const row2 = [...SITE_CONFIG.marqueeItemsRow2, ...SITE_CONFIG.marqueeItemsRow2];

  return (
    <section
      id="marquee"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="py-10 bg-white border-y border-stone-200/80 overflow-hidden relative"
    >
      {/* Side gradient mask for fade-out edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Row 1: Leftward scroll */}
      <div className="flex overflow-hidden py-1">
        <motion.div
          animate={{ x: isHovered ? ['0%', '-50%'] : ['0%', '-50%'] }}
          transition={{
            duration: isHovered ? 45 : 24,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-6 shrink-0 whitespace-nowrap"
        >
          {row1.map((item, idx) => (
            <div key={`r1-${idx}`} className="flex items-center gap-6">
              <span className="text-sm sm:text-base font-semibold tracking-wide text-stone-800 font-display">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#84CC16]" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward scroll */}
      <div className="flex overflow-hidden py-1 mt-2">
        <motion.div
          animate={{ x: isHovered ? ['-50%', '0%'] : ['-50%', '0%'] }}
          transition={{
            duration: isHovered ? 45 : 26,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex items-center gap-6 shrink-0 whitespace-nowrap"
        >
          {row2.map((item, idx) => (
            <div key={`r2-${idx}`} className="flex items-center gap-6">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-stone-500 font-sans">
                {item}
              </span>
              <Sparkles className="h-3 w-3 text-amber-500/70" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

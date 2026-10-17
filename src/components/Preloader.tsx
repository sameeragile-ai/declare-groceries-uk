import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Only show once per browser session
    const hasLoaded = sessionStorage.getItem('declare_preloader_seen');
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('declare_preloader_seen', 'true');
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  const letters = 'DECLARE'.split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0B1215] text-[#FDFBF7]"
        >
          {/* Subtle gradient backdrop glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(15,118,110,0.25),transparent_70%)] pointer-events-none" />

          {/* Letter reveal */}
          <div className="relative z-10 flex items-center space-x-1 sm:space-x-2">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
              >
                {char}
              </motion.span>
            ))}
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.45, duration: 0.3 }}
              className="inline-block h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#84CC16]"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="relative z-10 mt-3 text-xs sm:text-sm font-medium tracking-widest uppercase text-emerald-400/80 font-sans"
          >
            Moston · Manchester · UK
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

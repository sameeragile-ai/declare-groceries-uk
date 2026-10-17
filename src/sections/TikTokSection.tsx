import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { STORE_IMAGES } from '../assets/images';

export const TikTokSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0F766E] via-[#044E46] to-[#0B1215] p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 -mb-20 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-white/10">
                <Sparkles className="h-3.5 w-3.5" />
                <span>@declare.shop on TikTok</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold leading-tight">
                See What's Fresh On Our Shelves This Week
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/80 max-w-xl leading-relaxed">
                Watch unboxings of fresh international arrivals, imported Italian treats,
                fresh whole fish deliveries, and new kitchen seasonings as soon as they
                arrive in our Manchester store.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={SITE_CONFIG.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="TikTok"
                  className="group relative inline-flex items-center gap-2 rounded-full bg-white text-stone-950 px-6 py-3.5 text-sm sm:text-base font-bold shadow-lg hover:bg-stone-100 transition-all duration-200"
                >
                  <Play className="h-4 w-4 fill-current text-[#0F766E]" />
                  <span>Follow us on TikTok</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="text-xs text-emerald-200/70">
                  New video restocks & grocery tours weekly
                </span>
              </div>
            </div>

            {/* Right Column: Phone Mockup Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.03 }}
                initial={{ rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative w-64 sm:w-72 rounded-[2.5rem] p-3 bg-stone-900 border-4 border-stone-700/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)]"
              >
                {/* Phone Speaker & Camera Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 h-4 w-28 rounded-full bg-black z-20" />

                {/* Screen Content */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[9/16] bg-black">
                  <img
                    src={STORE_IMAGES.italianSnacks}
                    alt="Declare Groceries store video preview on TikTok"
                    className="h-full w-full object-cover opacity-90"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                  {/* TikTok UI Elements */}
                  <div className="absolute top-10 left-4 text-xs font-bold text-white/90">
                    declare.shop
                  </div>

                  <div className="absolute bottom-6 left-4 right-4 text-white space-y-2">
                    <p className="text-xs font-medium leading-snug">
                      Fresh delivery of Pan di Stelle, Gocciole & West African spices in Moston! 🛒✨
                    </p>
                    <div className="text-[10px] text-emerald-300 font-mono">
                      ♫ Original sound - Declare Groceries UK
                    </div>
                  </div>

                  {/* Play Button Overlay */}
                  <a
                    href={SITE_CONFIG.contact.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group/play"
                    aria-label="Open TikTok video"
                  >
                    <div className="h-14 w-14 rounded-full bg-black/60 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover/play:scale-110 transition-transform">
                      <Play className="h-6 w-6 fill-current text-white ml-0.5" />
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

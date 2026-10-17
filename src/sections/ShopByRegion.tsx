import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check, Compass } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { STORE_IMAGES } from '../assets/images';

export const ShopByRegion: React.FC = React.memo(() => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Region image mappings
  const regionImages: Record<string, string> = {
    africa: STORE_IMAGES.produce,
    caribbean: STORE_IMAGES.aisles,
    italy: STORE_IMAGES.italianSnacks,
  };

  return (
    <section id="regions" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Compass className="h-4 w-4" />
            <span>01 · Culinary Heritage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
            Shop by Region
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            Carefully sourced provisions from West & Central Africa, the Caribbean
            islands, and authentic Italian specialty producers. Everything your kitchen
            needs to cook genuine homestyle feasts.
          </p>
        </div>

        {/* 3 Interactive Region Cards */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {SITE_CONFIG.regions.map((region, idx) => {
            const bgImage = regionImages[region.id];

            return (
              <motion.div
                key={region.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onMouseEnter={() => setActiveCard(region.id)}
                onMouseLeave={() => setActiveCard(null)}
                data-cursor="Discover"
                className="group relative flex-none w-[85vw] sm:w-auto snap-center rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with slow zoom on hover */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                  <img
                    src={bgImage}
                    alt={region.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${region.gradient} opacity-80`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Top pill-free tag */}
                  <div className="absolute top-4 left-4 text-xs font-semibold tracking-wider uppercase text-white/90 font-display">
                    {region.tag}
                  </div>

                  {/* Bottom title in image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <span className="text-xs text-emerald-300 font-medium">
                      {region.subtitle}
                    </span>
                    <h3 className="text-2xl font-display font-bold mt-0.5">
                      {region.title}
                    </h3>
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {region.description}
                  </p>

                  {/* Featured Product Highlights */}
                  <div className="pt-4 border-t border-stone-100 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                      Popular on shelves
                    </span>
                    <ul className="space-y-1.5 pt-1">
                      {region.featuredItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-xs text-stone-700"
                        >
                          <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href="#visit-us"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 group-hover:text-emerald-950 transition-colors"
                    >
                      <span>Find in store today</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

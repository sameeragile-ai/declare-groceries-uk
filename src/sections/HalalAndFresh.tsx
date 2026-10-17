import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Fish, Snowflake, Award, PackageCheck } from 'lucide-react';
import { STORE_IMAGES } from '../assets/images';

export const HalalAndFresh: React.FC = React.memo(() => {
  return (
    <section
      id="halal-fresh"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50/80 border-t border-stone-200/70"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Award className="h-4 w-4" />
            <span>02 · Fresh Quality Standards</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
            Halal Meats & Fresh Selections
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-600">
            From ethically certified Halal butchery to daily fresh tilapia, red snapper,
            and hard-to-find international provisions. Handled with pride, freshness,
            and uncompromising cleanliness.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Tile 1: LARGE HERO HIGHLIGHT - Halal Meats & Poultry (Spans 2 cols, 2 rows) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between group"
            data-cursor="Halal Meats"
          >
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-100">
              <img
                src={STORE_IMAGES.halalMeat}
                alt="100% Halal Certified Meats and Butcher Selection at Declare Groceries"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-emerald-950/90 px-3.5 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>100% Halal Certified</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 font-display">
                  Butchery & Poultry
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-900 mt-1">
                  Fresh Halal Beef, Lamb, Goat & Poultry
                </h3>
              </div>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                We prepare clean, traceable cuts daily. Whether you need goat meat diced
                for pepper soup, succulent lamb chops, ribeye cuts, or whole chicken for
                family Sunday dinners, our butchers maintain the highest Halal standards.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-stone-700">
                <span className="bg-stone-100 px-3 py-1 rounded-lg">Fresh Ribeye & T-Bone</span>
                <span className="bg-stone-100 px-3 py-1 rounded-lg">Diced Goat Meat</span>
                <span className="bg-stone-100 px-3 py-1 rounded-lg">Halal Chicken Cuts</span>
                <span className="bg-stone-100 px-3 py-1 rounded-lg">Fresh Daily Prep</span>
              </div>
            </div>
          </motion.div>

          {/* Tile 2: Fresh Tilapia & Seafood */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 lg:col-span-2 relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between group"
            data-cursor="Fresh Fish"
          >
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
              <img
                src={STORE_IMAGES.freshFish}
                alt="Fresh whole tilapia and red snapper on crushed ice"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-cyan-950/90 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-500/30">
                <Fish className="h-3.5 w-3.5" />
                <span>Fresh Seafood</span>
              </div>
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-display font-bold text-stone-900">
                Whole Fresh Tilapia & Red Snapper
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                Chilled fresh seafood ready for grilling, steaming, or frying with
                authentic island seasoning.
              </p>
            </div>
          </motion.div>

          {/* Tile 3: Imported Italian Treats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 lg:col-span-1 relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between group"
            data-cursor="Italian"
          >
            <div className="relative h-44 w-full overflow-hidden bg-stone-100">
              <img
                src={STORE_IMAGES.italianSnacks}
                alt="Pan di Stelle and Italian sweets on shelf"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 text-xs font-semibold text-amber-300 flex items-center gap-1">
                <PackageCheck className="h-3.5 w-3.5" />
                <span>Imported Direct</span>
              </div>
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-display font-bold text-stone-900">
                Italian Sweets & Biscuits
              </h3>
              <p className="text-xs text-stone-600">
                Pan di Stelle, Mulino Bianco, Galatine & Italian continental biscuits.
              </p>
            </div>
          </motion.div>

          {/* Tile 4: Deep Freeze Cultural Staples */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 lg:col-span-1 relative rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between group"
          >
            <div className="p-6 space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-700">
                <Snowflake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-stone-900">
                Deep Freeze Staples
              </h3>
              <p className="text-xs text-stone-600">
                Frozen cassava, plantain, ugwu, bitter leaf, snails, and speciality
                stew cuts preserved at sub-zero peak freshness.
              </p>
            </div>
            <div className="px-6 pb-6 text-xs font-semibold text-sky-800">
              Sub-Zero Chest Freezers
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

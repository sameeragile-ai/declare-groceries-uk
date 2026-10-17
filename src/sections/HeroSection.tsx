import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Star,
  ShieldCheck,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SITE_CONFIG, getStoreStatus } from '../config/site';
import { STORE_IMAGES } from '../assets/images';
import { MagneticButton } from '../components/MagneticButton';

const REGIONS = ['Africa', 'Caribbean', 'Italy'];

export const HeroSection: React.FC = () => {
  const [regionIndex, setRegionIndex] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const storeStatus = getStoreStatus();

  // Rotate region name every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setRegionIndex((prev) => (prev + 1) % REGIONS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Subtle desktop mouse parallax on hero imagery
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20;
    const y = (clientY / height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between"
    >
      {/* Animated soft gradient mesh blobs in background */}
      <div className="absolute top-1/4 left-1/10 -z-10 h-80 w-80 sm:h-96 sm:w-96 rounded-full bg-emerald-200/35 blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute top-1/3 right-1/12 -z-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-amber-200/30 blur-3xl pointer-events-none"
        style={{ animationDuration: '8s' }}
      />
      <div className="absolute bottom-10 left-1/3 -z-10 h-64 w-64 rounded-full bg-lime-200/25 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full">
        {/* Top Eyebrow / Kicker */}
        <div className="flex items-center gap-2 mb-4 text-xs font-semibold tracking-wider uppercase text-emerald-800">
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
          <span>374 Moston Lane · Manchester M40 9JS</span>
          <span className="text-stone-300">·</span>
          <span className="text-stone-500 font-normal normal-case">
            Open daily 9 AM – 9 PM
          </span>
        </div>

        {/* 2-Column Split Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Column 1: Editorial Headline & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-[4.25rem] leading-[0.98] tracking-tight text-[#0B1215]">
              <span className="block">Taste of Home.</span>
              <span className="block text-stone-500 font-medium text-3xl sm:text-5xl lg:text-[3.5rem] mt-2">
                Authentic flavours of
              </span>
              <span className="relative inline-block h-[1.15em] overflow-hidden align-baseline mt-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={REGIONS[regionIndex]}
                    initial={{ y: 50, opacity: 0, rotateX: 60 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: -50, opacity: 0, rotateX: -60 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block text-gradient-emerald font-display font-extrabold"
                  >
                    {REGIONS[regionIndex]}.
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Your premier international grocery destination in Moston, Manchester.
              Specialising in fresh Halal meats, whole seafood, West African
              and Caribbean kitchen essentials, alongside rare, hard-to-find Italian
              delicacies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                as="a"
                href={SITE_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Directions"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0F766E] to-[#16A34A] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-all duration-200 animate-sheen"
              >
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={SITE_CONFIG.contact.phoneTel}
                data-cursor="Call"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 backdrop-blur-sm px-6 py-3.5 text-sm sm:text-base font-semibold text-stone-800 hover:border-emerald-700 hover:text-emerald-800 transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>Call Store ({SITE_CONFIG.contact.phoneFormatted})</span>
              </MagneticButton>
            </div>

            {/* Trust row */}
            <div className="pt-6 border-t border-stone-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-stone-600">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-stone-900">5.0 on Google</span>
                <span className="text-stone-400">· 2 reviews</span>
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="font-medium">100% Halal Meats</span>
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-amber-600" />
                <span className="font-medium">Open till 9 PM Today</span>
              </div>
            </div>
          </div>

          {/* Column 2: Stacked & Fanned Store Photos (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center items-center">
            <motion.div
              style={{
                x: mouseOffset.x,
                y: mouseOffset.y,
              }}
              transition={{ type: 'spring', damping: 30, stiffness: 200 }}
              className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] sm:aspect-[4/4.5]"
            >
              {/* Back fanned card (Italian snacks / pantry) */}
              <motion.div
                initial={{ rotate: -8, scale: 0.95 }}
                animate={{ rotate: -5, scale: 0.98 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white transform -translate-x-3 -translate-y-2 bg-stone-100"
              >
                <img
                  src={STORE_IMAGES.italianSnacks}
                  alt="Imported Italian treats on shelf: Pan di Stelle, Gocciole"
                  className="h-full w-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white text-xs font-medium">
                  Italian Treats & Confectionery
                </div>
              </motion.div>

              {/* Front main card (Storefront / Fresh Produce) */}
              <motion.div
                initial={{ rotate: 2 }}
                animate={{ rotate: 3 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform translate-x-3 translate-y-3 bg-stone-100"
                data-cursor="Explore"
              >
                <img
                  src={STORE_IMAGES.storefront}
                  alt="Declare Groceries UK Storefront at 374 Moston Ln, Manchester"
                  className="h-full w-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300">
                    Moston Lane, Manchester
                  </span>
                  <h3 className="text-xl font-bold font-display mt-0.5">
                    Declare Groceries UK
                  </h3>
                </div>
              </motion.div>

              {/* Floating Glass Chip 1: Google 5.0 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md px-3.5 py-2 shadow-lg border border-stone-200/60"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Star className="h-4 w-4 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-none">
                    5.0 ★ Rating
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Google Local Business
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Chip 2: Halal & Fresh */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-3 z-20 flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md px-3.5 py-2 shadow-lg border border-stone-200/60"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-none">
                    100% Halal Meats
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    Fresh & Frozen Selections
                  </div>
                </div>
              </motion.div>

              {/* Floating Glass Chip 3: Closes 9 PM */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute top-1/2 -right-5 z-20 flex items-center gap-2 rounded-2xl bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-lg border border-stone-200/60"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-lime-50 text-lime-700">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-none">
                    Open till 9 PM
                  </div>
                  <div className="text-[10px] text-stone-500 mt-0.5">
                    {storeStatus.statusText}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-12 text-center flex flex-col items-center">
        <a
          href="#marquee"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-400 hover:text-stone-700 transition-colors"
        >
          <span>Explore shelves & fresh produce</span>
          <span className="animate-bounce">↓</span>
        </a>
      </div>
    </section>
  );
};

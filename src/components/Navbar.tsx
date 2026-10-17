import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Phone, MapPin, ExternalLink, X, Menu } from 'lucide-react';
import { SITE_CONFIG, getStoreStatus } from '../config/site';
import { MagneticButton } from './MagneticButton';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollY, scrollYProgress } = useScroll();
  const location = useLocation();
  const storeStatus = getStoreStatus();

  // FIX 1: Only update isScrolled when boolean actually changes past 20px threshold
  const scrolledRef = useRef(false);
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const shouldBeScrolled = latest > 20;
    if (shouldBeScrolled !== scrolledRef.current) {
      scrolledRef.current = shouldBeScrolled;
      setIsScrolled(shouldBeScrolled);
    }
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Shop by Region', href: '/#regions' },
    { name: 'Halal & Fresh', href: '/#halal-fresh' },
    { name: 'About', href: '/about' },
    { name: 'Visit Us', href: '/#visit-us' },
  ];

  return (
    <>
      {/* FIX 1: Fixed at top at all times, no hide-on-scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-5 sm:pt-6 px-4 sm:px-8'
        }`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-300 ${
            isScrolled
              ? 'rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 sm:px-6 py-2 sm:py-2.5'
              : 'bg-transparent px-2 py-2'
          }`}
        >
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            {/* Zone 1: Single text element wordmark */}
            <Link
              to="/"
              className="group flex items-center gap-1.5 whitespace-nowrap shrink-0 text-xl sm:text-2xl font-bold tracking-tight text-[#0B1215] font-display"
              data-cursor="Home"
            >
              <span>Declare</span>
              <span className="h-2 w-2 rounded-full bg-gradient-to-tr from-[#0F766E] to-[#84CC16] group-hover:scale-125 transition-transform duration-200" />
            </Link>

            {/* Zone 2: 4-5 single-line clean nav links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item, idx) => {
                const isActive =
                  item.href === '/'
                    ? location.pathname === '/' && !location.hash
                    : location.pathname + location.hash === item.href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="relative px-3.5 py-1.5 text-sm font-medium text-stone-700 hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
                  >
                    {item.name}
                    {/* Animated hover/active indicator */}
                    {hoveredIndex === idx && (
                      <motion.div
                        layoutId="navHoverPill"
                        className="absolute inset-0 -z-10 rounded-full bg-stone-100/90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                    {isActive && hoveredIndex === null && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-gradient-to-r from-[#0F766E] to-[#84CC16]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Live Status & Responsive Call Action */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              {/* Live Status indicator */}
              <div
                className="hidden lg:flex items-center gap-2 px-3 py-1 text-xs font-medium text-stone-700 rounded-full bg-stone-100/80 border border-stone-200/60"
                title={`${storeStatus.subText} (374 Moston Ln)`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    storeStatus.isOpen
                      ? 'bg-emerald-500 animate-pulse'
                      : 'bg-amber-500'
                  }`}
                />
                <span className="font-semibold text-stone-900">
                  {storeStatus.statusText}
                </span>
                <span className="text-stone-500 hidden xl:inline">
                  · {storeStatus.subText}
                </span>
              </div>

              {/* FIX 2: Full Call Button on md+, compact 44px round icon on mobile */}
              <div className="hidden md:block">
                <MagneticButton
                  as="a"
                  href={SITE_CONFIG.contact.phoneTel}
                  data-cursor="Call"
                  ariaLabel={`Call Declare Groceries at ${SITE_CONFIG.contact.phoneFormatted}`}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#0F766E] to-[#16A34A] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:shadow-md hover:from-[#0d665f] hover:to-[#15803d] transition-all duration-200 whitespace-nowrap min-h-[44px] animate-sheen"
                >
                  <Phone className="h-3.5 w-3.5 transition-transform group-hover:rotate-12 shrink-0" />
                  <span>Call Store</span>
                </MagneticButton>
              </div>

              {/* Mobile Round 44px Icon Button */}
              <div className="block md:hidden">
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  aria-label={`Call Declare Groceries at ${SITE_CONFIG.contact.phoneFormatted}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-[#0F766E] to-[#16A34A] text-white shadow-sm hover:opacity-95 active:scale-95 transition-all"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              {/* Mobile hamburger menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex h-11 w-11 items-center justify-center rounded-full bg-stone-100 text-stone-900 hover:bg-stone-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-[2px] w-full bg-gradient-to-r from-[#0F766E] via-[#84CC16] to-[#F59E0B] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#FDFBF7] px-6 pt-24 pb-10 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2 mb-2 pb-3 border-b border-stone-200">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    storeStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'
                  }`}
                />
                <span className="text-sm font-semibold text-stone-900">
                  {storeStatus.statusText}
                </span>
                <span className="text-xs text-stone-500">
                  · Closes 9:00 PM today
                </span>
              </div>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.04 + 0.05 }}
                  className="text-2xl font-display font-semibold text-[#0B1215] hover:text-[#0F766E] transition-colors py-1"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-stone-200">
              <div className="flex items-start gap-2.5 text-xs text-stone-600">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-700 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>

              <div className="flex gap-3">
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0F766E] to-[#16A34A] min-h-[48px] px-4 text-sm font-semibold text-white shadow-sm whitespace-nowrap active:scale-98 transition-transform"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span>Call Store</span>
                </a>
                <a
                  href={SITE_CONFIG.contact.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 bg-white min-h-[48px] px-4 text-sm font-medium text-stone-800 whitespace-nowrap"
                >
                  <span>TikTok</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

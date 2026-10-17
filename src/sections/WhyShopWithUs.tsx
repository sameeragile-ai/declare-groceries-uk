import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const WhyShopWithUs: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Authenticity You Can Taste',
      desc: 'No substitutions or generic alternatives. We source direct from certified importers and regional distributors so your home recipes taste exactly as they should.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: '100% Verified Halal Butchery',
      desc: 'All beef, lamb, poultry, and goat meats are strictly Halal certified, cleanly handled, and freshly cut daily for Manchester families.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: '7 Days a Week Convenience',
      desc: 'Open from 9:00 AM until 9:00 PM every single day of the week, ensuring you can grab your evening stew ingredients or weekend groceries at your pace.',
      icon: Clock,
    },
    {
      num: '04',
      title: 'Warm Community Service',
      desc: 'Proudly situated in Moston, North Manchester. Our team is passionate about international cuisine and always happy to help you locate unique items.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Top Header & Stat Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              <span>03 · Why Shoppers Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
              A Cultural Grocery Hub Built on Freshness & Trust
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              We started Declare Groceries UK to bridge the gap in North Manchester—giving
              diaspora families and food lovers easy access to genuine ingredients without
              travelling across three different towns.
            </p>
          </div>

          {/* Animated Editorial Stats Strip */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SITE_CONFIG.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-stone-200 shadow-sm text-center"
              >
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-gradient-emerald tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-stone-900 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-stone-500 mt-0.5 leading-tight">
                  {stat.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Editorial Numbered Cards (01, 02, 03, 04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.num}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 25 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-display font-extrabold text-stone-300 group-hover:text-emerald-700 transition-colors">
                      {item.num}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-display font-bold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                  <span>Guaranteed Fresh</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

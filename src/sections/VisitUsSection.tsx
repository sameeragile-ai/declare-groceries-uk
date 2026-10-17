import React from 'react';
import { motion } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowUpRight,
  Navigation,
  CheckCircle2,
} from 'lucide-react';
import { SITE_CONFIG, getStoreStatus } from '../config/site';
import { MagneticButton } from '../components/MagneticButton';

export const VisitUsSection: React.FC = () => {
  const storeStatus = getStoreStatus();

  const daysOfWeek = [
    { day: 'Monday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Thursday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Friday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Saturday', hours: '9:00 AM – 9:00 PM' },
    { day: 'Sunday', hours: '9:00 AM – 9:00 PM' },
  ];

  // Get current day name in lowercase
  const todayName = new Date().toLocaleDateString('en-GB', { weekday: 'long' });

  return (
    <section id="visit-us" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-50/70 border-t border-stone-200/70">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Navigation className="h-4 w-4" />
            <span>06 · Location & Store Hours</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
            Visit Our Store in Moston
          </h2>
          <p className="mt-2 text-base text-stone-600">
            Conveniently located on Moston Lane with street access and parking
            nearby. Open 7 days a week until 9:00 PM.
          </p>
        </div>

        {/* Split Layout: Google Map Embed + Comprehensive Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-stone-200/90 shadow-md min-h-[380px] lg:min-h-full bg-stone-200 relative">
            <iframe
              title="Declare Groceries UK Google Map Location"
              src={SITE_CONFIG.contact.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Overlay pill for direct map open */}
            <div className="absolute top-4 left-4 z-10">
              <a
                href={SITE_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/95 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-stone-900 shadow-md hover:bg-white transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Right: Info Card & Hours Table (5 cols) */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between space-y-6">
            {/* Live Status Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-stone-100">
              <div className="flex items-center gap-2.5">
                <span
                  className={`h-3 w-3 rounded-full ${
                    storeStatus.isOpen
                      ? 'bg-emerald-500 animate-pulse'
                      : 'bg-amber-500'
                  }`}
                />
                <div>
                  <div className="text-sm font-bold text-stone-900 font-display">
                    {storeStatus.statusText}
                  </div>
                  <div className="text-xs text-stone-500">
                    {storeStatus.subText}
                  </div>
                </div>
              </div>

              <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                7 Days a Week
              </span>
            </div>

            {/* Address & Phone */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mt-0.5">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Store Address
                  </div>
                  <div className="text-sm font-semibold text-stone-900 mt-0.5">
                    {SITE_CONFIG.contact.address}
                  </div>
                  <div className="text-xs text-stone-500">Moston, Manchester</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 mt-0.5">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                    Direct Phone Line
                  </div>
                  <a
                    href={SITE_CONFIG.contact.phoneTel}
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors mt-0.5 block font-display"
                  >
                    {SITE_CONFIG.contact.phoneFormatted}
                  </a>
                  <div className="text-xs text-stone-500">
                    Call for daily stock & butcher enquiries
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-400 mb-3">
                <Clock className="h-3.5 w-3.5" />
                <span>Weekly Schedule</span>
              </div>

              <div className="space-y-1.5 rounded-2xl bg-stone-50/80 p-3.5 border border-stone-200/60 text-xs">
                {daysOfWeek.map((item) => {
                  const isToday =
                    item.day.toLowerCase() === todayName.toLowerCase();

                  return (
                    <div
                      key={item.day}
                      className={`flex items-center justify-between py-1 px-2 rounded-lg ${
                        isToday
                          ? 'bg-white font-semibold text-emerald-950 shadow-xs'
                          : 'text-stone-600'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{item.day}</span>
                        {isToday && (
                          <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">
                            (Today)
                          </span>
                        )}
                      </div>
                      <span className="tabular-nums font-mono text-[11px]">
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direction CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <MagneticButton
                as="a"
                href={SITE_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#16A34A] py-3 text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all text-center"
              >
                <MapPin className="h-4 w-4" />
                <span>Get Directions</span>
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton
                as="a"
                href={SITE_CONFIG.contact.phoneTel}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-stone-300 bg-white py-3 px-5 text-sm font-semibold text-stone-800 hover:border-emerald-700 hover:text-emerald-800 transition-colors text-center"
              >
                <Phone className="h-4 w-4" />
                <span>Call Store</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

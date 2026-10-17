import React from 'react';
import { motion } from 'motion/react';
import { Star, ExternalLink, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const ReviewsSection: React.FC = React.memo(() => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] relative">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <Star className="h-4 w-4 fill-emerald-800" />
              <span>05 · Verified Shopper Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
              Loved by North Manchester
            </h2>
            <p className="mt-2 text-base text-stone-600">
              Honest ratings from our local community on Google. Every visit is backed
              by fresh stock and welcoming service.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-black/5 shadow-[0_2px_12px_rgb(0,0,0,0.03)] shrink-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 font-display font-black text-2xl">
              5.0
            </div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="text-xs text-stone-600 font-medium">
                Google Business Rating ·{' '}
                <span className="font-semibold text-stone-900">2 Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SITE_CONFIG.reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                    <CheckCircle2 className="h-3 w-3" />
                    <span>{rev.source}</span>
                  </span>
                </div>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-stone-900 font-display">
                    {rev.author}
                  </div>
                  <div className="text-xs text-stone-400">{rev.date}</div>
                </div>

                <a
                  href={SITE_CONFIG.contact.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 transition-colors"
                >
                  <span>Google</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Google Reviews */}
        <div className="mt-8 text-center">
          <a
            href={SITE_CONFIG.contact.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 hover:text-emerald-800 transition-colors"
          >
            <MessageSquareQuote className="h-4 w-4 text-emerald-700" />
            <span>Read reviews or leave feedback on Google</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
});

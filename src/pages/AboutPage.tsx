import React from 'react';
import { ShieldCheck, Heart, MapPin, Phone, ArrowUpRight, Compass, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { STORE_IMAGES } from '../assets/images';
import { MagneticButton } from '../components/MagneticButton';

export const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Banner for About */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
            <Compass className="h-4 w-4" />
            <span>Our Roots & Story</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#0B1215] tracking-tight leading-[1.05]">
            Bringing the True Flavours of Home to Moston Lane.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed">
            Declare Groceries UK was founded with a singular conviction: everyone in
            Manchester deserves effortless access to the exact ingredients, spices, and
            delicacies of their heritage—uncompromised, fresh, and warm-heartedly served.
          </p>
        </div>

        {/* Feature Story Image & Text Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-stone-100">
            <img
              src={STORE_IMAGES.aisles}
              alt="Inside Declare Groceries shelves in Moston Manchester"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                374 Moston Lane, Manchester
              </span>
              <h3 className="text-xl font-display font-bold">
                A True Community Crossroad
              </h3>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-stone-900">
              Where Africa, the Caribbean & Italy Meet Under One Roof
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Walking through our doors, you will find authentic Nigerian palm oils and
              Ghanaian yams sitting proudly beside Jamaican ackee, fresh callaloo, hot
              scotch bonnet peppers, and beloved Italian snacks like Pan di Stelle,
              Gocciole, and Galatine milk treats.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We understand that cooking traditional food is not just about calories; it is
              about family memories, comforting aromas, and passing down recipes across
              generations. That is why we never settle for generic supermarket imitations.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                <div className="text-2xl font-bold font-display text-emerald-800">
                  100% Halal
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Ethically sourced meats with full traceability.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-[0_2px_12px_rgb(0,0,0,0.02)]">
                <div className="text-2xl font-bold font-display text-amber-700">
                  7 Days / Week
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Open till 9 PM so you never rush your cooking.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold text-stone-900">
              Our Sourcing Commitments
            </h2>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              How we guarantee the best quality for North Manchester shoppers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900">
                Halal Assurance
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                All beef cuts, lamb, goat meat, and fresh poultry conform strictly to
                authentic Halal standards. Inspected and prepared with clean hygiene.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900">
                Direct Continental Imports
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Speciality Italian biscuits, pasta, and confectionery imported directly,
                providing genuine flavours you cannot find in national chain supermarkets.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-black/5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] space-y-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-50 text-lime-700">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-display font-bold text-stone-900">
                Community Pride
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We are proud Mancunians serving Moston and surrounding areas with a warm
                smile, personalized service, and a welcoming atmosphere every day.
              </p>
            </div>
          </div>
        </div>

        {/* Visit CTA Box */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900 to-stone-900 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-display font-bold">
              Visit Us Today on Moston Lane
            </h3>
            <p className="text-sm text-emerald-200/80">
              374 Moston Ln, Manchester M40 9JS · Open today until 9:00 PM.
            </p>
          </div>

          <div className="flex flex-col min-[480px]:flex-row gap-3 w-full md:w-auto">
            <MagneticButton
              as="a"
              href={SITE_CONFIG.contact.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              ariaLabel="Get Directions in Google Maps"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-stone-950 px-5 py-3 min-h-[48px] text-sm font-bold shadow hover:bg-stone-100 transition-colors whitespace-nowrap"
            >
              <MapPin className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>Get Directions</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </MagneticButton>

            <MagneticButton
              as="a"
              href={SITE_CONFIG.contact.phoneTel}
              ariaLabel={`Call Declare Groceries at ${SITE_CONFIG.contact.phoneFormatted}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 px-5 py-3 min-h-[48px] text-sm font-semibold text-white hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span>Call Store</span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </main>
  );
};

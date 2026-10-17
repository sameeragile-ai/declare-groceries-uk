import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-7xl font-display font-extrabold text-gradient-emerald">
          404
        </div>
        <h1 className="text-3xl font-display font-bold text-stone-900">
          Page Not Found
        </h1>
        <p className="text-sm text-stone-600 leading-relaxed">
          The page you are looking for might have been moved or does not exist. Let's
          get you back to our fresh international groceries.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 text-white px-5 py-3 text-xs sm:text-sm font-semibold shadow hover:bg-emerald-900 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Back to Storefront</span>
          </Link>

          <a
            href={SITE_CONFIG.contact.phoneTel}
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-stone-700 hover:border-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </main>
  );
};

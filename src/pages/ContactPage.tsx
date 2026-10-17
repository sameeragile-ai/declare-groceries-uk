import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';
import { SITE_CONFIG, getStoreStatus } from '../config/site';
import { MagneticButton } from '../components/MagneticButton';

interface FormData {
  name: string;
  phone: string;
  enquiryType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    enquiryType: 'Halal Butchery & Cuts',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const storeStatus = getStoreStatus();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Phone number is too short.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please let us know how we can help you.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitted(true);

    // Format pre-filled WhatsApp message
    const waText = encodeURIComponent(
      `Hello Declare Groceries UK,\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEnquiry: ${formData.enquiryType}\nMessage: ${formData.message}`
    );

    const waLink = `https://wa.me/447402754401?text=${waText}`;

    // Prompt user to open WhatsApp directly
    setTimeout(() => {
      window.open(waLink, '_blank');
    }, 800);
  };

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <Phone className="h-4 w-4" />
            <span>Customer Service & Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-[#0B1215] tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="mt-3 text-base text-stone-600">
            Have a question about today's fresh butcher cuts, fish availability, or
            bulk international grocery orders? Send a message or call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm">
            <h2 className="text-2xl font-display font-bold text-stone-900 mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              Submitting this form connects directly with our Moston store team on
              WhatsApp for instant response.
            </p>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 text-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold">Thank you, {formData.name}!</div>
                    <div className="text-xs text-emerald-700 mt-0.5">
                      Opening WhatsApp to send your enquiry directly to Declare
                      Groceries UK...
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Your Full Name <span className="text-emerald-700">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Amara Okafor"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                      : 'border-stone-300 bg-white focus:border-emerald-600 focus:ring-emerald-600/20'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Phone Number <span className="text-emerald-700">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="e.g. 07402 754401"
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.phone
                      ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                      : 'border-stone-300 bg-white focus:border-emerald-600 focus:ring-emerald-600/20'
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Enquiry Type */}
              <div>
                <label
                  htmlFor="enquiryType"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Topic / Enquiry Type
                </label>
                <select
                  id="enquiryType"
                  value={formData.enquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, enquiryType: e.target.value })
                  }
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all"
                >
                  <option value="Halal Butchery & Cuts">Halal Butchery & Meat Cuts</option>
                  <option value="Fresh Fish & Seafood">Fresh Fish & Seafood</option>
                  <option value="Italian Treats & Snacks">Italian Snacks & Biscuits</option>
                  <option value="African & Caribbean Staples">African & Caribbean Staples</option>
                  <option value="Bulk Family Orders">Bulk Family / Event Orders</option>
                  <option value="General Question">General Store Question</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5"
                >
                  Your Message <span className="text-emerald-700">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us what items you are looking for or any specific cuts you need reserved..."
                  className={`w-full rounded-xl border px-4 py-3 text-sm text-stone-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.message
                      ? 'border-red-400 bg-red-50/30 focus:ring-red-400'
                      : 'border-stone-300 bg-white focus:border-emerald-600 focus:ring-emerald-600/20'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0F766E] to-[#16A34A] py-3.5 text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition-all animate-sheen"
              >
                <Send className="h-4 w-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </form>
          </div>

          {/* Right Info Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5">
              <h3 className="text-lg font-display font-bold text-stone-900">
                Direct Contact Methods
              </h3>

              <div className="space-y-4 text-sm">
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Phone Call
                    </div>
                    <div className="font-bold text-stone-900 mt-0.5">
                      {SITE_CONFIG.contact.phoneFormatted}
                    </div>
                    <div className="text-xs text-stone-500">Tap to call instantly</div>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors group"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      WhatsApp Chat
                    </div>
                    <div className="font-bold text-stone-900 mt-0.5">
                      Instant Messaging
                    </div>
                    <div className="text-xs text-stone-500">Chat with store team</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 rounded-2xl">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
                      Address
                    </div>
                    <div className="font-semibold text-stone-900 mt-0.5">
                      {SITE_CONFIG.contact.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-stone-500">Store Hours:</span>
                <span className="font-semibold text-emerald-800">
                  9:00 AM – 9:00 PM (Daily)
                </span>
              </div>
            </div>

            {/* Embedded Directions Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 text-white shadow-xl space-y-4">
              <h3 className="text-lg font-display font-bold">
                Visiting in Person?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                We are situated right on Moston Lane (M40 9JS), easily accessible by
                car or Manchester bus routes.
              </p>
              <a
                href={SITE_CONFIG.contact.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-stone-900 px-4 py-2.5 text-xs font-bold shadow hover:bg-stone-100 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                <span>Open Google Maps Directions</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Maximize2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../assets/images';
import { Lightbox } from '../components/Lightbox';

export const GallerySection: React.FC = React.memo(() => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const handleOpen = (idx: number) => {
    setActivePhotoIdx(idx);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setActivePhotoIdx((prev) => (prev + 1) % GALLERY_PHOTOS.length);
  };

  const handlePrev = () => {
    setActivePhotoIdx((prev) => (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200/70">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <Camera className="h-4 w-4" />
              <span>04 · Store Photography</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#0B1215] tracking-tight">
              Inside Declare Groceries
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              A real glimpse into our Moston Lane shelves, fresh butcher counters,
              freezer sections, and authentic imported provisions.
            </p>
          </div>

          <div className="text-xs text-stone-400 font-medium">
            Click any photo to enlarge
          </div>
        </div>

        {/* Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => handleOpen(idx)}
              data-cursor="View"
              className={`group relative rounded-3xl overflow-hidden bg-stone-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5 ${photo.span}`}
            >
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay with label & icon */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5" />

                <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="h-4 w-4" />
                </div>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300">
                    {photo.category}
                  </span>
                  <h4 className="text-base font-display font-bold mt-0.5">
                    {photo.caption}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={activePhotoIdx}
        photos={GALLERY_PHOTOS}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
});

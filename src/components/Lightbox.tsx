import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  photos: Array<{ src: string; alt: string; caption: string; category?: string }>;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  photos,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !photos[currentIndex]) return null;

  const currentPhoto = photos[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top bar controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
          <div className="text-sm font-medium text-stone-300">
            {currentIndex + 1} / {photos.length} ·{' '}
            <span className="text-white font-semibold">
              {currentPhoto.category || 'Store View'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Previous button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous Image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next Image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Main Image Container */}
        <div
          className="relative max-h-[85vh] max-w-5xl flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentPhoto.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
          />

          <p className="mt-4 text-center text-sm sm:text-base text-stone-200 font-display">
            {currentPhoto.caption}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

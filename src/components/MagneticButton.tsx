import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  'data-cursor'?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  strength = 0.2,
  onClick,
  as = 'button',
  href,
  target,
  rel,
  'data-cursor': dataCursor,
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isFinePointer, setIsFinePointer] = useState(false);

  // Motion values to avoid React state re-renders during mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.15 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  useEffect(() => {
    // Only enable magnetic pull on fine pointer (mouse/trackpad), never on touch screens
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsFinePointer(fine && !reducedMotion);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isFinePointer || disabled || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    if (!isFinePointer) return;
    x.set(0);
    y.set(0);
  };

  const baseClasses =
    'focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:outline-none transition-shadow';

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isFinePointer ? { x: smoothX, y: smoothY } : undefined}
      className="inline-flex items-center justify-center w-full h-full"
    >
      {children}
    </motion.div>
  );

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        data-cursor={dataCursor}
        aria-label={ariaLabel}
        className={`${baseClasses} ${className}`}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      data-cursor={dataCursor}
      aria-label={ariaLabel}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

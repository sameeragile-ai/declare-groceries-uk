import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Smooth spring physics for trailing ring
  const springConfig = { damping: 25, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(-100, springConfig);
  const smoothY = useSpring(-100, springConfig);

  useEffect(() => {
    // Check touch device or reduced motion
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (hasTouch || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);

      // Check target or parent for data-cursor or interactive tag
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const label = cursorTarget.getAttribute('data-cursor');
        setCursorLabel(label);
        setIsHovered(true);
      } else {
        const interactiveTarget = target.closest(
          'a, button, input, textarea, select, [role="button"]'
        );
        if (interactiveTarget) {
          setIsHovered(true);
          setCursorLabel(null);
        } else {
          setIsHovered(false);
          setCursorLabel(null);
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [smoothX, smoothY]);

  if (!enabled) return null;

  const ringSize = cursorLabel ? 76 : isHovered ? 56 : 38;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Small precision solid dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#0B1215] pointer-events-none"
        style={{
          x: cursorPos.x - 4,
          y: cursorPos.y - 4,
          opacity: cursorPos.x < 0 ? 0 : 1,
        }}
        animate={{
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Trailing spring ring */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none border border-emerald-600/40 bg-emerald-500/5 backdrop-blur-[1px]"
        style={{
          x: smoothX,
          y: smoothY,
          width: ringSize,
          height: ringSize,
          translateX: -ringSize / 2,
          translateY: -ringSize / 2,
          opacity: cursorPos.x < 0 ? 0 : 1,
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered
            ? 'rgba(15, 118, 110, 0.8)'
            : 'rgba(15, 118, 110, 0.35)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 260 }}
      >
        {cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 font-display select-none"
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

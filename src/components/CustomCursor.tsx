import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Directly mutate motion values without React re-renders on mousemove
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing ring
  const springConfig = { damping: 28, stiffness: 240, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Precision dot ref to bypass React render loop completely for dot position
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only mount on devices with fine pointer (mouse/trackpad), not touch screens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    let currentTargetEl: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      // Update motion values for trailing ring (no React re-render)
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Directly update dot transform using translate3d (zero re-render cost)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${clientX - 4}px, ${clientY - 4}px, 0)`;
        if (dotRef.current.style.opacity !== '1') {
          dotRef.current.style.opacity = '1';
        }
      }

      // Check target element only when hovering over something new
      const target = e.target as HTMLElement | null;
      if (target === currentTargetEl) return;
      currentTargetEl = target;

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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  const ringSize = cursorLabel ? 76 : isHovered ? 52 : 36;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision solid dot positioned via direct hardware transform */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-2 w-2 rounded-full bg-[#0B1215] pointer-events-none opacity-0 will-change-transform"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          transition: 'opacity 0.15s ease',
        }}
      />

      {/* Trailing spring ring with hardware-accelerated motion */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none border border-emerald-600/40 bg-emerald-500/5 backdrop-blur-[1px] will-change-transform"
        style={{
          x: smoothX,
          y: smoothY,
          width: ringSize,
          height: ringSize,
          translateX: -ringSize / 2,
          translateY: -ringSize / 2,
        }}
        animate={{
          scale: isClicking ? 0.85 : 1,
          borderColor: isHovered
            ? 'rgba(15, 118, 110, 0.8)'
            : 'rgba(15, 118, 110, 0.35)',
        }}
        transition={{ type: 'spring', damping: 22, stiffness: 280 }}
      >
        {cursorLabel && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-950 font-display select-none">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </div>
  );
};

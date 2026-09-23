import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // -------------------------------------------------------------------------
  // INSTANT POINTER (Dot)
  // -------------------------------------------------------------------------
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // -------------------------------------------------------------------------
  // SMOOTH FOLLOWER (Ring)
  // -------------------------------------------------------------------------
  const smoothX = useSpring(mouseX, { stiffness: 500, damping: 35, mass: 0.3 });
  const smoothY = useSpring(mouseY, { stiffness: 500, damping: 35, mass: 0.3 });

  // -------------------------------------------------------------------------
  // EVENTS
  // -------------------------------------------------------------------------
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"]';

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest(interactiveSelector));
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  // Don't render DOM nodes on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  // -------------------------------------------------------------------------
  // RENDER
  // -------------------------------------------------------------------------
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      
      {/* 1. Smooth Outer Glass Ring */}
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-[2px]"
        style={{
          width: 48,
          height: 48,
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.8 : isHovering ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />

      {/* 2. Instant Inner Glowing Dot */}
      <motion.div
        className="absolute left-0 top-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          width: 6,
          height: 6,
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.5 : isHovering ? 0 : 1, // Hides the dot when hovering over links
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      
    </div>
  );
}
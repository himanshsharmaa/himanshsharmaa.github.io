import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth physics engine
  const springConfig = { stiffness: 230, damping: 24, mass: 0.2 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      // Offset by 160px to center the 320x320 wrapper on the mouse
      mouseX.set(e.clientX - 160);
      mouseY.set(e.clientY - 160);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-80 w-80 mix-blend-difference"
      style={{ x: cursorX, y: cursorY }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* 1. Ambient Glow - Bumped opacity to 15% so you can actually see it! */}
      <motion.div 
        className="absolute inset-0 rounded-full bg-white/15 blur-3xl"
        animate={{ scale: isHovering ? 1.4 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      
      {/* 2. Precision Center Dot - Keeps you perfectly oriented */}
      <motion.div 
        className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}
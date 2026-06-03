import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import PortfolioAssistant from './components/PortfolioAssistant';
import { navLinks } from './data/profile';
import { useActiveSection } from './hooks/useActiveSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsSection from './sections/SkillsSection';
import TimelineSection from './sections/TimelineSection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [cursorState, setCursorState] = useState({ x: 0, y: 0, active: false, scale: 1 });
  const sectionIds = useMemo(
    () => ['intro', ...navLinks.map((link) => link.href.slice(1))],
    [],
  );
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (shouldReduceMotion) {
      return undefined;
    }

    const interactiveSelector = 'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]';

    const handlePointerMove = (event) => {
      const target = event.target instanceof Element ? event.target : null;

      setCursorState({
        x: event.clientX,
        y: event.clientY,
        active: true,
        scale: target?.closest(interactiveSelector) ? 1.4 : 1,
      });
    };

    const handlePointerLeave = () => {
      setCursorState((current) => ({ ...current, active: false }));
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [shouldReduceMotion]);

  const handleNavigate = (event, hash) => {
    event.preventDefault();
    setMobileMenuOpen(false);

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.08),transparent_48%)]" aria-hidden="true" />
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-50 h-80 w-80 rounded-full bg-violet-400/15 blur-3xl mix-blend-screen"
          animate={
            cursorState.active
              ? {
                  opacity: 1,
                  x: cursorState.x - 160,
                  y: cursorState.y - 160,
                  scale: cursorState.scale,
                }
              : { opacity: 0 }
          }
          transition={{ type: 'spring', stiffness: 130, damping: 24, mass: 0.2 }}
        />
      )}
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((value) => !value)}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <TimelineSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterSection />
      <PortfolioAssistant />
    </div>
  );
}
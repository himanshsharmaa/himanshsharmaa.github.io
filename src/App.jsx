import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
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
      <Navbar
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((value) => !value)}
        onNavigate={handleNavigate}
      />

      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
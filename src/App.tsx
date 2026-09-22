import * as THREE from 'three';
import { motion } from 'framer-motion';
import { type MouseEvent, useEffect, useMemo, useState, useRef } from 'react';
import CustomCursor from './components/CustomCursor'; // <-- Added the new sleek cursor
import SpaceLayout from './components/SpaceLayout';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const sectionIds = useMemo(() => ['intro', ...navLinks.map((link) => link.href.slice(1))], []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const starGeo = new THREE.BufferGeometry();
    const starCount = 4000;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 100;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.75,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    const bhGeo = new THREE.SphereGeometry(2.2, 64, 64);
    const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackHole = new THREE.Mesh(bhGeo, bhMat);
    blackHole.position.set(0, 1.5, -9);
    scene.add(blackHole);

    const diskGeo = new THREE.BufferGeometry();
    const diskCount = 3500;
    const diskPos = new Float32Array(diskCount * 3);
    for (let i = 0; i < diskCount; i++) {
      const r = 2.8 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      diskPos[i * 3] = Math.cos(theta) * r;
      diskPos[i * 3 + 1] = (Math.random() - 0.5) * 0.15;
      diskPos[i * 3 + 2] = Math.sin(theta) * r;
    }
    diskGeo.setAttribute('position', new THREE.BufferAttribute(diskPos, 3));
    const diskMat = new THREE.PointsMaterial({
      color: 0xd4d4d8,
      size: 0.045,
      transparent: true,
      opacity: 0.85,
    });
    const accretionDisk = new THREE.Points(diskGeo, diskMat);
    accretionDisk.rotation.x = Math.PI * 0.28;
    blackHole.add(accretionDisk);

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;
    const handleThreeMouseMove = (event: globalThis.MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleThreeMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      stars.rotation.y = elapsedTime * 0.015;
      stars.rotation.x = elapsedTime * 0.008;

      accretionDisk.rotation.z = elapsedTime * 0.12;
      blackHole.position.y = 1.5 + Math.sin(elapsedTime * 0.4) * 0.15;

      camera.position.x += (mouseX * 0.4 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleThreeMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavigate = (event: MouseEvent<HTMLElement>, hash: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent">
      {/* 0. Custom Interactive Cursor */}
      <CustomCursor />

      {/* 1. Static Space Background */}
      <div className="fixed inset-0 w-full h-full -z-40 bg-[url('/space-bg.jpeg')] bg-cover bg-[position:center_center] bg-no-repeat" />

      {/* 2. 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-30 pointer-events-none" />

      {/* 3. DEPTH FILTER: Dark Zinc overlay to separate 3D from foreground content */}
      <div className="fixed inset-0 bg-zinc-950/80 pointer-events-none -z-20" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(9,9,11,0.7)_100%)] pointer-events-none" />

      <div className="relative z-20">
        <SpaceLayout>
          <motion.div
            initial={{ clipPath: 'inset(50% 0 50% 0)' }}
            animate={{ clipPath: 'inset(0% 0 0% 0)' }}
            transition={{ duration: 2.2, ease: [0.77, 0, 0.175, 1], delay: 0.1 }}
            className="relative overflow-hidden"
          >
            <Navbar
              activeSection={activeSection}
              mobileMenuOpen={mobileMenuOpen}
              onToggleMobileMenu={() => setMobileMenuOpen((value) => !value)}
              onNavigate={handleNavigate}
            />

            {/* Main content wrapper - Expanded max-w to match other sections */}
            <main className="relative z-20 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col">
              <HeroSection onNavigate={handleNavigate} />
              <AboutSection />
              <TimelineSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </main>

            <FooterSection />
            <PortfolioAssistant />
          </motion.div>
        </SpaceLayout>
      </div>
    </div>
  );
}
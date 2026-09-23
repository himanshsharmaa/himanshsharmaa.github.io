// src/sections/HeroSection.tsx
import { motion } from 'framer-motion';
import { useEffect, useState, type MouseEvent } from 'react';
import { FiArrowRight, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { heroRoles, socialLinks } from '../data/profile';

const heroParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const heroChildVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: 'blur(10px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function RotatingRoleAnimated({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!roles || roles.length === 0) return;

    const currentRole = roles[roleIndex];
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < currentRole.length) {
            setCharIndex((value) => value + 1);
          } else {
            setDeleting(true);
          }
        } else if (charIndex > 0) {
          setCharIndex((value) => value - 1);
        } else {
          setDeleting(false);
          setRoleIndex((value) => (value + 1) % roles.length);
        }
      },
      deleting ? 45 : charIndex === currentRole.length ? 1600 : 75,
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  if (!roles || roles.length === 0) return null;

  return (
    <span className="inline-flex items-center text-white drop-shadow-xl">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="ml-1 inline-block h-[0.85em] w-[3px] bg-white animate-pulse" aria-hidden="true" />
    </span>
  );
}

interface HeroSectionProps {
  onNavigate: (event: MouseEvent<HTMLElement>, hash: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section
      id="intro"
      className="section-shell pointer-events-none relative flex min-h-screen w-full flex-col items-start justify-center bg-transparent px-4 sm:px-6 py-28 text-left"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroParentVariants}
          className="relative z-10 flex max-w-4xl flex-col items-start text-left mt-16"
        >
          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 font-['Inter'] text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg backdrop-blur-xl transition-all hover:bg-white/5"
          >
            Available for freelance and product collaborations
          </motion.div>

          <motion.h1
            variants={heroChildVariants}
            className="font-['EB_Garamond'] text-5xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white drop-shadow-xl leading-[1.1]"
          >
            <span className="block overflow-hidden pb-1">
              <motion.span
                initial={{ y: '110%', filter: 'blur(8px)' }}
                animate={{ y: '0%', filter: 'blur(0px)' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="block text-white"
              >
                I'm Himansh Sharma, an
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2 min-h-[1.2em]">
              <motion.span
                initial={{ y: '110%', filter: 'blur(8px)' }}
                animate={{ y: '0%', filter: 'blur(0px)' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="block text-white"
              >
                <RotatingRoleAnimated roles={heroRoles} />
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={heroChildVariants}
            className="pointer-events-auto mt-6 max-w-2xl font-['EB_Garamond'] text-lg md:text-xl font-normal tracking-wide text-gray-300 drop-shadow-lg leading-relaxed"
          >
            I build practical digital products with a founder mindset, combining full-stack engineering, AI experimentation, and a careful eye for polished user experience.
          </motion.p>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-8 flex flex-wrap justify-start gap-4"
          >
            <a
              href="#projects"
              onClick={(event) => onNavigate(event, '#projects')}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              View Projects
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-6 py-3.5 font-['Inter'] text-sm font-semibold text-white backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-8 flex flex-wrap items-center justify-start gap-3"
          >
            {socialLinks.map((link) => {
              const iconMap: Record<string, typeof FiLinkedin> = {
                LinkedIn: FiLinkedin,
                GitHub: FiGithub,
                Instagram: FiInstagram,
              };
              const Icon = iconMap[link.label] || FiTwitter;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-gray-300 backdrop-blur-xl shadow-2xl transition-all hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full"
          >
            {[
              ['Full-stack Products', ''],
              ['AI-first Experiments', ''],
              ['Founder Mindset', ''],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="flex flex-col h-full cursor-pointer rounded-2xl border border-white/10 bg-black/40 px-6 py-5 text-left backdrop-blur-xl shadow-2xl transition-all hover:bg-white/5 hover:border-white/20"
              >
                <p className="font-['Inter'] text-sm font-semibold text-white drop-shadow-lg flex-grow">{title}</p>
                {subtitle && (
                  <p className="mt-2 font-['Inter'] text-xs uppercase tracking-[0.24em] text-gray-400 drop-shadow-lg">
                    {subtitle}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
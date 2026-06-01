import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { heroRoles, socialLinks } from '../data/profile';

function RotatingRole() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className="text-violet-300">Full-Stack Developer</span>;
  }

  return <RotatingRoleAnimated roles={heroRoles} />;
}

function RotatingRoleAnimated({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
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
      deleting ? 70 : charIndex === currentRole.length ? 1400 : 95,
    );

    return () => window.clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <span className="inline-flex items-center border-b border-violet-400/30 pb-1 text-violet-300">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-violet-200" aria-hidden="true" />
    </span>
  );
}

export default function HeroSection({ onNavigate }) {
  return (
    <section id="intro" className="section-shell relative overflow-hidden pt-28 sm:pt-32">
      <div className="grid-noise absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow hero-glow-right" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-violet-100"
          >
            Available for freelance and product collaborations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            I&apos;m Himansh Sharma, a <span className="block text-violet-300"><RotatingRole /></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            I build practical digital products with a founder mindset, combining full-stack engineering,
            AI experimentation, and a careful eye for polished user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(event) => onNavigate(event, '#projects')}
              className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              View Projects
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-violet-500/10"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {socialLinks.map((link) => {
              const icon =
                link.label === 'LinkedIn'
                  ? FiLinkedin
                  : link.label === 'GitHub'
                    ? FiGithub
                    : link.label === 'Instagram'
                      ? FiInstagram
                      : FiTwitter;

              const Icon = icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-10 rounded-[2.5rem] bg-violet-500/15 blur-3xl" aria-hidden="true" />
          <div className="glass-card glow-ring relative overflow-hidden rounded-[2.5rem] p-6 sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_45%)]" aria-hidden="true" />
            <img
              src="/images/undraw/undraw_software_engineer_lvl5.svg"
              alt="Software engineer illustration"
              className="relative z-10 mx-auto w-full max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            />
            <div className="relative z-10 mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ['Full-stack', 'Products'],
                ['AI-first', 'Experiments'],
                ['Founder', 'Mindset'],
              ].map(([title, subtitle]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-center">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-500">{subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
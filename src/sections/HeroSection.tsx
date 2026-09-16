import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowRight, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { heroRoles, socialLinks } from '../data/profile';

const heroParentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const heroChildVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: 'blur(12px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.1,
    },
  },
};

function RotatingRole() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        Full-Stack Developer
      </span>
    );
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
    <span className="inline-flex items-center border-b border-white/20 pb-1 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] bg-white" aria-hidden="true" />
    </span>
  );
}

export default function HeroSection({ onNavigate }) {
  return (
    <section id="intro" className="section-shell pointer-events-none relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full bg-gradient-to-r from-black/90 via-black/40 to-transparent lg:w-1/2" aria-hidden="true" />
      <div className="hero-glow pointer-events-none" aria-hidden="true" />
      <div className="hero-glow hero-glow-right pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1600px] w-full mx-auto px-8 py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroParentVariants}
          className="relative z-10 flex flex-col items-start text-left max-w-2xl mr-auto mt-32"
        >
          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-200"
          >
            Available for freelance and product collaborations
          </motion.div>

          <motion.h1
            variants={heroChildVariants}
            className="max-w-2xl font-['Space_Grotesk'] text-4xl font-light leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl"
          >
            I&apos;m Himansh Sharma, a{' '}
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text font-extralight text-transparent drop-shadow-2xl">
              <RotatingRole />
            </span>
          </motion.h1>

          <motion.p
            variants={heroChildVariants}
            className="pointer-events-auto mt-6 max-w-2xl font-['Outfit'] font-light tracking-wide text-gray-300 drop-shadow-md sm:text-lg sm:leading-8"
          >
            I build practical digital products with a founder mindset, combining full-stack engineering,
            AI experimentation, and a careful eye for polished user experience.
          </motion.p>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              onClick={(event) => onNavigate(event, '#projects')}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
            >
              View Projects
              <FiArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-gray-300 transition-all hover:border-white/30 hover:text-white"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3"
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
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </motion.div>

          <motion.div
            variants={heroChildVariants}
            className="pointer-events-auto mt-10 grid gap-3 sm:grid-cols-3"
          >
            {[
              ['Full-stack', 'Products'],
              ['AI-first', 'Experiments'],
              ['Founder', 'Mindset'],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="cursor-pointer rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-center backdrop-blur-md transition-all hover:bg-white/10"
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-gray-300">{subtitle}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import type { MouseEvent } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/profile';

interface NavbarProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (event: MouseEvent<HTMLElement>, hash: string) => void;
}

export default function Navbar({
  activeSection,
  mobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
}: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#intro"
          onClick={(event) => onNavigate(event, '#intro')}
          className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/[0.05] text-gray-200 shadow-[0_0_40px_rgba(255,255,255,0.12)] transition group-hover:border-white/30 group-hover:bg-white/10">
            HS
          </span>
          <span className="hidden text-slate-200 sm:inline">HIMANSH SHARMA</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2 backdrop-blur-md lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => onNavigate(event, link.href)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/20"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={onToggleMobileMenu}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-gray-300 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-2 rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavigate(event, link.href)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-white/10 text-white ring-1 ring-white/20' : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
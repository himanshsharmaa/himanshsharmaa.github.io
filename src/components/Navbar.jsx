import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { navLinks } from '../data/profile';

export default function Navbar({ activeSection, mobileMenuOpen, onToggleMobileMenu, onNavigate }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0f0f12]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#intro"
          onClick={(event) => onNavigate(event, '#intro')}
          className="group inline-flex items-center gap-3 text-sm font-bold tracking-[0.28em] text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-violet-200 shadow-[0_0_40px_rgba(168,85,247,0.18)] transition group-hover:border-violet-400/50 group-hover:bg-violet-500/15">
            HS
          </span>
          <span className="hidden text-slate-200 sm:inline">HIMANSH SHARMA</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/5 bg-white/5 px-2 py-2 lg:flex">
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
                    className="absolute inset-0 rounded-full bg-violet-500/15 ring-1 ring-violet-400/20"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-violet-400/35 hover:bg-violet-500/10 lg:hidden"
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
        className="overflow-hidden border-t border-white/5 bg-[#0f0f12]/95 backdrop-blur-xl lg:hidden"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="grid gap-2 rounded-3xl border border-white/5 bg-white/5 p-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => onNavigate(event, link.href)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    isActive ? 'bg-violet-500/15 text-white ring-1 ring-violet-400/20' : 'text-slate-300 hover:bg-white/5 hover:text-white'
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
import { FiArrowUp, FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function FooterSection() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm text-slate-400">
            Designed & built by <a href="https://www.linkedin.com/in/himanshsharmaa" className="font-semibold text-violet-300 transition hover:text-violet-200">Himansh Sharma</a>
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-slate-600">Same portfolio, rebuilt professionally.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {[
            ['LinkedIn', 'https://www.linkedin.com/in/himanshsharmaa', FiLinkedin],
            ['GitHub', 'https://github.com/himanshsharmaa', FiGithub],
            ['Instagram', 'https://www.instagram.com/himanshsharmaa', FiInstagram],
            ['X', 'https://x.com/himanshsharmaa_', FiTwitter],
          ].map(([label, href, Icon]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-slate-300 transition hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}

          <a
            href="#intro"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-4 text-sm font-semibold text-slate-200 transition hover:border-violet-400/25 hover:bg-violet-500/10 hover:text-white"
          >
            Back to top
            <FiArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
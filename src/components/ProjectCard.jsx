import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.04] shadow-[0_22px_80px_rgba(0,0,0,0.22)] transition"
    >
      <div className="relative overflow-hidden border-b border-white/5 bg-slate-950/50">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-[1.03] sm:h-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent opacity-90" />
      </div>

      <div className="space-y-5 p-6 sm:p-7">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-white">{project.title}</h3>
            <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200">
              {project.subtitle}
            </span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">Problem</p>
          <p className="text-sm leading-7 text-slate-400">{project.problem}</p>
        </div>

        <p className="text-base leading-7 text-slate-300">{project.description}</p>

        <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">Impact</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Live Demo
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-400">
              Live Demo coming soon
            </span>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-violet-500/10"
          >
            GitHub
            <FiGithub className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
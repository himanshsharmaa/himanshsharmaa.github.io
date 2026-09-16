import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  liveUrl?: string;
  githubUrl?: string;
  subtitle: string;
  problem: string;
  impact: string;
  stack: string[];
  image: string;
  demoUrl?: string | null;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const technologies = project.tech ?? project.stack;
  const liveUrl = project.liveUrl ?? project.demoUrl;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      transition={{ duration: 1.4, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] bg-white/5 text-center backdrop-blur-md border border-white/10 shadow-[0_22px_80px_rgba(0,0,0,0.22)] transition"
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
          <div className="flex flex-wrap items-center justify-center gap-3">
            <h3 className="font-[Space_Grotesk] text-4xl font-light tracking-tight text-white drop-shadow-lg md:text-5xl">{project.title}</h3>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-gray-300">
              {project.subtitle}
            </span>
          </div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">Problem</p>
          <p className="text-sm leading-7 text-slate-400 drop-shadow-md">{project.problem}</p>
        </div>

        <p className="text-base leading-7 text-slate-300 drop-shadow-md">{project.description}</p>

        <div className="rounded-2xl border border-white/5 bg-black/20 p-4">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-slate-500">Impact</p>
          <p className="mt-2 text-sm leading-7 text-slate-300 drop-shadow-md">{project.impact}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {technologies.map((tech: string, index: number) => (
            <span key={`${tech}-${index}`} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Live Demo
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-400">
              Live Demo coming soon
            </span>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
            >
              GitHub
              <FiGithub className="h-4 w-4" />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
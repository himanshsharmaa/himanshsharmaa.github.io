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
      className="group flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25 overflow-hidden text-left"
    >
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-36 md:h-44 w-full object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex-grow flex flex-col p-6 space-y-4">
        <div>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1 block">
            {project.subtitle}
          </span>
          <h3 className="font-['EB_Garamond'] tracking-tight text-3xl font-medium text-white drop-shadow-xl">{project.title}</h3>
        </div>

        <div className="space-y-3 flex-grow font-['Inter'] text-sm text-gray-300 leading-relaxed">
          <p><span className="text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5">Problem</span>{project.problem}</p>
          <p><span className="text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5">Solution</span>{project.description || project.problem}</p>
          <p><span className="text-xs font-bold text-gray-100 uppercase tracking-wider block mb-0.5">Impact</span>{project.impact}</p>
        </div>

        <div className="flex flex-wrap items-center justify-start gap-1.5 pt-2">
          {technologies.map((tech: string, i: number) => (
            <span key={`${tech}-${i}`} className="font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300 transition-all">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-2">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-gray-300 transition-colors">
              Live Demo <FiArrowUpRight className="h-3 w-3" />
            </a>
          ) : (
            <span className="font-['Inter'] text-xs font-semibold text-gray-500">Demo coming soon</span>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="font-['Inter'] inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors">
              GitHub <FiGithub className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
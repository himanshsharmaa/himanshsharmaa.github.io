import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <SectionHeading eyebrow="Projects" title="Selected projects" description="Each project outlines the problem, solution, and outcome to show practical thinking and execution." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </motion.div>
    </section>
  );
}
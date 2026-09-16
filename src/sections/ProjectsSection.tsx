import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }} viewport={{ once: true, margin: '-15% 0px -15% 0px' }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }} className="max-w-[1600px] w-full mx-auto px-8 py-24">
        <SectionHeading eyebrow="Projects" title="Selected projects" description="Each project outlines the problem, solution, and outcome to show practical thinking and execution." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20vw] gap-y-16 w-full">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </motion.div>
    </section>
  );
}
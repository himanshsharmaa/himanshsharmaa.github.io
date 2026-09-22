import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const stackVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col items-start justify-center bg-transparent py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15% 0px -15% 0px' }} variants={stackVariants} className="w-full bg-transparent py-24">
        <SectionHeading eyebrow="PROJECTS" title="Selected projects" description="Each project outlines the problem, solution, and outcome to show practical thinking and execution." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </motion.div>
    </section>
  );
}
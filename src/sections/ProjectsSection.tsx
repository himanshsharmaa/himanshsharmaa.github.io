import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { motion } from 'framer-motion';

const stackVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.14 } } };

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15% 0px -15% 0px' }} variants={stackVariants} className="max-w-[1600px] w-full mx-auto px-8 py-24">
        <SectionHeading eyebrow="Projects" title="Selected projects" description="Each project outlines the problem, solution, and outcome to show practical thinking and execution." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20vw] gap-y-16 w-full">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </motion.div>
    </section>
  );
}
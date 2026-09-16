import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: 'easeOut' } },
};

const stackVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={stackVariants} className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <SectionHeading eyebrow="Skills" title="Core skills and tools" description="Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={revealVariants} whileHover={{ y: -4 }} className="glass-card rounded-[1.75rem] border border-white/10 bg-black/30 p-6 text-center backdrop-blur-md">
              <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.3em] text-gray-400 md:text-xs">{group.title}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {group.items.map((item) => <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 font-['Outfit'] text-sm font-light text-gray-300">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
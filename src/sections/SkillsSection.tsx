import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

const revealVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 } },
};

const stackVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15% 0px -15% 0px' }} variants={stackVariants} className="max-w-[1600px] w-full mx-auto px-8 py-24">
        <SectionHeading eyebrow="Skills" title="Core skills and tools" description="Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20vw] gap-y-16 w-full">
          {skillGroups.map((group, index) => (
            <motion.div key={group.title} variants={revealVariants} whileHover={{ y: -4 }} className={`glass-card rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md ${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
              <p className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-md md:text-xs">{group.title}</p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {group.items.map((item) => <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 font-['Outfit'] text-sm font-light text-gray-300 drop-shadow-md">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
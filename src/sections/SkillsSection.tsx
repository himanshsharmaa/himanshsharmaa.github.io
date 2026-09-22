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
    <section id="skills" className="w-full flex flex-col items-center justify-center bg-transparent py-20 text-center">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15% 0px -15% 0px' }} variants={stackVariants} className="w-full bg-transparent py-24">
        <SectionHeading eyebrow="SKILLS" title="Core skills and tools" description="Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full text-left">
          {skillGroups.map((group) => (
            <motion.div key={group.title} variants={revealVariants} whileHover={{ y: -4 }} className="flex flex-col h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl transition-all hover:bg-white/5 p-6 md:p-8 text-left">
              <p className="font-['Inter'] text-[10px] uppercase tracking-[0.3em] text-gray-300 drop-shadow-lg md:text-xs">{group.title}</p>
              <div className="mt-4 flex-grow flex flex-wrap gap-2 items-center justify-start">
                {group.items.map((item) => <span key={item} className="font-['Inter'] rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-light text-gray-300 drop-shadow-lg transition-all hover:bg-white/10">{item}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { timelineTabs } from '../data/timeline';

const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const stackVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState(timelineTabs[0].id);
  const currentTab = useMemo(() => timelineTabs.find((tab) => tab.id === activeTab) ?? timelineTabs[0], [activeTab]);

  return (
    <section id="experience" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={stackVariants}
        className="max-w-5xl w-full mx-auto flex flex-col items-center"
      >
        <SectionHeading eyebrow="Experience" title="Work, education, and certifications" description="A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach." />

        <motion.div variants={revealVariants} className="flex w-full max-w-3xl flex-wrap items-center justify-center gap-2 rounded-full border border-white/6 bg-white/5 p-2">
          {timelineTabs.map((tab) => (
            <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${tab.id === activeTab ? 'bg-white/10 text-white' : 'text-gray-300 hover:bg-white/10 hover:text-white'}`}>
              {tab.label}
            </button>
          ))}
        </motion.div>

        <div className="mt-10 flex w-full max-w-3xl flex-col gap-8">
          <AnimatePresence mode="wait">
            <motion.div key={currentTab.id} initial="hidden" animate="visible" variants={stackVariants} className="flex flex-col gap-8">
              {currentTab.items.map((item) => (
                <motion.article key={`${currentTab.id}-${item.year}-${item.title}`} variants={revealVariants} className="relative rounded-[1.75rem] border border-white/10 bg-black/30 p-5 text-center backdrop-blur-md sm:p-6">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-gray-300">{item.year}</span>
                    <div><h3 className="font-['Space_Grotesk'] text-2xl font-light tracking-tight text-white">{item.title}</h3><p className="text-sm text-gray-400">{item.company}</p></div>
                  </div>
                  <p className="mx-auto mt-4 max-w-2xl font-['Outfit'] text-base font-light leading-7 text-gray-300">{item.description}</p>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
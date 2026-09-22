import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { timelineTabs } from '../data/timeline';

const revealVariants = {
  hidden: { opacity: 0, x: -20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
    <section id="experience" className="w-full flex flex-col items-center justify-center bg-transparent py-20">
      {/* Expanded the container wrapper to max-w-6xl to match other sections */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        
        <SectionHeading 
          eyebrow="EXPERIENCE" 
          title="Work, education, and certifications" 
          description="A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach." 
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 mx-auto flex w-fit flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-950/85 p-1.5 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)]"
        >
          {timelineTabs.map((tab) => (
            <button 
              key={tab.id} 
              type="button" 
              onClick={() => setActiveTab(tab.id)} 
              className={`font-['Inter'] rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 ${
                tab.id === activeTab 
                  ? 'bg-white text-black shadow-md' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Expanded the timeline track width to max-w-5xl to reduce scroll height */}
        <div className="mt-12 w-full max-w-5xl mx-auto pl-2 sm:pl-0">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTab.id} 
              initial="hidden" 
              animate="visible" 
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              variants={stackVariants} 
              className="flex flex-col gap-8 border-l border-white/15 ml-2 md:ml-4"
            >
              {currentTab.items.map((item, index) => (
                <motion.article 
                  key={`${currentTab.id}-${item.year}-${item.title}-${index}`} 
                  variants={revealVariants} 
                  className="relative pl-6 md:pl-10 group"
                >
                  <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-gray-500 ring-4 ring-[#09090b] group-hover:bg-white transition-colors duration-300" />
                  
                  <div className="flex flex-col h-full w-full rounded-2xl border border-white/10 bg-zinc-950/85 p-5 md:p-7 text-left backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/25">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3">
                      <span className="font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        {item.year}
                      </span>
                      <span className="font-['Inter'] text-[11px] font-medium text-gray-300">
                        {item.company}
                      </span>
                    </div>
                    
                    <h3 className="font-['EB_Garamond'] tracking-tight text-2xl font-medium text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <p className="font-['Inter'] text-sm leading-relaxed text-gray-300 flex-grow">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
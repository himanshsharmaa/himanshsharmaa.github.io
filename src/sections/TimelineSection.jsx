import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { timelineTabs } from '../data/timeline';

export default function TimelineSection() {
  const [activeTab, setActiveTab] = useState(timelineTabs[0].id);

  const currentTab = useMemo(
    () => timelineTabs.find((tab) => tab.id === activeTab) ?? timelineTabs[0],
    [activeTab],
  );

  return (
    <section id="experience" className="section-shell relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Work, education, and certifications"
          description="A concise timeline of hands-on roles, academic milestones, and certifications that shaped my product and engineering approach."
        />

        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 rounded-full border border-white/6 bg-white/5 p-2">
          {timelineTabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-violet-500 text-white shadow-[0_12px_40px_rgba(168,85,247,0.2)]' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative pl-8 sm:pl-12"
            >
              <div className="timeline-line absolute left-2 top-1 h-full w-[2px] rounded-full sm:left-4" aria-hidden="true" />

              <div className="space-y-6 sm:space-y-7">
                {currentTab.items.map((item) => (
                  <motion.article
                    key={`${currentTab.id}-${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.45 }}
                    className="relative rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-5 sm:p-6"
                  >
                    <span className="absolute left-[-1.55rem] top-6 h-4 w-4 rounded-full border-4 border-[#0f0f12] bg-violet-400 shadow-[0_0_0_6px_rgba(168,85,247,0.16)] sm:left-[-1.8rem]" aria-hidden="true" />
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-bold tracking-[0.24em] text-violet-200">
                        {item.year}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">{item.title}</h3>
                        <p className="text-sm text-violet-200/85">{item.company}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skillGroups } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Core skills and tools"
          description="Frontend, backend, databases, AI/ML, and developer tooling used across production and experimental projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-[1.75rem] p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300/85">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-violet-400/25 hover:bg-violet-500/10">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
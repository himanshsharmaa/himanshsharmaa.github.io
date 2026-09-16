import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiZap } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { aboutStats } from '../data/profile';

const achievements = [
  {
    icon: FiStar,
    title: 'Founded Keplor',
    text: 'Leading innovative software solutions with a product-first mindset.',
  },
  {
    icon: FiZap,
    title: 'Built Examify',
    text: 'An online examination portal with classroom-style workflows.',
  },
  {
    icon: FiStar,
    title: 'AI Projects',
    text: 'Working across CNN, NLP, RAG, and voice-driven systems.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center py-20 px-6">
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <SectionHeading
          eyebrow="About"
          title="Full-Stack & AI Developer building practical digital products"
          description="Builder mindset, AI curiosity, and a strong focus on practical products that are reliable, fast, and easy to use."
        />

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="glass-card w-full rounded-[2rem] border border-white/10 bg-black/30 p-6 text-center backdrop-blur-md sm:p-8"
        >
          <div className="flex flex-col items-center gap-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-gray-400">Developer mindset</p>
              <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                I like building tools that solve specific problems, then shaping them until they feel simple,
                fast, and trustworthy. My work spans frontend, backend, and AI experiments, but the common thread
                is the same: practical products with strong identity.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
                  <p className="text-3xl font-black tracking-tight text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20">
                <FiZap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Tech Stack</h3>
                <p className="text-sm text-slate-400">Core technologies I use to design, build, and ship products.</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {[
                ['Frontend', ['React', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']],
                ['Backend', ['Python', 'Node.js', 'PHP', 'Express.js', 'REST APIs']],
                ['Databases', ['MySQL', 'MongoDB', 'SQLite']],
                ['AI / ML', ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'CNN', 'NLP']],
                ['Tools', ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Linux']],
              ].map(([title, items]) => (
                <div key={title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gray-400">{title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:border-white/30 hover:bg-white/10">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
                <a
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold text-white">Key Achievements</h3>
            <div className="mt-6 space-y-4">
              {achievements.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-white/8 bg-black/15 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gray-200 ring-1 ring-white/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      <p className="mt-1 text-sm leading-7 text-slate-400">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { FiDownload, FiStar, FiZap } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';
import { aboutStats } from '../data/profile';

const achievements = [
  { icon: FiStar, title: 'Founded Keplor: Leading innovative software solutions with a product-first mindset.', text: '' },
  { icon: FiZap, title: 'Built Examify: An online examination portal with classroom-style workflows.', text: '' },
  { icon: FiStar, title: 'AI Projects & Internships: Working across CNN, NLP, RAG, and voice-driven systems, including roles at ASTRA AI and IBM.', text: '' },
];

const techStack: Array<[string, string[]]> = [
  ['Frontend', ['React', 'Tailwind CSS', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'jQuery']],
  ['Backend', ['Python', 'Node.js', 'PHP', 'Express.js', 'REST APIs']],
  ['Databases', ['MySQL', 'MongoDB', 'SQLite']],
  ['AI / ML', ['TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'Pandas', 'Scikit-learn', 'CNN', 'NLP', 'Computer Vision', 'YOLOv8', 'RAG', 'LLMs']],
  ['Tools', ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Linux', 'JSON', 'AWS', 'IBM Cloud']],
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full flex flex-col items-center justify-center bg-transparent py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start">
        
        <SectionHeading
          eyebrow="About"
          title="Full-Stack & AI Developer building practical digital products"
          description="Builder mindset, AI curiosity, and a strong focus on practical products that are reliable, fast, and easy to use."
        />

        <div className="mt-12 w-full flex flex-col gap-8">
          
          {/* TOP ROW: Wide Developer Mindset & Stats Box */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-10"
          >
            <div className="mb-8">
              <p className="font-['Inter'] text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 drop-shadow-lg">Developer mindset</p>
              <p className="font-['Inter'] mt-4 text-base leading-relaxed text-gray-300 drop-shadow-lg max-w-4xl">
                I like building tools that solve specific problems, then shaping them until they feel simple, fast, and trustworthy. My work spans frontend, backend, and AI experiments—deploying ML pipelines, optimizing YOLOv8 models, integrating LLMs, and crafting high-retention media. The common thread is the same: practical products with strong identity.
              </p>
            </div>

            <div className="grid w-full gap-4 sm:grid-cols-3 pt-8 border-t border-white/10">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-left">
                  <p className="font-['EB_Garamond'] text-3xl font-medium text-white">{stat.value}</p>
                  <p className="font-['Inter'] mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM ROW: 50/50 Grid for Tech Stack & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full items-stretch">
            
            {/* Left: Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200">
                  <FiZap className="h-4 w-4" />
                </div>
                <h3 className="font-['EB_Garamond'] text-2xl font-medium text-white">Tech Stack</h3>
              </div>

              <div className="flex-grow space-y-6">
                {techStack.map(([title, items]) => (
                  <div key={title}>
                    <p className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-gray-400">{title}</p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {items.map((item: string, index: number) => (
                        <span key={`${title}-${item}-${index}`} className="font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-['Inter'] inline-flex w-full justify-center items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/20"
                >
                  <FiDownload className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>

            {/* Right: Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col h-full bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8"
            >
              <h3 className="font-['EB_Garamond'] text-2xl font-medium text-white mb-6">Key Achievements</h3>
              <div className="space-y-4 flex-grow">
                {achievements.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex flex-row bg-white/5 border border-white/10 rounded-xl p-5 gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/10 text-gray-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex items-center">
                        <h4 className="font-['Inter'] text-sm font-medium text-gray-200 leading-relaxed">{item.title}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
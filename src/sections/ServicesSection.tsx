import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiMonitor, FiVideo } from 'react-icons/fi';
import SectionHeading from '../components/SectionHeading';

const services = [
  {
    title: 'AI & Computer Vision Models',
    description: 'End-to-end machine learning integrations. From real-time object detection pipelines to deep natural language processing and RAG systems.',
    features: ['YOLOv8', 'DistilBERT', 'LLMs', 'OpenCV'],
    icon: FiCpu,
  },
  {
    title: 'Full-Stack Product Engineering',
    description: 'Scalable, production-ready web architectures. Seamlessly connecting high-performance Python/Node backends with dynamic databases.',
    features: ['FastAPI', 'React', 'MongoDB', 'REST APIs'],
    icon: FiLayers,
  },
  {
    title: 'Cinematic 3D Frontends',
    description: 'Immersive WebGL experiences that bridge the gap between standard UI and digital art. Hardware-accelerated and highly optimized.',
    features: ['Three.js', 'Framer Motion', 'WebGL', 'Shaders'],
    icon: FiMonitor,
  },
  {
    title: 'Digital Media & Content',
    description: 'High-retention social media content production. Combining AI-generated assets with advanced motion graphics and cinematic editing.',
    features: ['Retention Editing', 'Motion Graphics', 'AI Generation'],
    icon: FiVideo,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full flex flex-col items-center justify-center bg-transparent py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start">
        
        <SectionHeading
          eyebrow="Services"
          title="What I Can Build For You"
          description="From complex AI pipelines to immersive 3D frontends and engaging digital media."
        />

        <div className="mt-12 flex flex-col gap-6 w-full">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="flex flex-col md:flex-row w-full items-start md:items-center gap-6 md:gap-8 bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-6 md:p-8"
              >
                {/* Left: Prominent Icon Box */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-gray-200">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Middle: Text Content */}
                <div className="flex-grow">
                  <h3 className="font-['EB_Garamond'] text-2xl font-medium text-white mb-2">{service.title}</h3>
                  <p className="font-['Inter'] text-sm leading-relaxed text-gray-400 max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Right: Feature Pills (Matching Tech Stack styling) */}
                <div className="flex flex-wrap md:justify-end gap-2 shrink-0 md:w-64 pt-4 md:pt-0 border-t border-white/10 md:border-none w-full md:w-auto">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="font-['Inter'] rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
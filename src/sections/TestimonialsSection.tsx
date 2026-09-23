import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';

const testimonials = [
  {
    quote: "Himansh brought a level of technical precision and creative vision that completely transformed our platform's digital presence.",
    name: "Alex Sterling",
    role: "Project Manager, Tech Startup",
  },
  {
    quote: "Exceptional problem solver. The computer vision pipeline he integrated saved us countless hours of manual data processing.",
    name: "Dr. Sarah Chen",
    role: "Lead Engineer, AI Solutions",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full flex flex-col items-center justify-center bg-transparent py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 flex flex-col items-start">
        
        <SectionHeading
          eyebrow="Testimonials"
          title="Client Feedback"
          description="What people say about working with me across AI, engineering, and design."
        />

        {/* Staggered Grid Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full items-start">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.2 }}
              // The `md:mt-16` on the second item creates the staggered masonry effect
              className={`relative flex flex-col bg-zinc-950/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.8)] transition-all hover:border-white/20 p-8 md:p-10 ${
                index === 1 ? 'md:mt-16' : ''
              }`}
            >
              {/* Massive background quote mark for editorial aesthetic */}
              <div className="absolute top-6 right-8 font-['EB_Garamond'] text-8xl text-white/5 select-none pointer-events-none leading-none">
                "
              </div>
              
              <p className="relative z-10 font-['EB_Garamond'] text-2xl leading-relaxed text-gray-300 italic mb-10">
                {testimonial.quote}
              </p>
              
              {/* Author Box matching the stats styling */}
              <div className="relative z-10 flex flex-col bg-white/5 border border-white/10 rounded-xl px-5 py-4 mt-auto">
                <p className="font-['Inter'] text-sm font-medium text-white">{testimonial.name}</p>
                <p className="font-['Inter'] mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
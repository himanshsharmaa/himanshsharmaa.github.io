import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(12px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-15% 0px -15% 0px' }}
      transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="mb-12 flex max-w-3xl flex-col items-start text-left"
    >
      {eyebrow ? <p className="mb-4 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-md md:text-xs">{eyebrow}</p> : null}
      <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-light tracking-tight text-white drop-shadow-lg md:text-5xl">{title}</h2>
      {description ? <p className="max-w-2xl font-['Outfit'] text-base font-light text-gray-300 drop-shadow-md md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-12 flex flex-col items-center text-center"
    >
      {eyebrow ? <p className="mb-4 font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.3em] text-gray-400 drop-shadow-md md:text-xs">{eyebrow}</p> : null}
      <h2 className="mb-6 font-['Space_Grotesk'] text-4xl font-light tracking-tight text-white drop-shadow-lg md:text-5xl">{title}</h2>
      {description ? <p className="mx-auto max-w-2xl font-['Outfit'] text-base font-light text-gray-300 drop-shadow-md md:text-lg">{description}</p> : null}
    </motion.div>
  );
}
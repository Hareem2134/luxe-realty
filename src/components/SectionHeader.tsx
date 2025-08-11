'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  highlightWord?: string;
}

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as Transition['ease']
    } 
  },
};

const SectionHeader = ({ title, subtitle, highlightWord }: SectionHeaderProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={headerVariants}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        {title}{' '}
        {highlightWord && <span className="text-indigo-600">{highlightWord}</span>}
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        {subtitle}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
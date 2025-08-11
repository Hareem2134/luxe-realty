'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ViewAllButtonProps {
  text: string;
  link: string;
  delay?: number;
}

const ViewAllButton = ({ text, link, delay = 0 }: ViewAllButtonProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-12 text-center"
    >
      <motion.button
        whileTap={{ scale: 0.98, y: 2 }}
        className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200"
      >
        {text}
      </motion.button>
    </motion.div>
  );
};

export default ViewAllButton;
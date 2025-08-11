'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

export const itemSlideUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] as Transition['ease'] } },
};

interface ListContainerWrapperProps {
  children: ReactNode;
  className?: string;
}

const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ListContainerWrapper = ({ children, className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" }: ListContainerWrapperProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      variants={listContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ListContainerWrapper;
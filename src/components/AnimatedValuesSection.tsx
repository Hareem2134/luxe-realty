// src/components/AnimatedValuesSection.tsx
'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import SectionHeader from './SectionHeader';

interface ValueItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

interface AnimatedValuesSectionProps {
  values: ValueItem[];
}

const valueCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.42, 0, 0.58, 1] as Transition['ease'] } },
};

const AnimatedValuesSection = ({ values }: AnimatedValuesSectionProps) => {
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Core"
          highlightWord="Values"
          subtitle="The principles that guide every decision and interaction"
        />
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={valueCardVariants} className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                <FontAwesomeIcon icon={value.icon} className="text-xl" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 font-heading">{value.title}</h3>
              <p className="text-gray-600 font-body">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedValuesSection;
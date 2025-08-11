// src/components/AnimatedValuesSection.tsx
'use client'; // This component requires client-side functionality

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import specific Font Awesome icons here as needed
import { faMedal, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader'; // Assuming this is also a 'use client' component

// Define the type for a single value item
interface ValueItem {
  icon: any; // Use 'any' here if you can't get a more specific type for Font Awesome IconDefinition,
            // though typically you'd import IconDefinition from '@fortawesome/fontawesome-svg-core'
            // For now, `any` might be necessary to resolve the `no-explicit-any` warning later.
            // A better type would be: import { IconDefinition } from '@fortawesome/fontawesome-svg-core'; icon: IconDefinition;
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
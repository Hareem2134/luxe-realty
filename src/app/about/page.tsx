'use client';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../../components/SectionHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faHandshake, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { ReactNode } from 'react';

// Re-export SectionHeader as a Client component to be used directly here
const ClientSectionHeader = SectionHeader;

// Client wrapper for animated value cards
interface AnimatedValuesSectionProps {
  values: { icon: any; title: string; description: string }[];
}

const AnimatedValuesSection = ({ values }: AnimatedValuesSectionProps) => {
  'use client';
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
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
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
          }}
          className="bg-white p-8 rounded-xl shadow-sm text-center"
        >
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-4">
            <FontAwesomeIcon icon={value.icon} className="text-xl" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{value.title}</h3>
          <p className="text-gray-600">
            {value.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Client wrapper for animated story section
interface AnimatedStorySectionProps {
  children: ReactNode;
}

const AnimatedStorySection = ({ children }: AnimatedStorySectionProps) => {
  'use client';
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } },
  };
  
  return (
    <motion.div
      ref={storyRef}
      initial="hidden"
      animate={storyInView ? 'visible' : 'hidden'}
      variants={sectionVariants}
    >
      {children}
    </motion.div>
  );
};

export default function About() {
  const valuesData = [
    { icon: faMedal, title: 'Excellence', description: 'We pursue perfection in every detail, delivering beyond expectations' },
    { icon: faHandshake, title: 'Integrity', description: 'Honesty and transparency guide every client relationship and transaction' },
    { icon: faLightbulb, title: 'Innovation', description: 'We continuously evolve through technology and creative problem-solving' },
  ];

  return (
    <>
      {/* About Us Hero (Static content in a Server Component context) */}
      <div className="relative pt-16 pb-20 overflow-hidden bg-indigo-900 bg-opacity-75">
        <div className="absolute inset-0 bg-indigo-900 opacity-75"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About LUXE Realty</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Redefining luxury real estate through innovation, integrity, and exceptional service
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedStorySection>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p>Founded in 2010, LUXE Realty began with a vision to transform the luxury real estate experience. Our founders, industry veterans with decades of combined experience, saw an opportunity to blend cutting-edge technology with white-glove service.</p>
                        <p>What started as a boutique firm in Beverly Hills has grown into a global network of elite agents, serving clients in 12 countries and facilitating over $5 billion in transactions.</p>
                    </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
                    <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        alt="Our Team"
                        width={1470}
                        height={800}
                        className="rounded-xl shadow-xl w-full h-auto"
                    />
                </div>
            </div>
          </AnimatedStorySection>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ClientSectionHeader
            title="Our Core"
            highlightWord="Values"
            subtitle="The principles that guide every decision and interaction"
          />
          <AnimatedValuesSection values={valuesData} />
        </div>
      </section>
    </>
  );
}
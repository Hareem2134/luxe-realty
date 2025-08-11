'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AnimatedStorySection = () => {
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as Transition['ease'] } },
  };
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={storyRef}
          initial="hidden"
          animate={storyInView ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="lg:flex lg:items-center lg:justify-between"
        >
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Our Story</h2>
                <div className="prose prose-lg text-gray-600 font-body">
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
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedStorySection;
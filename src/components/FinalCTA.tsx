'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const FinalCTA = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Luxury Home"
          width={1470}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-indigo-700 bg-opacity-90"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: 'easeInOut' } 
          },
        }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Your <span className="text-indigo-200">Dream Home</span>?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-indigo-100 mb-8">
          Join thousands of satisfied clients who found their perfect home through LUXE Realty. Our experts are ready to guide you through every step of the process.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.98, y: 2 }}
            className="px-8 py-4 rounded-full bg-white text-indigo-700 hover:bg-gray-100 transition-colors duration-200 font-medium"
          >
            Connect With an Agent
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98, y: 2 }}
            className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 font-medium"
          >
            Browse Properties
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
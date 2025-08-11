'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <motion.div // Wrap image in motion.div to apply Ken Burns to background
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse' }}
          className="w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Luxury Home"
            fill // Use fill for background images
            style={{ objectFit: 'cover' }}
            priority // Load this image with high priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-white mb-6">
          Discover <span className="text-indigo-300">Extraordinary</span> Homes
        </motion.h1>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          Where luxury meets lifestyle. Explore the most exquisite properties in the world&apos;s most coveted locations.
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.98, y: 2 }}
            className="px-8 py-4 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            Browse Properties
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.98, y: 2 }}
            className="px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 font-medium"
          >
            Connect With an Agent
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const JoinTeamCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6">Join the LUXE Realty Family</h2>
          <p className="text-xl text-indigo-100 mb-8">
            We&apos;re always looking for passionate professionals to join our elite network of agents and staff.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileTap={{ scale: 0.98, y: 2 }}
              href="/careers"
              className="px-8 py-4 rounded-full bg-white text-indigo-600 hover:bg-gray-100 transition-colors duration-200 font-medium"
            >
              Explore Careers
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.98, y: 2 }}
              href="/agents"
              className="px-8 py-4 rounded-full bg-transparent border-2 border-white hover:bg-white hover:bg-opacity-10 transition-colors duration-200 font-medium"
            >
              Become an Agent
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTeamCTA;
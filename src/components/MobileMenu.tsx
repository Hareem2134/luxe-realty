'use client';

import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { x: '100%' },
  visible: { x: '0%', transition: { type: 'spring', stiffness: 120, damping: 20 } },
  exit: { x: '100%', transition: { type: 'spring', stiffness: 120, damping: 20 } },
};

const linkVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } },
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={menuVariants as Variants}
          className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg"
        >
          <div className="px-6 py-4 border-b">
            <span className="text-xl font-bold text-indigo-600">LUXE</span>
            <span className="text-xl font-light text-gray-700">Realty</span>
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 focus:outline-none">
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
            </button>
          </div>
          <motion.div
            className="px-6 py-4 flex flex-col space-y-4"
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
            }}
          >
            <motion.div variants={linkVariants}><Link href="/" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</Link></motion.div>
            <motion.div variants={linkVariants}><Link href="/buy" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Buy</Link></motion.div>
            <motion.div variants={linkVariants}><Link href="/rent" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Rent</Link></motion.div>
            <motion.div variants={linkVariants}><Link href="/sell" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Sell</Link></motion.div>
            <motion.div variants={linkVariants}><Link href="/agents" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Agents</Link></motion.div>
            <motion.div variants={linkVariants}><Link href="/neighborhoods" onClick={onClose} className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Neighborhoods</Link></motion.div>
            <motion.div variants={linkVariants}>
              <Link href="/login" onClick={onClose} className="mt-4 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 btn-press-effect">
                Sign In
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
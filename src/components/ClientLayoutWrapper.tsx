'use client';

import { useState, useEffect, ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Navbar from './Navbar';
import MobileMenu from './MobileMenu';
import Preloader from './Preloader';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation'; // Correct hook for App Router

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

const ClientLayoutWrapper = ({ children }: ClientLayoutWrapperProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState<boolean>(true);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    // Simulate initial load for preloader
    setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 1500); // 1.5 seconds loading time

    // Back to top button logic
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const pageTransitionVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <>
      <Preloader isVisible={isPreloaderVisible} />
      <Navbar onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransitionVariants}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 z-40"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Language selector (floating) */}
      <div className="fixed bottom-8 left-8 bg-white rounded-full shadow-lg z-40">
        <div className="relative group">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 focus:outline-none">
            <FontAwesomeIcon icon={faGlobe} className="text-gray-700" />
          </button>
          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-40 bg-white rounded-lg shadow-xl overflow-hidden">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">中文</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLayoutWrapper;
'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.9 } },
  };

  return (
    <motion.div
      ref={ref as React.Ref<HTMLDivElement>}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={formVariants}
      className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-10"
    >
      <div className="bg-white rounded-xl shadow-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div className="relative">
              <input type="text" id="location" placeholder="City, Neighborhood or Zip" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
            <select id="property-type" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>All Types</option>
              <option>Single Family</option>
              <option>Condo</option>
              <option>Townhouse</option>
              <option>Luxury Villa</option>
              <option>Penthouse</option>
            </select>
          </div>

          <div>
            <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <select id="price-range" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Any Price</option>
              <option>$500K - $1M</option>
              <option>$1M - $2.5M</option>
              <option>$2.5M - $5M</option>
              <option>$5M+</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
            <FontAwesomeIcon icon={faSlidersH} className="mr-1" /> More Filters
          </button>
          <motion.button
            whileTap={{ scale: 0.98, y: 2 }}
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 font-medium"
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" /> Search
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchForm;
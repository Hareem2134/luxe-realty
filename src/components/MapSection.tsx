'use client';

import { motion, Variants, Transition } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faDrawPolygon, faLayerGroup, faStreetView } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from './SectionHeader';
import ListContainerWrapper, { itemSlideUpVariants } from './ListContainerWrapper';

const mapSectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as Transition['ease']
    }
  },
};

const MapSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const cityMapPlaceholderUrl = "/google-map-of-united-arab-emirates.webp";


  return (
    <section className="relative py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="justify-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  text-4xl font-bold">
          <span className="text-gray-100">Explore</span>{" "}
          <span className="text-indigo-900">By Map</span>
        </h2>
        <p className='justify-center text-center mt-4 max-w-2xl mx-auto text-gray-300 mb-12'>Discover properties visually with our interactive map. Draw custom search areas to find exactly what you're looking for.</p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={mapSectionVariants}
          className="relative h-96 md:h-[600px] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80">
            <div className="text-center p-8">
              <div className="mb-6 text-indigo-400 text-5xl">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </div>
              <h3 className="text-2xl font-bold mb-2 font-heading">Interactive Map Search</h3>
              <p className="text-gray-300 mb-6 font-body">
                Click below to launch our advanced map interface where you can draw custom search areas, filter listings, and explore neighborhoods.
              </p>
              <motion.button
                whileTap={{ scale: 0.98, y: 2 }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium font-body"
              >
                Launch Map Explorer
              </motion.button>
            </div>
          </div>
          <Image
            src={cityMapPlaceholderUrl}
            alt="Interactive Map Placeholder"
            width={1470}
            height={800}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <ListContainerWrapper className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: faDrawPolygon, title: 'Custom Search Areas', description: 'Draw precise polygon search areas to find properties within exact boundaries of neighborhoods.' },
            { icon: faLayerGroup, title: 'Layered Data', description: 'Overlay school districts, crime data, flood zones and other critical information.' },
            { icon: faStreetView, title: 'Street View', description: 'Instantly view properties in Street View to get a feel for the neighborhood before visiting.' }
          ].map((feature, index) => (
            <motion.div key={index} variants={itemSlideUpVariants} whileHover={{ scale: 1.03 }} className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
              <div className="text-indigo-400 text-3xl mb-4">
                <FontAwesomeIcon icon={feature.icon} />
              </div>
              <h3 className="text-xl font-bold mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-300 font-body">{feature.description}</p>
            </motion.div>
          ))}
        </ListContainerWrapper>
      </div>
    </section>
  );
};

export default MapSection;
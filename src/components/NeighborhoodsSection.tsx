'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import SectionHeader from './SectionHeader';
import ListContainerWrapper, { itemSlideUpVariants } from './ListContainerWrapper';
import ViewAllButton from './ViewAllButton';

import { NeighborhoodType } from '../data/properties';

interface NeighborhoodsSectionProps {
  neighborhoods: NeighborhoodType[];
}

const NeighborhoodsSection = ({ neighborhoods }: NeighborhoodsSectionProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Premium"
          highlightWord="Neighborhoods"
          subtitle="Explore the most sought-after neighborhoods in prime locations worldwide"
        />

        <ListContainerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {neighborhoods.map((n) => (
            <motion.div
              key={n.id}
              variants={itemSlideUpVariants}
              className="relative rounded-xl overflow-hidden h-64 group cursor-pointer"
            >
              <Image
                src={n.image}
                alt={n.name}
                width={700}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white font-heading">{n.name}</h3>
                <p className="text-gray-200 font-body">{n.city}</p>
                <div className="mt-2 flex items-center text-yellow-400">
                  {Array.from({ length: Math.floor(n.rating) }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  {n.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                  <span className="ml-2 text-white text-sm font-body">{n.rating} ({n.reviews} reviews)</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                <motion.button
                  whileTap={{ scale: 0.98, y: 2 }}
                  className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium font-body"
                >
                  Explore Area
                </motion.button>
              </div>
            </motion.div>
          ))}
        </ListContainerWrapper>

        <ViewAllButton text="View All Neighborhoods" link="/neighborhoods" delay={0.5} />
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
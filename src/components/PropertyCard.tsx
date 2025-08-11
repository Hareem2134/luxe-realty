'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { PropertyType } from '../data/properties';

interface PropertyCardProps {
  property: PropertyType;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(property.isFavorited);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
    >
      {property.tags.length > 0 && (
        <div className="absolute top-4 left-4 z-10">
          <span className={`px-3 py-1 text-white text-xs font-semibold rounded-full ${property.isNew ? 'bg-red-500' : 'bg-indigo-600'}`}>
            {property.tags[0]}
          </span>
        </div>
      )}
      <div className="absolute top-4 right-4 z-10">
        <motion.button
          onClick={handleFavoriteClick}
          whileTap={{ scale: 0.8 }}
          className="p-2 bg-white bg-opacity-80 rounded-full shadow-md"
        >
          <motion.span
            key={isFavorited ? 'favorited' : 'not-favorited'}
            initial={{ scale: 1 }}
            animate={isFavorited ? { scale: [1, 1.3, 1] } : { scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200, damping: 10 }}
          >
            <FontAwesomeIcon
              icon={isFavorited ? solidHeart : regularHeart}
              className={`text-lg ${isFavorited ? 'text-red-500' : 'text-gray-600'}`}
            />
          </motion.span>
        </motion.button>
      </div>
      <div className="h-64 overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          width={700}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
            <p className="text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-indigo-500 mr-1" /> {property.location}
            </p>
          </div>
          <span className="text-xl font-bold text-indigo-600">{property.price}</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-600">
            <span><FontAwesomeIcon icon={faBed} className="text-indigo-500 mr-1" /> {property.beds} Beds</span>
            <span><FontAwesomeIcon icon={faBath} className="text-indigo-500 mr-1" /> {property.baths} Baths</span>
            <span><FontAwesomeIcon icon={faRulerCombined} className="text-indigo-500 mr-1" /> {property.sqft} sqft</span>
          </div>
        </div>
        <motion.button
          whileTap={{ scale: 0.98, y: 2 }}
          className="mt-6 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors duration-200"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
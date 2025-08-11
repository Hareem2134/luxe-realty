'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

import SectionHeader from './SectionHeader';
import ListContainerWrapper, { itemSlideUpVariants } from './ListContainerWrapper';

import { TestimonialType } from '../data/properties';

interface TestimonialsSectionProps {
  testimonials: TestimonialType[];
}

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Client"
          highlightWord="Testimonials"
          subtitle="Hear from our satisfied clients who found their dream homes through LUXE Realty"
        />

        <ListContainerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemSlideUpVariants} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-2">
                  {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  {testimonial.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                </div>
                <span className="text-gray-500 text-sm font-body">{testimonial.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600 mb-6 font-body">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <Image src={testimonial.image} alt={testimonial.author} width={48} height={48} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 font-body">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm font-body">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ListContainerWrapper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
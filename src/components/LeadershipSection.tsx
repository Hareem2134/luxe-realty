'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ListContainerWrapper, { itemSlideUpVariants } from './ListContainerWrapper';
import { LeadershipMemberType } from '../data/properties';

interface LeadershipSectionProps {
  leadership: LeadershipMemberType[];
}

const LeadershipSection = ({ leadership }: LeadershipSectionProps) => {
  // The SectionHeader already handles its own inView animation
  // The ListContainerWrapper handles its own inView animation for its children

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our"
          highlightWord="Leadership"
          subtitle="The visionaries guiding LUXE Realty's continued success"
        />

        <ListContainerWrapper className="grid md:grid-cols-3 gap-8">
          {leadership.map((member) => (
            <motion.div key={member.id} variants={itemSlideUpVariants} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={192}
                height={192}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-indigo-600 mb-2">{member.title}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </ListContainerWrapper>
      </div>
    </section>
  );
};

export default LeadershipSection;
import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { NeighborhoodType, dummyNeighborhoods } from '../../data/properties';

export const metadata: Metadata = {
  title: 'Luxury Neighborhoods | LUXE Realty',
  description: 'Explore the most sought-after luxury neighborhoods worldwide.',
};

export default function NeighborhoodsPage() {
  const neighborhoods: NeighborhoodType[] = dummyNeighborhoods;

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientSectionHeader
          title="Explore Our"
          highlightWord="Neighborhoods"
          subtitle="Curated guides to the world's most exclusive communities."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoods.map((n) => (
            <div key={n.id} className="relative rounded-xl overflow-hidden h-64 group cursor-pointer shadow-md">
              <Image
                src={n.image}
                alt={n.name}
                width={700}
                height={400}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">{n.name}</h3>
                <p className="text-gray-200">{n.city}</p>
                <div className="mt-2 flex items-center text-yellow-400">
                  {Array.from({ length: Math.floor(n.rating) }).map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  {n.rating % 1 !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} />}
                  <span className="ml-2 text-white text-sm">{n.rating} ({n.reviews} reviews)</span>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-30">
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium">
                  View Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
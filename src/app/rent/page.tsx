import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Rent Property | LUXE Realty',
  description: 'Discover luxury rental properties.',
};

export default function RentPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ClientSectionHeader
          title="Properties"
          highlightWord="For Rent"
          subtitle="Find your perfect luxury rental home."
        />
        <p className="text-lg text-gray-600 mt-8">Coming soon: A curated selection of high-end rental properties.</p>
      </div>
    </div>
  );
}
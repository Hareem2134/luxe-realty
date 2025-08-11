import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Sell Property | LUXE Realty',
  description: 'Partner with LUXE Realty to sell your luxury property.',
};

export default function SellPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ClientSectionHeader
          title="Sell Your"
          highlightWord="Property"
          subtitle="Entrust your high-value property to the experts at LUXE Realty."
        />
        <p className="text-lg text-gray-600 mt-8">Our agents are ready to help you achieve the best value for your home.</p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
          Request a Valuation
        </button>
      </div>
    </div>
  );
}
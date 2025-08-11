import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Careers | LUXE Realty',
  description: 'Join the LUXE Realty team and grow your career.',
};

export default function CareersPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ClientSectionHeader
          title="Join Our"
          highlightWord="Team"
          subtitle="Explore exciting career opportunities at LUXE Realty."
        />
        <div className="max-w-2xl mx-auto mt-8 text-gray-700">
          <p className="mb-4">
            At LUXE Realty, we believe in fostering a culture of excellence, innovation, and client satisfaction. We are always looking for talented individuals who are passionate about luxury real estate and committed to delivering exceptional service.
          </p>
          <p className="mb-4">
            Whether you are an experienced agent, a marketing specialist, or a tech enthusiast, we offer a dynamic environment where you can thrive and make a significant impact.
          </p>
          <p className="font-semibold">Check back soon for open positions!</p>
        </div>
      </div>
    </div>
  );
}
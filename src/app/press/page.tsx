import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Press & Media | LUXE Realty',
  description: 'Latest news and press releases from LUXE Realty.',
};

export default function PressPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ClientSectionHeader
          title="Press &"
          highlightWord="Media"
          subtitle="Stay updated with the latest news and announcements from LUXE Realty."
        />
        <div className="max-w-2xl mx-auto mt-8 text-gray-700">
          <p className="mb-4">
            For media inquiries, press releases, or to request an interview with our leadership team, please contact our PR department.
          </p>
          <p className="mb-4 font-semibold">Email: press@luxerealty.com</p>
          <p className="mb-4">
            Stay tuned for our upcoming press releases and featured articles in leading real estate and luxury lifestyle publications.
          </p>
        </div>
      </div>
    </div>
  );
}
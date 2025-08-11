import { Metadata } from 'next';
import ClientSectionHeader from '../../components/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact Us | LUXE Realty',
  description: 'Get in touch with LUXE Realty for inquiries and support.',
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ClientSectionHeader
          title="Get In"
          highlightWord="Touch"
          subtitle="We're here to assist you with all your luxury real estate needs."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Offices</h3>
            <p className="text-gray-600 mb-2"><strong>Beverly Hills, CA</strong></p>
            <p className="text-gray-600 mb-4">
              123 Luxury Lane, Suite 100<br />
              Beverly Hills, CA 90210
            </p>
            <p className="text-gray-600 mb-2"><strong>New York, NY</strong></p>
            <p className="text-gray-600 mb-4">
              456 Fifth Ave, Penthouse<br />
              New York, NY 10001
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 (800) 555-LUXE</p>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> info@luxerealty.com</p>
            <p className="text-gray-600 mb-2"><strong>Support:</strong> support@luxerealty.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 text-sm font-medium mb-1">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-indigo-400">LUXE</span>
              <span className="ml-1 text-2xl font-light text-white">Realty</span>
            </Link>
            <p className="mb-4">
              The premier luxury real estate platform connecting discerning buyers with exceptional properties and top-tier agents.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors duration-200">Careers</Link></li>
              <li><Link href="/press" className="hover:text-white transition-colors duration-200">Press</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Buying Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Selling Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Mortgage Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">School Ratings</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Neighborhood Guides</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LUXE Realty. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-sm hover:text-white transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  onMobileMenuToggle: () => void;
}

const Navbar = ({ onMobileMenuToggle }: NavbarProps) => {
  return (
    <nav className="fixed w-full z-40 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">LUXE</span>
              <span className="ml-1 text-2xl font-light text-gray-700">Realty</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Home</Link>
            <Link href="/buy" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Buy</Link>
            <Link href="/rent" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Rent</Link>
            <Link href="/sell" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Sell</Link>
            <Link href="/agents" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Agents</Link>
            <Link href="/neighborhoods" className="text-gray-700 hover:text-indigo-600 transition-colors duration-200">Neighborhoods</Link>
            <Link href="/login" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200 btn-press-effect">
              Sign In
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={onMobileMenuToggle} className="text-gray-700 focus:outline-none">
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full px-4 md:px-10 lg:px-20 xl:px-32">
      <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 items-center justify-between">
        <p className="text-sm">
          &copy;{new Date().getFullYear()} Mukunda | All rights reserved.
        </p>
        <div className="ml-4 flex  space-x-2">
          {/* Social media links */}
          <Link href="https://twitter.com/your-twitter" className="text-white mx-2 hover:text-blue-500">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://facebook.com/your-facebook" className="text-white mx-2 hover:text-blue-500">
            <FaFacebook size={24} />
          </Link>
          <Link href="https://instagram.com/your-instagram" className="text-white mx-2 hover:text-pink-500">
            <FaInstagram size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

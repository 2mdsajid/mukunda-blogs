import React from 'react';
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="flex items-center justify-center">
        <p className="text-sm">
           &copy;{new Date().getFullYear()} Sajid | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

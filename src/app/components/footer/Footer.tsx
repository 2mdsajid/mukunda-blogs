import React from 'react';
import { RiCopyrightLine } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full">
      <div className="flex items-center justify-center">
        <div className="mr-2">
          <RiCopyrightLine size={16}/>
        </div>
        <p className="text-sm">
           {new Date().getFullYear()} Sajid | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

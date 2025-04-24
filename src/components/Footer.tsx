import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-6 text-sm">
      <div className="mb-2">
        &copy; {new Date().getFullYear()} Deepak Chauhan. All rights reserved.
      </div>
      <div className="flex justify-center space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/privacy" className="hover:underline">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;


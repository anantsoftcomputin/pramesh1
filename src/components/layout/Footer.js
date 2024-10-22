import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Pramesh Wealth</h3>
            <p className="text-sm">The Investment Bridge</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-300">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-300">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-primary-300">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-primary-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700 pt-8 text-center">
          <p className="text-sm">&copy; 2023 Pramesh Wealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
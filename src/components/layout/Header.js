import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Briefcase, Users, Mail, ArrowRight } from 'lucide-react';
import logo from '../../assets/pramesh-wealth-logo.png'; // Ensure this path is correct

const MobileMenu = ({ isOpen, setIsOpen }) => (
  <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <div className="absolute inset-0 bg-primary-500 opacity-50" onClick={() => setIsOpen(false)}></div>
    <nav className="relative z-10 bg-white h-full w-64 shadow-xl flex flex-col">
      <div className="p-4 flex justify-between items-center border-b">
        <span className="font-bold text-lg">Menu</span>
        <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-neutral-700">
          <X size={24} />
        </button>
      </div>
      <div className="py-4 flex flex-col">
        <Link to="/" className="px-4 py-2 text-neutral-900 hover:bg-primary-100" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/services" className="px-4 py-2 text-neutral-900 hover:bg-primary-100" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/about" className="px-4 py-2 text-neutral-900 hover:bg-primary-100" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/contact" className="px-4 py-2 text-neutral-900 hover:bg-primary-100" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
      <div className="mt-auto p-4">
        <button className="w-full bg-primary-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-primary-600 transition duration-300 ease-in-out flex items-center justify-center">
          Get Started <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </nav>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex-shrink-0">
            <img className="h-12 w-auto" src={logo} alt="Pramesh Wealth" />
          </Link>
          <nav className="hidden md:flex items-right space-x-4">
            <Link to="/" className="text-primary-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium embossed-text">Home</Link>
            <Link to="/services" className="text-primary-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium embossed-text">Services</Link>
            <Link to="/about" className="text-primary-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium embossed-text">About Us</Link>
            <Link to="/contact" className="text-primary-800 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium embossed-text">Contact</Link>
            <button className="bg-primary-500 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-300 ease-in-out embossed-button">
              Get Started
            </button>
          </nav>
          <button 
            className="md:hidden text-primary-800 hover:text-primary-600"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
      
      {/* Bottom Navigation for Mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primary-100 border-t border-primary-200 px-4 py-2 flex justify-around items-center">
        <Link to="/" className="flex flex-col items-center text-primary-800 hover:text-primary-600">
          <Home size={20} />
          <span className="text-xs mt-1 embossed-text">Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center text-primary-800 hover:text-primary-600">
          <Briefcase size={20} />
          <span className="text-xs mt-1 embossed-text">Services</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center text-primary-800 hover:text-primary-600">
          <Users size={20} />
          <span className="text-xs mt-1 embossed-text">About</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center text-primary-800 hover:text-primary-600">
          <Mail size={20} />
          <span className="text-xs mt-1 embossed-text">Contact</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { MoveDown } from "lucide-react";
import ClaudeLanding from './ClaudeLanding';
import Formmain from './Formmain';


const ClaudeLandingm = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      // Agar scrollY screen height se zyada hai tab navbar show karo.
      if (window.scrollY >= window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* First Page (Form Page) - Yahan navbar nahi dikhana */}
    <Formmain/>

      {/* Navbar - Ye tabhi dikhaye jab pura first page scroll ho chuka ho */}
      {showNavbar && (
      <nav className="w-full px-4 py-8 fixed top-0 left-0 right-0 bg-white z-40">
       
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 text-2xl">✴</div>
          <span className="text-2xl font-semibold">Claude</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
        <a href="#features" className="text-lg text-gray-600 hover:text-gray-900">Features</a>
        <a href="#pricing" className="text-lg text-gray-600 hover:text-gray-900">Pricing</a>
        <a href="#faq" className="text-lg text-gray-600 hover:text-gray-900">FAQ</a>

          <button className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-md text-white transition-colors">
            Get Started
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
          <button className="bg-orange-700 hover:bg-orange-800 px-4 py-2 rounded-md text-white transition-colors">
            Get Started
          </button>
        </div>
      )}
    </nav>
      )}

      {/* Landing Page Section */}
<ClaudeLanding/>
    </div>
  );
};

export default ClaudeLandingm;

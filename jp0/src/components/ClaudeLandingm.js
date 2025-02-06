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
    <div className="bg-background">
      {/* First Page (Form Page) - Yahan navbar nahi dikhana */}
    <Formmain/>

      {/* Navbar - Ye tabhi dikhaye jab pura first page scroll ho chuka ho */}
      {showNavbar && (
      <nav className="w-full px-4 py-8 fixed top-0 left-0 right-0 bg-white z-40">
       
      <div className="flex justify-between items-center max-w-6xl mx-auto">
      <div className="flex items-center space-x-2">
  <div className="text-orange-600 text-2xl">
  {/* <svg width="24" height="24" viewBox="0 0 266 265" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M264.942 0H0.942322V264H264.942V0Z" fill="#C96442"/>
  <path d="M77.9423 155L155.884 264.5H0L77.9423 155Z" fill="#651C03" fillOpacity="0.77"/>
  <path d="M150.942 122L265.257 264.5H36.6269L150.942 122Z" fill="#511703" fillOpacity="0.79"/>
  <path d="M179.945 46.0034L151.011 50.5539C150.031 50.7117 149.154 51.2514 148.571 52.0549C147.988 52.8584 147.747 53.8601 147.901 54.8408C148.055 55.8215 148.592 56.7011 149.393 57.2871C150.194 57.873 151.195 58.1176 152.176 57.9672L176.664 54.1152L176.035 78.896C176.011 79.8901 176.383 80.853 177.069 81.5732C177.754 82.2934 178.698 82.712 179.692 82.7371C180.686 82.7621 181.649 82.3916 182.37 81.7068C183.091 81.0221 183.511 80.0791 183.537 79.0851L184.279 49.8046C184.292 49.255 184.184 48.7092 183.964 48.2057C183.743 47.7022 183.414 47.2534 183.001 46.8908C182.588 46.5283 182.1 46.2609 181.572 46.1076C181.044 45.9542 180.489 45.9187 179.945 46.0034Z" fill="#5A1B06"/>
  <path d="M100.036 148.118L166.026 66" stroke="#5A1B06" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 */}

{/* <svg width="24" height="24" viewBox="0 0 266 265" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M264.942 0H0.942322V264H264.942V0Z" fill="currentColor"/>
  <path d="M77.9423 155L155.884 264.5H0L77.9423 155Z" fill="#FDFAF4" fillOpacity="0.27"/>
  <path d="M150.942 122L265.257 264.5H36.6269L150.942 122Z" fill="#F0EEE6" fillOpacity="0.55"/>
  <mask id="mask0_6_91" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="130" y="15" width="86" height="86">
    <path d="M170.34 15.8318L130.774 60.9376L175.88 100.504L215.446 55.3979L170.34 15.8318Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_6_91)">
    <path d="M179.945 46.0034L151.011 50.5539C150.031 50.7117 149.154 51.2514 148.571 52.0549C147.988 52.8584 147.747 53.8601 147.901 54.8408C148.055 55.8215 148.592 56.7011 149.393 57.2871C150.194 57.873 151.195 58.1176 152.176 57.9672L176.664 54.1152L176.035 78.896C176.011 79.8901 176.383 80.853 177.069 81.5732C177.754 82.2934 178.698 82.712 179.692 82.7371C180.686 82.7621 181.649 82.3916 182.37 81.7068C183.091 81.0221 183.511 80.0791 183.537 79.0851L184.279 49.8046C184.292 49.255 184.184 48.7092 183.964 48.2057C183.743 47.7022 183.414 47.2534 183.001 46.8908C182.588 46.5283 182.1 46.2609 181.572 46.1076C181.044 45.9542 180.489 45.9187 179.945 46.0034Z" fill="white"/>
  </g>
  <path d="M100.036 148.118L166.026 66" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */}

<svg width="24" height="24" viewBox="0 0 266 265" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M264.942 0H0.942322V264H264.942V0Z" fill="#C2410C"/>
  <path d="M77.9423 155L155.884 264.5H0L77.9423 155Z" fill="#FDFAF4" fillOpacity="0.4"/>
  <path d="M150.942 122L265.257 264.5H36.6269L150.942 122Z" fill="#F0EEE6" fillOpacity="0.55"/>
  <mask id="mask0_8_105" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="130" y="15" width="86" height="86">
    <path d="M170.34 15.8318L130.774 60.9376L175.88 100.504L215.446 55.3979L170.34 15.8318Z" fill="white"/>
  </mask>
  <g mask="url(#mask0_8_105)">
    <path d="M179.945 46.0034L151.011 50.5539C150.031 50.7117 149.154 51.2514 148.571 52.0549C147.988 52.8584 147.747 53.8601 147.901 54.8408C148.055 55.8215 148.592 56.7011 149.393 57.2871C150.194 57.873 151.195 58.1176 152.176 57.9672L176.664 54.1152L176.035 78.896C176.011 79.8901 176.383 80.853 177.069 81.5732C177.754 82.2934 178.698 82.712 179.692 82.7371C180.686 82.7621 181.649 82.3916 182.37 81.7068C183.091 81.0221 183.511 80.0791 183.537 79.0851L184.279 49.8046C184.292 49.255 184.184 48.7092 183.964 48.2057C183.743 47.7022 183.414 47.2534 183.001 46.8908C182.588 46.5283 182.1 46.2609 181.572 46.1076C181.044 45.9542 180.489 45.9187 179.945 46.0034Z" fill="white"/>
  </g>
  <path d="M100.036 148.118L166.026 66" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </div>
  <span className="text-2xl font-semibold">Jowb</span>
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

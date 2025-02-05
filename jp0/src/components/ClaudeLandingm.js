import React, { useState, useEffect } from 'react';
import { MoveDown } from "lucide-react";
import ClaudeLanding from './ClaudeLanding';
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';

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
      <div className="bg-[#fdfaf4] text-[#333] min-h-screen flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
          <div className="max-w-md w-full flex flex-col items-center">
            <img 
              src="https://storage.googleapis.com/a1aa/image/KS7haObHQoANSGci-Q6cB7BpmiYCZDTYvGf4CjKyUFc.jpg" 
              alt="Claude logo" 
              className="mb-4 w-[50px] h-[50px]"
            />
            <h1 className="text-4xl lg:text-5xl font-geist font-bold text-center mb-4">
              Your ideas amplified
            </h1>
            <p className="text-lg text-center mb-8 font-geist">
              Privacy-first AI that helps you create in confidence.
            </p>
            {/* Auth Card */}
            <div className="bg-[#faf9f5] p-8 rounded-3xl shadow-lg w-full border border-[#e5e5e5]">
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
              />
              <input
                type="text"
                placeholder="Enter your auth code"
                className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
              />
              <input
                type="file"
                className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
              />
              <button className="w-full bg-[#c96442] text-white py-2 px-4 rounded-lg">
                Continue with email
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                By continuing, you agree to Anthropic's{" "}
                <a href="#" className="underline">Consumer Terms and Usage Policy</a>,{" "}
                and acknowledge their{" "}
                <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </div>
            <button className="mt-8 bg-gradient-to-r from-[#f0eee5] to-[#e8e5d8] text-lg text-[#333] py-2 px-6 rounded-full flex items-center border border-[#e5e5e5] hover:text-[#29261b]">
  Learn more
  <MoveDown className="ml-2 w-4 h-4 animate-bounce" />
</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="m-3 w-full bg-[#f0eee6] lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 rounded-[12px]">
  <div className="max-w-md w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
    {/* Header Section */}
    <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center mb-4 gap-2 sm:gap-0">
      <img
        src="https://storage.googleapis.com/a1aa/image/UcvpeC9grJmOb9auHlYXtEFLfRLO8btGQ6SLEoEZqnI.jpg"
        alt="Profile picture of Amy Ravit Korin"
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
      />
      <div className="flex-1 min-w-0">
        <h2 className="font-semibold text-sm sm:text-base">
          Amy Ravit Korin, MBA
          <span className="text-gray-500"> • 3rd+</span>
        </h2>
        <p className="text-gray-500 text-xs sm:text-sm truncate">
          Improve the experience and everybody wins.
          <span className="text-red-500">❤️</span> Customer Ex...
        </p>
        <p className="text-gray-500 text-xs sm:text-sm">
          1w <span className="text-gray-500">•🌐</span>
        </p>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button className="text-blue-600 font-semibold text-sm sm:text-base whitespace-nowrap">+ Follow</button>
        <button className="text-gray-500 text-sm sm:text-base">•••</button>
      </div>
    </div>

    {/* Content Section */}
    <div className="mb-4 space-y-3">
      <p className="text-base sm:text-lg font-semibold">🎉 HIRING ALERT 🎉</p>
      <p className="text-sm sm:text-base text-gray-700">
        An exciting 2025 is underway here at Havas Life with many open roles, junior to senior levels, across Creative, CX, Strategy, Account, Medical Strategy, Project Management, Data Strategy and other groups.
      </p>
      <p className="text-sm sm:text-base text-gray-700">
        Our offices are in NYC, Boston, Chicago, San Francisco, and Toronto. 3 days are required in office, there's no remote work. Agency & healthcare experience required. No external recruiters, please. Please feel free to share this.
      </p>
      <p className="text-sm sm:text-base text-gray-700">
        DM me if you're interested or have questions!
      </p>
      <p className="text-sm sm:text-base text-blue-600 font-semibold">
        #havas #healthcareadvertising #havaslife #hiring
      </p>
    </div>

    {/* Reactions Section */}
    <div className="flex items-center mb-4">
      <div className="flex -space-x-2">
        <img
          src="https://storage.googleapis.com/a1aa/image/baQuy7W_O0SqXE47fKwymr2tbMOEw0Ci1oXLPEg_shc.jpg"
          alt="Reaction icon 1"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/tkyQX2uo1E6HrhdPTdPgcQWJjdLkVJgHVNDSun-gvvA.jpg"
          alt="Reaction icon 2"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
        />
        <img
          src="https://storage.googleapis.com/a1aa/image/mhhBC_liqD0hiXoNcU2f-9AsrF-TarNAcPqc4rXCpGg.jpg"
          alt="Reaction icon 3"
          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
        />
      </div>
      <p className="text-gray-500 ml-2 text-sm">60</p>
    </div>

    {/* Action Buttons */}
    <div className="grid grid-cols-2 sm:flex sm:justify-between text-gray-500 text-xs sm:text-sm gap-2">
      <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
        <ThumbsUp className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
        Like
      </button>
      <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
        <MessageCircle className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
        Comment
      </button>
      <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
        <Share2 className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
        Repost
      </button>
      <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
        <Send className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
        Send
      </button>
    </div>
  </div>
</div>
      </div>

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

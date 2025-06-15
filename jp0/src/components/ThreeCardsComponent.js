import React from 'react';
// Step 1: Import Link from react-router-dom
import { Link } from 'react-router-dom';

const ThreeCardsComponent = () => {
  return (
    <div className="w-full max-w-none mx-auto px-5 lg:px-9">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        
        {/* Step 2: Wrap the first card with the Link component */}
        <Link to="/replys">
          <div className="bg-[#cbcadb] rounded-2xl p-12 lg:p-8 flex flex-col items-center justify-center min-h-80 w-full group">
            <div className="mb-4 flex items-center justify-center">
              <img 
                src="https://www-cdn.anthropic.com/images/4zrzovbb/website/fb4551b70025126a887c1c672febc2c331a4fe4b-1000x1000.svg" 
                alt="Offer Letters Icon"
                // Increased image size from w-20 h-20 to w-30 h-30
                className="w-30 h-30 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 text-center leading-tight group-hover:scale-110 transition-transform duration-300">
              Offer letter's
            </h3>
          </div>
        </Link>

        {/* Card 2 - Email reply's (unchanged) */}
        <div className="bg-[#bcd1ca] rounded-2xl p-12 lg:p-8 flex flex-col items-center justify-center min-h-80 w-full group cursor-pointer">
          <div className="mb-4 flex items-center justify-center">
            <img 
              src="https://www-cdn.anthropic.com/images/4zrzovbb/website/c063d98910d83ae9bc6a719ed59014649c421d18-1000x1000.svg" 
              alt="Email Replys Icon"
              // Increased image size from w-20 h-20 to w-30 h-30
              className="w-30 h-30 object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-center leading-tight group-hover:scale-110 transition-transform duration-300">
            Email reply's
          </h3>
        </div>

        {/* Card 3 - Referral's (unchanged) */}
        <div className="bg-[#e3dacc] rounded-2xl p-12 lg:p-8 flex flex-col items-center justify-center min-h-80 w-full group cursor-pointer">
          <div className="mb-4 flex items-center justify-center">
              <img 
                src="https://www-cdn.anthropic.com/images/4zrzovbb/website/1c1002b3a36e8e84ef43a80a8df264d3bdbb722a-1000x1000.svg" 
                alt="Referrals Icon"
                // Increased image size from w-20 h-20 to w-30 h-30
                className="w-30 h-30 object-contain"
              />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-center leading-tight group-hover:scale-110 transition-transform duration-300">
            Referral's
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ThreeCardsComponent;
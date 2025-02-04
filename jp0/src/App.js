import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f0] flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl gap-8">
        {/* Left Column - Login Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-8">
          <img 
            src="https://storage.googleapis.com/a1aa/image/5JRxtigFBmgWxRpUElsBKqUV_NQ7ISQxWSGjZJ2T3lE.jpg" 
            alt="Claude logo" 
            className="mb-4 w-24 h-auto"
          />
          
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-[Libre Baskerville]">
            Your ideas, amplified
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Privacy-first AI that helps you create in confidence.
          </p>

          {/* Login Card */}
          <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
            <button className="w-full py-3 mb-4 text-lg font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <i className="fab fa-google mr-2"></i>
              Continue with Google
            </button>
            
            <div className="flex items-center justify-center mb-4">
              <span className="text-gray-500 text-sm">OR</span>
            </div>
            
            <input 
              type="email" 
              placeholder="Enter your personal or work email" 
              className="w-full px-4 py-3 mb-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            
            <button className="w-full py-3 text-lg font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors">
              Continue with email
            </button>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              By continuing, you agree to Anthropic's {' '}
              <a href="#" className="underline hover:text-gray-700">Consumer Terms and Usage Policy</a>, {' '}
              and acknowledge their {' '}
              <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>.
            </p>
          </div>
        </div>

        {/* Right Column - Demo Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center p-8">
          <div className="w-full bg-gray-100 rounded-lg p-4 mb-4">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <img 
                src="https://storage.googleapis.com/a1aa/image/vFPB51c45rW4KFkLEAd9aDfybToYJIgIZyYgPaJxOl4.jpg" 
                alt="User avatar" 
                className="w-10 h-10 mr-4 rounded-full"
              />
              <p className="text-gray-800">
                Hi Claude! Can you visualize my sales funnel from awareness to purchase using bar graphs?
              </p>
            </div>
          </div>

          <div className="w-full p-4 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-gray-800">Here's your sales funnel.</p>
            <img 
              src="https://storage.googleapis.com/a1aa/image/xZgT3p4OQaNh624BcGBQ5dz3ML2ZxyWWV_pGqlKE8JI.jpg" 
              alt="Bar graph showing sales funnel stages" 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
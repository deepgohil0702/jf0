import { ChevronDown, twitter } from "lucide-react";

export default function App() {
  return (
    <div className="bg-[#fdfaf4] text-[#333] min-h-screen flex">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-md w-full flex flex-col items-center">
          <img 
            src="https://storage.googleapis.com/a1aa/image/KS7haObHQoANSGci-Q6cB7BpmiYCZDTYvGf4CjKyUFc.jpg" 
            alt="Claude logo" 
            className="mb-4 w-[50px] h-[50px]"
          />
          
          <h1 className="text-4xl lg:text-5xl font-bold text-center mb-4">
            Your ideas, amplified
          </h1>
          
          <p className="text-lg text-center mb-8">
            Privacy-first AI that helps you create in confidence.
          </p>

          {/* Auth Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full">
            <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center mb-4">
              <twitter className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
            
            <div className="text-center text-gray-500 mb-4">OR</div>
            
            <input
              type="email"
              placeholder="Enter your personal or work email"
              className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
            />
            
            <button className="w-full bg-[#e05a33] text-white py-2 px-4 rounded-lg">
              Continue with email
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By continuing, you agree to Anthropic's{" "}
              <a href="#" className="underline">Consumer Terms and Usage Policy</a>,{" "}
              and acknowledge their{" "}
              <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </div>

          <button className="mt-8 bg-[#f5f0e8] text-[#333] py-2 px-6 rounded-full flex items-center">
            Learn more
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-md w-full bg-[#f0eee6] p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://storage.googleapis.com/a1aa/image/Gh2lcRaJYnbCT8lFi-Eysr-4eT-dSjHFCA5o7zNbDMA.jpg"
              alt="User avatar"
              className="rounded-full w-[40px] h-[40px] mr-2"
            />
            <div className="bg-[#e5e5e5] p-2 rounded-lg">
              Claude, make a content calendar for my marketing campaign.
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="bg-[#f5f0e8] p-2 rounded-lg mb-2">
              Of course. Here's the calendar!
            </div>
            <img
              src="https://storage.googleapis.com/a1aa/image/THpwKD1inm-nGOvKiRbDCOp1bmfm4Gu9rf76DjwMjwM.jpg"
              alt="Calendar with various events marked"
              className="rounded-lg w-full aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
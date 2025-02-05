import { MoveDown, twitter } from "lucide-react";

export default function Formmain() {
  return (
    <div className="bg-[#fdfaf4] text-[#333] min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex-1 flex items-center justify-center p-6 lg:p-12">
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
            {/* <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center mb-4">
              <twitter className="w-5 h-5 mr-2" />
              Continue with Google
            </button> */}
{/*             
            <div className="text-center text-gray-500 mb-4">OR</div> */}
            
            <input
              type="email"
              placeholder="Enter your personal email"
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
            <MoveDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="m-3 w-full bg-[#f0eee6] lg:w-1/2 flex-1 flex items-center justify-center p-6 lg:p-12 rounded-[12px]">
        <div className="max-w-md w-full bg-[#f5f0e8] p-6 rounded-lg shadow-lg">
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
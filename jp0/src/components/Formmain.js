import { MoveDown } from "lucide-react";
import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';
import { useState, useEffect } from "react";

const TextRevealAnimation = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50;

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
      {displayedText}
      {displayedText.length < text.length && <span className="blinking-cursor">|</span>}
    </p>
  );
};

const Formmain = () =>  {
  const relevantContext = `Settings Options As part of the design of an accounting platform, our team created these emails to keep users informed about their new invoices, payment confirmations, and task statuses.

To add a touch of personality to the emails, we created a custom set of hand-drawn illustrations.

We believe in making accounting more approachable and user-friendly through thoughtful design.`;

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        .blinking-cursor {
          animation: blink 1s infinite;
        }
      `}</style>
      
      <div className="bg-background text-[#333] min-h-screen flex flex-col lg:flex-row">
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
              <button className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg">
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
        <div className="m-3 w-full bg-darkbackground lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 rounded-[12px]">
          <div className="max-w-md w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
            {/* Header Section */}
            <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center mb-4 gap-2 sm:gap-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/UcvpeC9grJmOb9auHlYXtEFLfRLO8btGQ6SLEoEZqnI.jpg"
                alt="Profile picture"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
              />
              <div className="flex-1 min-w-0">
                <h2 className="font-semibold text-sm sm:text-base">
                  Relevant Context
                  <span className="text-gray-500"> • Design</span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm truncate">
                  UX/UI Designer
                  <span className="text-blue-500">💡</span> Product Design
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Now <span className="text-gray-500">•🌐</span>
                </p>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <button className="text-blue-600 font-semibold text-sm sm:text-base whitespace-nowrap">+ Follow</button>
                <button className="text-gray-500 text-sm sm:text-base">•••</button>
              </div>
            </div>

            {/* Content Section */}
            <div className="mb-4 space-y-3">
              <TextRevealAnimation text={relevantContext} />
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
    </>
  );
}

export default Formmain;
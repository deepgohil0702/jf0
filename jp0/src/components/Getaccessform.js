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

const Getaccessform = () =>  {
  const relevantContext = `Hiring for Data Analyst

Location - Bangalore
Work from office - 2days/week
Full time - permeant position

Required skills - - Python - SQL - SAS - Excel - Pyspark - Exposure to Bigdata and Hadoop data lake is a big plus - Knowledge of cloud platforms like GCP, Azure, AWS is a big plus 

Preety Lamsal 

eMail   : Preety.Lamsal@myaliket.com

Mobile  : + 91-8104680835 `;
return (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="max-w-md w-full p-6">
      <div className="text-center">
        <img 
          alt="Claude logo" 
          src="https://res.cloudinary.com/dbhqlneyn/image/upload/v1738833674/Group_7_flgwcg.jpg"
          className="mx-auto h-12 w-auto mb-6"
        />
        <h1 className="text-2xl font-bold mb-4">
        Get Beta access
        </h1>
        <p className="mb-8">
          AI that automates your job applications from resume parsing to personalized email submissions so you can focus on preparing for interviews.
        </p>
        
        <div className="space-y-4">
          <input 
            placeholder="Enter your Name" 
            type="text"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input 
            placeholder="Enter your Email" 
            type="email"
            className="w-full px-4 py-2 border rounded-md"
          />
<input 
  placeholder="Enter your Phone" 
  type="tel"
  pattern="[+][0-9]{2}-[0-9]{10}"
  className="w-full px-4 py-2 border rounded-md"
/>
          <button className="w-full py-2 px-4 rounded-md bg-buttoncolour text-white">
            Submit
          </button>
          
          <p className="text-sm">
            By continuing, you agree to Jowb's{" "}
            <a href="#">Consumer Terms and Usage Policy</a>,{" "}
            and acknowledge their{" "}
            <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Getaccessform;
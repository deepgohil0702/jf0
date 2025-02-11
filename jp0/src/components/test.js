import React, { useState } from 'react';
import { AlertCircle, Upload, MessageCircle, ThumbsUp, Share2, Send } from 'lucide-react';
import { useEffect, useRef } from "react";

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
const Getaccessform = () => {
  const [email, setEmail] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [inputFile, setInputFile] = useState('');
  const [keywords, setKeywords] = useState('python,java');
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const relevantContext = `Hiring for Data Analyst

  Location - Bangalore
  Work from office - 2days/week
  Full time - permeant position
  
  Required skills - - Python - SQL - SAS - Excel - Pyspark - Exposure to Bigdata and Hadoop data lake is a big plus - Knowledge of cloud platforms like GCP, Azure, AWS is a big plus 
  
  Preety Lamsal 
  
  eMail   : Preety.Lamsal@myaliket.com
  
  Mobile  : + 91-8104680835 `;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('secret_code', secretCode);
      formData.append('input_file', 'data.csv');
      formData.append('keywords', 'python,java');
      formData.append('pdf_file', pdfFile);

      const response = await fetch('https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/newuser', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to start pipeline');
      }

      const data = await response.json();
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background text-[#333] min-h-screen flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="max-w-md w-full flex flex-col items-center">
        <img 
              src="https://res.cloudinary.com/dbhqlneyn/image/upload/v1738833674/Group_7_flgwcg.jpg" 
              alt="Claude logo" 
              className="mb-4 w-[50px] h-[50px]"
            />
            <h1 className="text-4xl lg:text-5xl font-geist font-bold text-center mb-4">
              Your Career, Accelerated
            </h1>
            <p className="text-s text-center mb-8 font-geist">
              AI that automates your job applications from resume parsing to personalized email submissions so you can focus on preparing for interviews.
            </p>
          
          <div className="bg-[#faf9f5] p-8 rounded-3xl shadow-lg w-full border border-[#e5e5e5]">
            <form onSubmit={handleSubmit} className="space-y-4">

            <input
                  type="text"
                  placeholder="Enter your Phone Name"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                 className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
                  required
                />

                <input
                  type="text"
                  placeholder="Enter your Phone number"
                  value={secretCode}
                  onChange={(e) => setSecretCode(e.target.value)}
                 className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
                  required
                />
         


              {error && (
                <div className="flex items-center p-4 bg-red-50 text-red-600 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p>{error}</p>
                </div>
              )}

              {success && (
                <div className="flex items-center p-4 bg-green-50 text-green-600 rounded-lg">
                  <p>Pipeline started successfully!</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                // className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Starting Pipeline...' : 'Start Pipeline'}
              </button>
            </form>
          </div>
        </div>
      </div>

      

      </div>
  );
};

export default Getaccessform;
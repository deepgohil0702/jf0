import React, { useState } from 'react';
import { AlertCircle, Upload, MessageCircle, ThumbsUp, Share2, Send } from 'lucide-react';
import { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

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

const Formmain = () => {
  const [email, setEmail] = useState('');
  const [secretCode, setSecretCode] = useState('');
  const [inputFile, setInputFile] = useState('');
  const [keywords, setKeywords] = useState('python,java');
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const relevantContext = `
  Hiring for Data Analyst

  Location - Bangalore
  Work from office - 2days/week
  Full time - permeant position
  
  Required skills - - Python - SQL - SAS - Excel - Pyspark - Exposure to Bigdata and Hadoop data lake is a big plus - Knowledge of cloud platforms like GCP, Azure, AWS is a big plus 
  
  Preety Lamsal 
  
  eMail   : Preety.Lamsal@myaliket.com
  
  Mobile  : + 91-8104680835 `;

  const navigate = useNavigate();

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

      const response = await fetch('https://jowb.vercel.app/startpipeline', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to start pipeline');
      }

      const data = await response.json();
      setResponseData(data);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (responseData?.job_id) {
      navigator.clipboard.writeText(responseData.job_id);
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
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
                required
              />

              <input
                type="password"
                placeholder="Enter your auth code"
                value={secretCode}
                onChange={(e) => setSecretCode(e.target.value)}
                className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
                required
              />

              <div>
                <div className="flex items-center justify-center w-full">
                  <input
                    type="file"
                    className="w-full border border-gray-300 py-2 px-4 rounded-lg"
                    accept=".pdf"
                    onChange={(e) => setPdfFile(e.target.files[0])}
                    required
                  />
                </div>
                <a 
            href="https://myaccount.google.com/apppasswords" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline mb-2 block text-right"
          >
            Get your auth code here
          </a>
                {pdfFile && (
                  <p className="mt-2 text-sm text-gray-600">
                    Selected file: {pdfFile.name}
                  </p>
                )}
              </div>

              {error && (
                <div className="flex items-center p-4 bg-red-50 text-red-600 rounded-lg">
                  <AlertCircle className="h-5 w-5 mr-2" />
                  <p>{error}</p>
                </div>
              )}

              {success && responseData && (
                <div className="p-4 bg-green-50 rounded-lg space-y-2">
                  <pre className="text-green-600 whitespace-pre-wrap break-words text-sm">
                    {JSON.stringify(responseData.job_id, null, 2)}
                  </pre>
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                  >
                    Copy Job ID
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Starting Pipeline...' : 'Start Pipeline'}
              </button>
              
              <div className="border-t border-gray-300" />
              
              <button
                onClick={() => navigate('/status')}
                className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check status
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mx-0 my-2 lg:m-3 w-full bg-darkbackground lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 rounded-[12px]">
        <div className="max-w-md w-full bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md">
          {/* Header Section */}
          <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center mb-4 gap-2 sm:gap-0">
            <img
              src="https://storage.googleapis.com/a1aa/image/UcvpeC9grJmOb9auHlYXtEFLfRLO8btGQ6SLEoEZqnI.jpg"
              alt="Profile picture"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
            />
            <div className="flex-1 min-w-0">
              <h2 className="font-semibold text-sm sm:text-base">
                Preety Lamsal
                <span className="text-gray-500"> • Design</span>
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm truncate">
                Sr.HR Executive
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
  );
};

export default Formmain;
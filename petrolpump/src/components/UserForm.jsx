import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AmazingPrizes from './AmazingPrizes';

const gradientPresets = [
  ['#cc0113', '#cf1122', '#111272', '#ededf4'],
];

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    image: null,
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);
  const [currentGradient, setCurrentGradient] = useState(gradientPresets[0]);

  const getRandomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradientPresets.length);
    return gradientPresets[randomIndex];
  };

  useEffect(() => {
    if (isLoading) {
      setCurrentGradient(getRandomGradient());
    }
  }, [isLoading]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(
        'https://ocrcodesimpleonlyocr.vercel.app/ocr/',
        formDataObj,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }
      );
      
      setSubmissionData(response.data.data);
      setFormData({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        date: '',
        image: null,
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert(`Submission failed! ${error.response?.data?.error || ''}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animated-gradient {
            background: linear-gradient(
              -45deg, 
              ${currentGradient[0]}, 
              ${currentGradient[1]}, 
              ${currentGradient[2]}, 
              ${currentGradient[3]}
            );
            background-size: 400% 400%;
            animation: gradient 15s ease infinite;
            min-height: 400px;
          }
        `}
      </style>
      <div className="hidden md:block absolute top-4 left-4 z-10">
  <img
    src="https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png"
    alt="Bill Reference"
    className="w-24 h-auto opacity-90 hover:opacity-100 transition-opacity" // Reduced from w-48 to w-24
  />
</div>

{/* Mobile Image - Centered Top */}
<div className="md:hidden w-full text-center pt-4">
  <img
    src="https://companieslogo.com/img/orig/HINDPETRO.NS-6dfea446.png"
    alt="Bill Reference"
    className="mx-auto w-1/2 max-w-[120px] h-auto" // Reduced width and added max-width
  />
</div>
      
      <div className="min-h-screen flex items-center justify-center bg-[#ffffff] p-4">
        {!isLoading && !isSubmitted && (
          <form
            onSubmit={handleSubmit}
            className="bg-[#cc0113] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg"
          >
<h1 className="text-2xl font-bold mb-6 text-[#ffffff] text-center text-custom-blue">
  Submit Your Bill
</h1>
            <div className="mb-4">
              <label className="block text-custom-blue text-sm font-bold mb-2">First Name</label>
              <input
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-custom-blue text-sm font-bold mb-2">Last Name</label>
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-custom-blue text-sm font-bold mb-2">Mobile Number</label>
              <input
                name="mobileNumber"
                type="tel"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                pattern="[0-9]{10}"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-custom-blue text-sm font-bold mb-2">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-custom-blue text-sm font-bold mb-2">Date</label>
              <input
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#ffffff] text-sm font-bold mb-2">Bill Image</label>
              <input
                name="image"
                type="file"
                onChange={handleFileChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                accept="image/*"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-[#010269] hover:bg-[#111272] text-white font-bold py-2 px-4 rounded w-full transition-all duration-200"
            >
              Submit
            </button>
          </form>
        )}

        {isLoading && (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg animated-gradient">
            <div className="flex items-center justify-center h-full">
              <p className="text-white font-bold text-xl animate-pulse">
                Processing Your Submission...
              </p>
            </div>
          </div>
        )}

        {isSubmitted && (
          <div className="bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4 w-full max-w-lg text-center">
            <h2 className="text-xl md:text-2xl font-bold text-green-600 mb-3 md:mb-4">
              <span className="inline-block mr-2">🎉</span>
              Submission Successful!
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg mb-3 md:mb-4">
              Thank you for participating! Your entry has been recorded.
            </p>

            {submissionData && (
              <div className="mb-4 md:mb-6">
                <p className="text-gray-700 mb-2 text-sm md:text-base">
                  Your bill number: <span className="font-bold break-all">{submissionData.bill_number}</span>
                </p>
                <p className="text-gray-700 text-sm md:text-base">
                  Your amount: <span className="font-bold">₹{submissionData.amount?.toFixed(2) || '0.00'}</span>
                </p>
                <p className="text-xs md:text-sm text-red-500 mt-1 md:mt-2">
                  If this amount is incorrect, please contact admin
                </p>
              </div>
            )}

            <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
                onClick={() => {
                  setIsSubmitted(false);
                  navigate('/support');
                }}
               className="bg-[#cc0113] hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-all duration-200 text-sm md:text-base">
    Contact Admin
  </button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#010269] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-200 text-sm md:text-base"
              >
                Submit Another
              </button>
            </div>
          </div>
        )}
      </div>
      <AmazingPrizes />
    </>
  );
};

export default UserForm;
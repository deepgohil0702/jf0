// import { MoveDown } from "lucide-react";
// import { ThumbsUp, MessageCircle, Share2, Send } from 'lucide-react';
// import { useState, useEffect, useRef } from "react";
// import axios from "axios";

// const TextRevealAnimation = ({ text }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const typingSpeed = 50;

//   useEffect(() => {
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex < text.length) {
//         setDisplayedText((prev) => prev + text[currentIndex]);
//         currentIndex += 1;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, typingSpeed);

//     return () => clearInterval(typingInterval);
//   }, [text]);

//   return (
//     <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line">
//       {displayedText}
//       {displayedText.length < text.length && <span className="blinking-cursor">|</span>}
//     </p>
//   );
// };

// const Formmain = () => {
//   const relevantContext = `Hiring for Data Analyst

// Location - Bangalore
// Work from office - 2days/week
// Full time - permeant position

// Required skills - - Python - SQL - SAS - Excel - Pyspark - Exposure to Bigdata and Hadoop data lake is a big plus - Knowledge of cloud platforms like GCP, Azure, AWS is a big plus 

// Preety Lamsal 

// eMail   : Preety.Lamsal@myaliket.com

// Mobile  : + 91-8104680835 `;

//   const fileInputRef = useRef(null);
//   const [formState, setFormState] = useState({
//     email: "",
//     secretCode: "",
//     fileName: "",
//     pdfFile: null
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormState(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileSelect = (e) => {
//     const file = e.target.files[0];
//     if (file && file.type === "application/pdf") {
//       setFormState(prev => ({
//         ...prev,
//         fileName: file.name,
//         pdfFile: file
//       }));
//       setError("");
//     } else {
//       setFormState(prev => ({
//         ...prev,
//         fileName: "",
//         pdfFile: null
//       }));
//       setError("Please select a valid PDF file");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formState.pdfFile) {
//       setError("Please select a PDF file");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setSuccess(false);

//     const formData = new FormData();
//     formData.append("email", formState.email);
//     formData.append("secret_code", formState.secretCode);
//     formData.append("input_file", "resume.csv");  // default value
//     formData.append("keywords", "python,java");    // default value
//     formData.append("pdf_file", formState.pdfFile);

//     try {
//       const response = await axios.post(
//         "https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/startpipeline",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       if (response.data.result === "sucess") {
//         setSuccess(true);
//         // Reset form
//         setFormState({
//           email: "",
//           secretCode: "",
//           fileName: "",
//           pdfFile: null
//         });
//         if (fileInputRef.current) {
//           fileInputRef.current.value = "";
//         }
//       }
//     } catch (err) {
//       console.error("Submission error:", err);
//       setError(err.response?.data?.detail || "Failed to submit form");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const AuthCard = () => (
//     <div className="bg-[#faf9f5] p-8 rounded-3xl shadow-lg w-full border border-[#e5e5e5]">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your Email"
//           value={formState.email}
//           onChange={handleInputChange}
//           className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
//           required
//         />
//         <input
//           type="text"
//           name="secretCode"
//           placeholder="Enter your auth code"
//           value={formState.secretCode}
//           onChange={handleInputChange}
//           className="w-full border border-gray-300 py-2 px-4 rounded-lg mb-4"
//           required
//         />
//         <div className="mb-4">
//           <div className="relative">
//             <input
//               type="file"
//               ref={fileInputRef}
//               accept=".pdf"
//               onChange={handleFileSelect}
//               className="w-full border border-gray-300 py-2 px-4 rounded-lg"
//               required
//             />
//           </div>
//           {formState.fileName && (
//             <p className="text-sm text-gray-600 mt-2">
//               Selected file: {formState.fileName}
//             </p>
//           )}
//         </div>

//         <button 
//           type="submit"
//           disabled={loading || !formState.pdfFile}
//           className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? "Processing..." : "Submit"}
//         </button>

//         {error && (
//           <p className="text-red-500 text-sm mt-2">{error}</p>
//         )}

//         {success && (
//           <div className="mt-2 p-3 bg-green-50 rounded-lg">
//             <p className="text-green-700 text-sm">Successfully submitted!</p>
//           </div>
//         )}

//         <p className="text-xs text-gray-500 text-center mt-4">
//           By continuing, you agree to Jowb's{" "}
//           <a href="#" className="underline">Consumer Terms and Usage Policy</a>,{" "}
//           and acknowledge their{" "}
//           <a href="#" className="underline">Privacy Policy</a>.
//         </p>
//       </form>
//     </div>
//   );

//   // Rest of the component remains the same
//   return (
//     <>
//       <style jsx>{`
//         @keyframes blink {
//           0% { opacity: 1; }
//           50% { opacity: 0; }
//           100% { opacity: 1; }
//         }

//         .blinking-cursor {
//           animation: blink 1s infinite;
//         }
//       `}</style>
      
//       <div className="bg-background text-[#333] min-h-screen flex flex-col lg:flex-row">
//         {/* Left Section */}
//         <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
//           <div className="max-w-md w-full flex flex-col items-center">
//             <img 
//               src="https://res.cloudinary.com/dbhqlneyn/image/upload/v1738833674/Group_7_flgwcg.jpg" 
//               alt="Claude logo" 
//               className="mb-4 w-[50px] h-[50px]"
//             />
//             <h1 className="text-4xl lg:text-5xl font-geist font-bold text-center mb-4">
//               Your Career, Accelerated
//             </h1>
//             <p className="text-s text-center mb-8 font-geist">
//               AI that automates your job applications from resume parsing to personalized email submissions so you can focus on preparing for interviews.
//             </p>
//             <AuthCard />
//           </div>
//         </div>

      //   {/* Right Section */}
      //   <div className="mx-0 my-2 lg:m-3 w-full bg-darkbackground lg:w-1/2 flex items-center justify-center p-4 sm:p-6 lg:p-12 rounded-[12px]">
      //     <div className="max-w-md w-full bg-white p-3 sm:p-4 lg:p-6 rounded-lg shadow-md">
      //       {/* Header Section */}
      //       <div className="flex flex-wrap sm:flex-nowrap items-start sm:items-center mb-4 gap-2 sm:gap-0">
      //         <img
      //           src="https://storage.googleapis.com/a1aa/image/UcvpeC9grJmOb9auHlYXtEFLfRLO8btGQ6SLEoEZqnI.jpg"
      //           alt="Profile picture"
      //           className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
      //         />
      //         <div className="flex-1 min-w-0">
      //           <h2 className="font-semibold text-sm sm:text-base">
      //             Preety Lamsal
      //             <span className="text-gray-500"> • Design</span>
      //           </h2>
      //           <p className="text-gray-500 text-xs sm:text-sm truncate">
      //             Sr.HR Executive
      //             <span className="text-blue-500">💡</span> Product Design
      //           </p>
      //           <p className="text-gray-500 text-xs sm:text-sm">
      //             Now <span className="text-gray-500">•🌐</span>
      //           </p>
      //         </div>
      //         <div className="flex items-center gap-2 ml-auto">
      //           <button className="text-blue-600 font-semibold text-sm sm:text-base whitespace-nowrap">+ Follow</button>
      //           <button className="text-gray-500 text-sm sm:text-base">•••</button>
      //         </div>
      //       </div>

      //       {/* Content Section */}
      //       <div className="mb-4 space-y-3">
      //         <TextRevealAnimation text={relevantContext} />
      //       </div>

      //       {/* Reactions Section */}
      //       <div className="flex items-center mb-4">
      //         <div className="flex -space-x-2">
      //           <img
      //             src="https://storage.googleapis.com/a1aa/image/baQuy7W_O0SqXE47fKwymr2tbMOEw0Ci1oXLPEg_shc.jpg"
      //             alt="Reaction icon 1"
      //             className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
      //           />
      //           <img
      //             src="https://storage.googleapis.com/a1aa/image/tkyQX2uo1E6HrhdPTdPgcQWJjdLkVJgHVNDSun-gvvA.jpg"
      //             alt="Reaction icon 2"
      //             className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
      //           />
      //           <img
      //             src="https://storage.googleapis.com/a1aa/image/mhhBC_liqD0hiXoNcU2f-9AsrF-TarNAcPqc4rXCpGg.jpg"
      //             alt="Reaction icon 3"
      //             className="w-5 h-5 sm:w-6 sm:h-6 rounded-full"
      //           />
      //         </div>
      //         <p className="text-gray-500 ml-2 text-sm">60</p>
      //       </div>

      //       {/* Action Buttons */}
      //       <div className="grid grid-cols-2 sm:flex sm:justify-between text-gray-500 text-xs sm:text-sm gap-2">
      //         <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
      //           <ThumbsUp className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
      //           Like
      //         </button>
      //         <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
      //           <MessageCircle className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
      //           Comment
      //         </button>
      //         <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
      //           <Share2 className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
      //           Repost
      //         </button>
      //         <button className="flex items-center justify-center sm:justify-start hover:bg-gray-100 p-2 rounded-lg">
      //           <Send className="mr-1 w-3 h-3 sm:w-4 sm:h-4" />
      //           Send
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
//     </>
//   );
// };

// export default Formmain;

// import React, { useState } from 'react';
// import { AlertCircle, Upload } from 'lucide-react';
// // import { Alert, AlertDescription } from '@/components/ui/alert';

// const Formmain = () => {
//   const [email, setEmail] = useState('');
//   const [secretCode, setSecretCode] = useState('');
//   const [inputFile, setInputFile] = useState('');
//   const [keywords, setKeywords] = useState('python,java');
//   const [pdfFile, setPdfFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);

//     try {
//       const formData = new FormData();
//       formData.append('email', email);
//       formData.append('secret_code', secretCode);
//       formData.append('input_file', inputFile);
//       formData.append('keywords', keywords);
//       formData.append('pdf_file', pdfFile);

//       const response = await fetch('https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/startpipeline', {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         throw new Error('Failed to start pipeline');
//       }

//       const data = await response.json();
//       setSuccess(true);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Secret Code</label>
//           <input
//             type="password"
//             value={secretCode}
//             onChange={(e) => setSecretCode(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Input File</label>
//           <input
//             type="text"
//             value={inputFile}
//             onChange={(e) => setInputFile(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">Keywords</label>
//           <input
//             type="text"
//             value={keywords}
//             onChange={(e) => setKeywords(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="python,java"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium mb-1">PDF File</label>
//           <div className="flex items-center justify-center w-full">
//             <label className="w-full flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
//               <Upload className="w-8 h-8" />
//               <span className="mt-2 text-base">Select PDF file</span>
//               <input
//                 type="file"
//                 className="hidden"
//                 accept=".pdf"
//                 onChange={(e) => setPdfFile(e.target.files[0])}
//                 required
//               />
//             </label>
//           </div>
//           {pdfFile && (
//             <p className="mt-2 text-sm text-gray-600">
//               Selected file: {pdfFile.name}
//             </p>
//           )}
//         </div>

//         {error && (
//           <><p>error</p></>
//           // <Alert variant="destructive">
//           //   <AlertCircle className="h-4 w-4" />
//           //   <AlertDescription>{error}</AlertDescription>
//           // </Alert>
//         )}

//         {success && (
//           <><p>sucess</p></>
//         )}

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Starting Pipeline...' : 'Start Pipeline'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Formmain;


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
const Formmain = () => {
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

      const response = await fetch('https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/startpipeline', {
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
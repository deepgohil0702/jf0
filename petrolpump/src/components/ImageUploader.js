import React, { useState } from 'react';

export default function ImageUploader() {
  const [files, setFiles] = useState(Array(3).fill(null));
  const [descriptions, setDescriptions] = useState(Array(3).fill(''));
  const [amounts, setAmounts] = useState(Array(3).fill(''));
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData();
    
    files.forEach((file, index) => {
      if (file) {
        formData.append(`image${index + 1}`, file);
        formData.append(`description${index + 1}`, descriptions[index]);
        formData.append(`amount${index + 1}`, amounts[index]);
      }
    });

    try {
      const response = await fetch('https://symmetrical-space-rotary-phone-9wg7r4qxxq427x44-8000.app.github.dev/api/submit-images', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setResponse(result);
    } catch (error) {
      setResponse({ success: false, error: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload Prizes</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {[0, 1, 2].map((index) => (
            <div key={index} className="border rounded-lg p-4 bg-gray-50">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image {index + 1}
                </label>
                <input
                  type="file"
                  onChange={(e) => handleFileChange(index, e.target.files[0])}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  accept="image/*"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount {index + 1}
                </label>
                <input
                  type="number"
                  value={amounts[index]}
                  onChange={(e) => {
                    const newAmounts = [...amounts];
                    newAmounts[index] = e.target.value;
                    setAmounts(newAmounts);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter amount"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description {index + 1}
                </label>
                <textarea
                  value={descriptions[index]}
                  onChange={(e) => {
                    const newDescriptions = [...descriptions];
                    newDescriptions[index] = e.target.value;
                    setDescriptions(newDescriptions);
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  placeholder="Enter description"
                  rows="3"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Uploading...' : 'Submit All Images'}
          </button>
        </form>

        {response && (
          <div className={`mt-6 p-4 rounded-lg ${response.success ? 'bg-green-100' : 'bg-red-100'}`}>
            <h3 className={`text-lg font-medium ${response.success ? 'text-green-800' : 'text-red-800'}`}>
              {response.success ? 'Success!' : 'Error'}
            </h3>
            <pre className="mt-2 whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
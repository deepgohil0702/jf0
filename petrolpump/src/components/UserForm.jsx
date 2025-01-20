import React, { useState } from 'react';

const UserForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    billImage: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const submitFormData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          submitFormData.append(key, formData[key]);
        }
      });

      const response = await fetch('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/submit-bill', {
        method: 'POST',
        body: submitFormData,
      });

      const data = await response.json();
      
      if (data.success) {
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          date: '',
          billImage: null
        });
        alert('Bill submitted successfully!');
      } else {
        setError(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit bill. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        billImage: file
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Submit Bill</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => setFormData(prev => ({...prev, firstName: e.target.value}))}
            required
          />
          <input
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => setFormData(prev => ({...prev, lastName: e.target.value}))}
            required
          />
        </div>
        
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Mobile Number"
          type="tel"
          value={formData.mobileNumber}
          onChange={(e) => setFormData(prev => ({...prev, mobileNumber: e.target.value}))}
          required
        />
        
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
          required
        />
        
        <input
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData(prev => ({...prev, date: e.target.value}))}
          required
        />
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <input
            type="file"
            id="billImage"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
            required
          />
          <label
            htmlFor="billImage"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <svg 
              className="w-8 h-8 text-gray-400 mb-2"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <span className="text-sm text-gray-500">
              {formData.billImage ? formData.billImage.name : 'Upload bill image'}
            </span>
          </label>
        </div>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          className={`w-full px-4 py-2 text-white rounded-lg ${
            loading 
              ? 'bg-blue-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Bill'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Getaccessform = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('phone', formData.phone);

      const response = await fetch('https://8000-idx-forjobdeep-1738350784277.cluster-7ubberrabzh4qqy2g4z7wgxuw2.cloudworkstations.dev/newuser', {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      if (data.result === 'success') {
        setFormData({ name: '', email: '', phone: '' }); // Reset form
        navigate('/'); // Redirect to home page
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img 
            src="https://res.cloudinary.com/dbhqlneyn/image/upload/v1738833674/Group_7_flgwcg.jpg" 
            alt="Logo" 
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Get BETA access
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            AI that automates your job applications from resume parsing to personalized email submissions so you can focus on preparing for interviews.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {error && (
              <div className="flex items-center p-3 bg-red-50 text-red-700 rounded-md">
                <AlertCircle className="h-5 w-5 mr-2" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-buttoncolour text-white py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Get Access'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Getaccessform;
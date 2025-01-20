import { useState } from 'react';
import AmazingPrizes from "./AmazingPrizes";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    date: '',
    billImage: null
  });
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFormData({ ...formData, billImage: file });
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload an image file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus({ success: false, message: '' });

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const response = await fetch('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/submit-bill', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Bill submitted successfully!'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          date: '',
          billImage: null
        });
        setPreview(null);
      } else {
        throw new Error(result.error || 'Failed to submit bill');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fae9e5] flex flex-col items-center py-8">
      <div className="w-full max-w-4xl px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-1/2 p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Bill</h2>
              {submitStatus.message && (
                <div className={`p-3 rounded mb-4 ${
                  submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    pattern="[A-Za-z ]+"
                    title="Please enter valid first name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    pattern="[A-Za-z ]+"
                    title="Please enter valid last name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter valid 10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bill Image</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleImageChange}
                        accept="image/*"
                        required
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                      >
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  }`}
                >
                  {loading ? 'Submitting...' : 'Submit Bill'}
                </button>
              </form>
            </div>

            {/* Preview Section */}
            <div className="md:w-1/2 bg-gray-50 p-6">
              <div className="h-full flex items-center justify-center">
                {preview ? (
                  <img 
                    src={preview} 
                    alt="Bill Preview" 
                    className="max-w-full max-h-[400px] object-contain rounded-lg shadow"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="mt-2">Upload an image to see preview</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AmazingPrizes />
    </div>
  );
};

export default UserForm;
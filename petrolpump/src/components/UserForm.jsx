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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, billImage: file });
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('mobileNumber', formData.mobileNumber);
    data.append('email', formData.email);
    data.append('date', formData.date);
    data.append('billImage', formData.billImage);

    try {
      const response = await fetch('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/submit-bill', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        setFormData({ firstName: '', lastName: '', mobileNumber: '', email: '', date: '', billImage: null });
        setPreview(null);
        alert('Form submitted successfully!');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fae9e5] flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Form Section */}
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Submit Bill</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Bill Image</label>
                  <div className="relative">
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="hidden"
                      accept="image/*"
                      required
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="w-full px-3 py-2 rounded border border-dashed border-gray-400 hover:border-blue-500 cursor-pointer flex items-center justify-center text-gray-600 hover:text-blue-500"
                    >
                      {formData.billImage ? formData.billImage.name : 'Choose a file'}
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2 rounded text-white font-semibold transition ${
                    loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
                  }`}
                >
                  {loading ? 'Submitting...' : 'Submit Bill'}
                </button>
              </form>
            </div>

            {/* Preview Section */}
            <div className="md:w-1/2 bg-gray-50 p-4 flex items-center justify-center">
              {preview ? (
                <img 
                  src={preview} 
                  alt="Bill Preview" 
                  className="max-w-full max-h-[300px] rounded shadow"
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
      <AmazingPrizes/>
    </div>
  );
};

export default UserForm;

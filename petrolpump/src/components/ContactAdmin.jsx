import React, { useState } from 'react';
import axios from 'axios';

const ContactAdmin = () => {
    const [formData, setFormData] = useState({
        phoneNumber: '',
        query: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        // Basic validation
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            setError('Please enter a valid 10-digit phone number');
            return;
        }
        
        if (formData.query.trim().length < 10) {
            setError('Query must be at least 10 characters');
            return;
        }

        setIsSubmitting(true);
        
        try {
            const response = await axios.post(
                'https://backendpetrol.vercel.app/api/contact-admin',
                {
                    phone_number: formData.phoneNumber,
                    query: formData.query
                }
            );
            
            if (response.data.success) {
                setSubmitSuccess(true);
                setFormData({ phoneNumber: '', query: '' });
                setTimeout(() => setSubmitSuccess(false), 3000);
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Contact Admin
                </h2>
                
                {submitSuccess && (
                    <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        Query submitted successfully!
                    </div>
                )}
                
                {error && (
                    <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Enter 10-digit phone number"
                            maxLength="10"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="query" className="block text-sm font-medium text-gray-700">
                            Your Query
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleInputChange}
                            rows="4"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Describe your issue or question"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-300"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Query'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactAdmin;
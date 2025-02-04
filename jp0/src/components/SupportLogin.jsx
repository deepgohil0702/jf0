import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SupportLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Pass@123456') {
            localStorage.setItem('support_authenticated', 'true');
            // Redirect to the appropriate route based on where they were trying to go
            if (location.state?.from === '/img') {
                navigate('/img');
            } else {
                navigate('/admin');
            }
        } else {
            setError('Invalid password');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold text-gray-800">
                    Admin Access Required
                </h2>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-md">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            placeholder="Enter admin password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Access Admin Area
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SupportLogin;
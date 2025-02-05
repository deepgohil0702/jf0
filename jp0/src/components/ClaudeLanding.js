import React from 'react';
import { MessageSquare, FileText, Users } from 'lucide-react';

const Button = ({ children, className = '' }) => (
  <button 
    className={`px-4 py-2 rounded-md text-white transition-colors ${className}`}
  >
    {children}
  </button>
);

const ClaudeLanding = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header */}
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center space-x-2">
          <div className="text-orange-600 text-2xl">✴</div>
          <span className="text-xl font-semibold">Claude</span>
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
          <Button className="bg-orange-700 hover:bg-orange-800">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif mb-4">Meet Claude</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Claude is a next generation AI assistant built by Anthropic and trained to
          be safe, accurate, and secure to help you do your best work.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Chat Interface */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
          <div className="bg-white rounded-lg p-4 shadow">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm">
                AI
              </div>
              <span className="text-gray-700">Build a scatter plot to visualize the relationship between page load time (in seconds) and user session duration (in minutes).</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 mb-2">Here's a scatter plot to visualize the relationship between page load time and user session duration:</p>
              <div className="bg-gray-200 rounded p-2 inline-block">
                <span className="text-gray-600">Scatter Plot</span>
                <div className="text-xs text-gray-500">Open component</div>
              </div>
            </div>
            <div className="h-48 bg-gray-900 rounded-lg"></div>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-6 w-6" />
              <h2 className="text-2xl font-serif">Create with Claude</h2>
            </div>
            <p className="text-gray-600">
              Draft and iterate on websites, graphics, documents, and code alongside
              your chat with Artifacts.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6" />
              <h2 className="text-2xl font-serif">Bring your knowledge</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6" />
              <h2 className="text-2xl font-serif">Share and collaborate with your team</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaudeLanding;
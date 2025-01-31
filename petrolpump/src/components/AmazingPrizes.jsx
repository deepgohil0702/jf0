import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AmazingPrizes = () => {
  const [prizes, setPrizes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://backendpetrol.vercel.app/api/latest-images'
        );
        
        if (response.data.success && response.data.data.images) {
          const formattedPrizes = response.data.data.images.map(image => ({
            description: image.description,
            imgSrc: image.url,
            amount: image.amount
          }));
          setPrizes(formattedPrizes);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="text-center p-8">Loading prizes...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-8">Error loading prizes: {error}</div>;
  }

  return (
    <div className="bg-[#ffffff] flex flex-col items-center p-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Arial Bold, sans-serif' }}>
          Join To Win
        </h1>
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: 'Arial Bold, sans-serif' }}>
          Amazing Prizes!
        </h2>
      </div>

      {/* Prizes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className="border-2 border-[#ffdd00] p-4 flex flex-col items-center"
          >
            <img
              src={prize.imgSrc}
              alt={prize.description}
              className="mb-4 h-48 object-cover"
              width={200}
              height={200}
            />
            <div className="text-center">
              <p
                className="font-semibold mb-2"
                style={{ fontFamily: 'Arial Bold, sans-serif' }}
              >
                {prize.description}
              </p>
              <p className="text-lg font-bold text-blue-600">
                ₹{prize.amount.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p
          className="text-xl text-blue-600 font-semibold"
          style={{ fontFamily: 'Arial Bold, sans-serif' }}
        >
          <i className="fas fa-star text-purple-500"></i> and many more...
        </p>
      </div>
    </div>
  );
};

export default AmazingPrizes;
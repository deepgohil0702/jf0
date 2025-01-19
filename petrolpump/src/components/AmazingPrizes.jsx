import React from 'react';

const AmazingPrizes = () => {
  return (
    <div className="bg-bg-[#fae9e5] flex flex-col items-center p-6">
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
        {[
          {
            name: 'Vision Pro',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/snSdgbWuyt4aIlQmZJycejrrpJMD2LiFfzVtHbLESNMfBeaQB.jpg',
          },
          {
            name: 'MacBook Pro',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/lZjxaM3NHGq7I9RcdnTVbLroFZKe1vHzxg4ezMW2WHy4AvGUA.jpg',
          },
          {
            name: 'Apple Watch',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/1Pjji20IupK0ExzA7XfsVyK7Svh5IJf4iDNtPb0IxPAeBeaQB.jpg',
          },
          {
            name: 'AirPods Pro',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/TG9dJye3iTxiUKtLFEidifIK7WQC1fI4YziDV0CwecIrD8aQB.jpg',
          },
          {
            name: 'iPhone 14 Pro',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/35wakEIBXuJODl5HY0Wl6lSjhfTXS5qXES10Wescyoy7AvGUA.jpg',
          },
          {
            name: 'iPad',
            imgSrc:
              'https://storage.googleapis.com/a1aa/image/t0HseefZ1sPTzJGFD9VK7YqSoygbbK9xgoPX5zEUZZM6BeaQB.jpg',
          },
        ].map((prize, index) => (
          <div
            key={index}
            className="border-2 border-black p-4 flex flex-col items-center"
          >
            <img
              src={prize.imgSrc}
              alt={prize.name}
              className="mb-4"
              width={200}
              height={200}
            />
            <p
              className="text-center font-semibold"
              style={{ fontFamily: 'Arial Bold, sans-serif' }}
            >
              {prize.name}
            </p>
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

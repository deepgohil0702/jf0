import React from 'react';

const Winner = () => {
  const winners = [
    {
      prize: '1st Prize',
      name: 'John Doe',
      details: 'Won the grand prize in the annual competition.',
    },
    {
      prize: '2nd Prize',
      name: 'Jane Smith',
      details: 'Secured the second position with outstanding performance.',
    },
    {
      prize: '3rd Prize',
      name: 'Alice Johnson',
      details: 'Achieved the third place with remarkable skills.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fae9e5] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Winners List</h1>
      <p>this week</p>
      <div className="flex flex-col space-y-4">
        {winners.map((winner, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 w-80">
            <h2 className="text-xl font-bold text-gray-700">{winner.prize}</h2>
            <p className="text-lg text-gray-800 mt-2">{winner.name}</p>
            <p className="text-gray-600 mt-1">{winner.details}</p>
          </div>
        ))}
      </div>
      <p>last week</p>
      <div className="flex flex-col space-y-4">
        {winners.map((winner, index) => (
          <div key={index} className="bg-white shadow-md rounded p-4 w-80">
            <h2 className="text-xl font-bold text-gray-700">{winner.prize}</h2>
            <p className="text-lg text-gray-800 mt-2">{winner.name}</p>
            <p className="text-gray-600 mt-1">{winner.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winner;
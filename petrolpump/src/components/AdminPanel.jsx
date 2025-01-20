import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api/all-data');
        setData(response.data.data.bills);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-left">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Bill Number</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((bill) => (
              <tr key={bill._id} className="border-t">
                <td className="px-4 py-2">{bill.firstName}</td>
                <td className="px-4 py-2">{bill.date}</td>
                <td className="px-4 py-2">{bill.bill_number}</td>
                <td className="px-4 py-2">{bill.amount}</td>
                <td className="px-4 py-2">{bill.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;

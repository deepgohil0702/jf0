import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [totalEntries, setTotalEntries] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://symmetrical-space-rotary-phone-9wg7r4qxxq427x44-8000.app.github.dev/api/all-data'
        );
        const bills = response.data.data.bills;
        setData(bills);
        setFilteredData(bills);
        calculateStats(bills);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateStats = (data) => {
    const totalEntries = data.length;
    const totalAmount = data.reduce((sum, bill) => sum + (bill.amount || 0), 0);
    setTotalEntries(totalEntries);
    setTotalAmount(totalAmount);
  };

  const handleDateFilter = (e) => {
    const date = e.target.value;
    setSelectedDate(date);

    if (date) {
      const filtered = data.filter((bill) => bill.date === date);
      setFilteredData(filtered);
      calculateStats(filtered);
    } else {
      setFilteredData(data);
      calculateStats(data);
    }
  };

  return (
    <div className="min-h-screen bg-[#fae9e5] p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Panel</h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-lg font-bold text-gray-700">Total Entries</h2>
          <p className="text-2xl text-blue-500">{totalEntries}</p>
        </div>
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-lg font-bold text-gray-700">Total Amount</h2>
          <p className="text-2xl text-green-500">₹{totalAmount}</p>
        </div>
        <div className="bg-white shadow-md rounded p-4 text-center">
          <h2 className="text-lg font-bold text-gray-700">Filter By Date</h2>
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateFilter}
            className="border rounded w-full p-2 text-gray-700"
          />
        </div>
      </div>

      {/* Table */}
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
            {filteredData.length > 0 ? (
              filteredData.map((bill) => (
                <tr key={bill._id} className="border-t">
                  <td className="px-4 py-2">{bill.firstName}</td>
                  <td className="px-4 py-2">{bill.date}</td>
                  <td className="px-4 py-2">{bill.bill_number}</td>
                  <td className="px-4 py-2">₹{bill.amount}</td>
                  <td className="px-4 py-2">{bill.status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-gray-500 py-4"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiAward, FiUsers } from 'react-icons/fi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
      
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 w-64
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
            <FiX
              className="md:hidden cursor-pointer text-gray-600"
              onClick={toggleSidebar}
              size={24}
            />
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <FiHome className="mr-3" size={20} />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/img"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <FiAward className="mr-3" size={20} />
                  Prize
                </Link>
              </li>
              <li>
                <Link
                  to="/winner"
                  className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded"
                >
                  <FiUsers className="mr-3" size={20} />
                  Winners List
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const AdminPanel = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [totalEntries, setTotalEntries] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://backendpetrol.vercel.app/api/all-data'
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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Rest of your existing functions remain the same (calculateStats, handleDateFilter)

  return (
    <div className="min-h-screen bg-[#fae9e5]">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="md:ml-64 p-6">
        {/* Hamburger Menu Button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden mb-4 p-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          <FiMenu size={24} />
        </button>

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
    </div>
  );
};

export default AdminPanel;
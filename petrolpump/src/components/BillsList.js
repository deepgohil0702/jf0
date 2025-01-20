import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BillsList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await axios.get('/api/bills');
        setBills(response.data.data.bills);
      } catch (error) {
        console.error('Error fetching bills:', error);
      }
    };

    fetchBills();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Bills List</h1>
      <div className="grid gap-4">
        {bills.map((bill) => (
          <div
            key={bill._id}
            className="bg-white p-4 rounded shadow-md flex justify-between"
          >
            <div>
              <h3 className="font-bold text-lg">{bill.firstName}</h3>
              <p>{bill.date}</p>
            </div>
            <p className="text-gray-600">{bill.bill_number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BillsList;

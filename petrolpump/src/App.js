import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminPanel from './components/AdminPanel';
import BillsList from './components/BillsList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/bill" element={<BillsList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "tailwindcss/tailwind.css";

// // API Base URL
// const API_BASE_URL = "https://psychic-space-barnacle-g6v4jw5p57whwpvv-8000.app.github.dev/api";

// // SubmitBill Component
// const SubmitBill = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     date: "",
//     billImage: null,
//   });
//   const [response, setResponse] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, billImage: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     Object.keys(formData).forEach((key) => {
//       form.append(key, formData[key]);
//     });

//     try {
//       const res = await axios.post(`${API_BASE_URL}/submit-bill`, form);
//       setResponse(res.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Submit Bill</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="firstName"
//           placeholder="First Name"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="lastName"
//           placeholder="Last Name"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           name="mobileNumber"
//           placeholder="Mobile Number"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="date"
//           name="date"
//           value={formData.date}
//           onChange={handleChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="file"
//           name="billImage"
//           onChange={handleFileChange}
//           className="block w-full p-2 border border-gray-300 rounded"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//       {response && (
//         <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
//           <p>{response.message}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// // BillsList Component
// const BillsList = () => {
//   const [bills, setBills] = useState([]);

//   useEffect(() => {
//     const fetchBills = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}/bills`);
//         setBills(res.data.data.bills);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchBills();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">Bills</h2>
//       <ul className="space-y-2">
//         {bills.map((bill) => (
//           <li key={bill._id} className="p-4 border rounded bg-white">
//             <p><strong>Name:</strong> {bill.firstName} {bill.lastName}</p>
//             <p><strong>Date:</strong> {bill.date}</p>
//             <p><strong>Bill Number:</strong> {bill.bill_number}</p>
//             <p><strong>Status:</strong> {bill.status}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // AllData Component
// const AllData = () => {
//   const [data, setData] = useState({ bills: [], monthly_winners: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}/all-data`);
//         setData(res.data.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100">
//       <h2 className="text-2xl font-bold mb-4">All Data</h2>
//       <h3 className="text-xl font-semibold mb-2">Bills</h3>
//       <ul className="space-y-2">
//         {data.bills.map((bill) => (
//           <li key={bill._id} className="p-4 border rounded bg-white">
//             <p><strong>Name:</strong> {bill.firstName}</p>
//             <p><strong>Date:</strong> {bill.date}</p>
//             <p><strong>Bill Number:</strong> {bill.bill_number}</p>
//           </li>
//         ))}
//       </ul>

//       <h3 className="text-xl font-semibold mt-6 mb-2">Monthly Winners</h3>
//       <ul className="space-y-2">
//         {data.monthly_winners.map((winner) => (
//           <li key={winner._id} className="p-4 border rounded bg-white">
//             <p><strong>Month:</strong> {winner.month}</p>
//             <p><strong>Name:</strong> {winner.firstName}</p>
//             <p><strong>Prize Amount:</strong> {winner.prize_amount}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Main App Component
// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-blue-500 text-white p-4 text-center">
//         <h1 className="text-3xl font-bold">Bill Management</h1>
//       </header>
//       <main className="p-4">
//         <SubmitBill />
//         <BillsList />
//         <AllData />
//       </main>
//     </div>
//   );
// };

// export default App;
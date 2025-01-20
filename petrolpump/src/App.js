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
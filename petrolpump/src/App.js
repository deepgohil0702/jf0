import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserForm from './components/UserForm';
import AdminPanel from './components/AdminPanel';
import BillsList from './components/BillsList';
import ImageUploader from './components/ImageUploader';
import ContactAdmin from './components/ContactAdmin';
import SupportLogin from './components/SupportLogin';
import ProtectedRoute from './components/ProtectedRoute';
import Winner from './components/Winner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/winner" element={<Winner />} />
        <Route path="/admin-login" element={<SupportLogin />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute>
          } 
        />
        <Route path="/bill" element={<BillsList />} />
        <Route 
          path="/img" 
          element={
            <ProtectedRoute>
              <ImageUploader />
            </ProtectedRoute>
          } 
        />
        <Route path="/support" element={<ContactAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
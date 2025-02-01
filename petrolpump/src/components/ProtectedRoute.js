import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('support_authenticated') === 'true';
    const location = useLocation();
    
    if (!isAuthenticated) {
        return <Navigate to="/admin-login" state={{ from: location.pathname }} />;
    }
    
    return children;
};

export default ProtectedRoute;
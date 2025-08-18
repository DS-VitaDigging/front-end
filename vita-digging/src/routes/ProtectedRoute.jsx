import { Navigate, Outlet, useLocation } from 'react-router-dom';

const isLoggedIn = () => !!localStorage.getItem('accessToken');

export default function ProtectedRoute({ redirectTo = '/before-login' }) {
  const location = useLocation();

  if (!isLoggedIn()) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />;
  }
  return <Outlet />;
}
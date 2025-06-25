import useAxiosConfiguration from '@/hooks/useAxiosConfiguration';
import { getAdminLegalOwner } from '@/layouts/store/prevailageSlice';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

const ProtectRoutes = () => {
  const location = useLocation();
  useAxiosConfiguration();

  const prevailage = useSelector(getAdminLegalOwner);
  const token = localStorage.getItem('token');
  const canAccess = !!prevailage && !!token;
  if (!canAccess && location.pathname !== '/login') {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  if (canAccess && location.pathname === '/login') {
    const redirectTo = location.state?.from || '/';
    return <Navigate to={redirectTo} replace />;
  }
  return <Outlet />;
};
export default ProtectRoutes;
